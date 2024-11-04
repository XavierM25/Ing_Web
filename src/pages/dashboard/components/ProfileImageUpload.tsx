import React, { useState, useRef } from 'react';

interface ProfileImageUploadProps {
  currentImage?: string;
  onImageChange: (newImage: string) => void;
}

export default function ProfileImageUpload({ currentImage, onImageChange }: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'tu_upload_preset'); // Reemplaza con tu upload preset de Cloudinary

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/tu_cloud_name/image/upload`, // Reemplaza con tu cloud name
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        onImageChange(data.secure_url);
      } else {
        throw new Error('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al subir la imagen');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async () => {
    if (!currentImage || !confirm('¿Estás seguro de querer eliminar tu foto de perfil?')) return;

    try {
      setIsUploading(true);
      // Aquí podrías llamar a un endpoint para eliminar la imagen si lo necesitas
      onImageChange('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar la imagen');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative group w-24 h-24">
      {/* Contenedor de la imagen */}
      <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden">
        {currentImage ? (
          <img
            src={currentImage}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            👤
          </div>
        )}
      </div>

      {/* Overlay de carga */}
      {isUploading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        </div>
      )}

      {/* Botones de acción */}
      <div className="absolute -bottom-2 right-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
          title="Cambiar foto"
          disabled={isUploading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        
        {currentImage && (
          <button
            onClick={handleDeleteImage}
            className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
            title="Eliminar foto"
            disabled={isUploading}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Input file oculto */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
        disabled={isUploading}
      />
    </div>
  );
}