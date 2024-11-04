import React, { useState, useRef } from 'react';
import { User, X } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProfileImageUploadProps {
  currentImage?: string;
  maxSizeMB?: number;
}

export default function ProfileImageUpload({
  currentImage,
  maxSizeMB = 5
}: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>(currentImage || '');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [tempImage, setTempImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (file.size > maxSizeMB * 1024 * 1024) {
      return `La imagen debe ser menor a ${maxSizeMB}MB`;
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return 'Solo se permiten archivos JPG, PNG o WebP';
    }

    return null;
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        setError(error);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setTempImage(reader.result as string);
        setIsEditorOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = async (croppedArea: any, croppedAreaPixels: any) => {
    // Guardar el área recortada para usarla cuando se aplique
    console.log(croppedAreaPixels);
  };

  const handleApplyCrop = async () => {
    setIsUploading(true);
    setError(null);

    try {
      // Aquí convertirías la imagen recortada a un archivo
      // y la subirías a Cloudinary
      const formData = new FormData();
      // Necesitarías convertir tempImage y el área recortada a un archivo
      formData.append('file', await fetch(tempImage).then(r => r.blob()));
      formData.append('upload_preset', 'yl3r3c8j');

      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dcn6ajpxf/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      setPreviewImage(data.secure_url);
      
      await fetch('/api/actualizar-perfil', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: data.secure_url }),
      });

      setIsEditorOpen(false);
    } catch (uploadError) {
      console.error('Error al subir la imagen:', uploadError);
      setError('Error al subir la imagen');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async () => {
    try {
      await fetch('/api/actualizar-perfil', {
        method: 'DELETE',
      });
      setPreviewImage('');
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
      setError('Error al eliminar la imagen');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        {previewImage ? (
          <>
            <img
              src={previewImage}
              alt="Imagen de perfil"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
            />
            <button
              onClick={handleDeleteImage}
              className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white hover:bg-red-600"
              title="Eliminar foto"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
            <User className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        disabled={isUploading}
      >
        {isUploading ? 'Subiendo...' : 'Cambiar foto'}
      </button>
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

      <Dialog open={isEditorOpen} onOpenChange={setIsEditorOpen}>
        <DialogContent className="bg-black sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-white">Editar foto</DialogTitle>
          </DialogHeader>
          <div className="relative h-[400px] w-full">
            {tempImage && (
              <Cropper
                image={tempImage}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
                cropShape="round"
                showGrid={false}
              />
            )}
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-sm">Zoom</span>
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-label="Zoom"
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditorOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleApplyCrop}
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                disabled={isUploading}
              >
                Aplicar
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}