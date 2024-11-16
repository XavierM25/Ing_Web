import React, { useState, useRef } from 'react';
import { User } from 'lucide-react';

interface ProfileImageUploadProps {
  currentImage?: string;
  maxSizeMB?: number;
}

export default function ProfileImageUpload({
  currentImage,
  maxSizeMB = 5,
}: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>(currentImage || '');
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

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        setError(error);
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    if (previewImage) {
      setPreviewImage('');
    } else {
      alert('Este usuario no tiene foto');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        {previewImage ? (
          <img
            src={previewImage}
            alt="Imagen de perfil"
            className="w-28 h-28 rounded-full object-cover border-2 border-[#eaeaea]"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-100 border-2 border-[#dedede] flex items-center justify-center">
            <User className="w-14 h-14 text-gray-400" />
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
      <div className='flex flex-row mt-2'>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-[105px] font-inter font-[12px] text hover:border-[1px] text-sm hover:border-[#bfbfbf] hover:bg-[black] hover:bg-opacity-5 hover:text-[#0267dc] transition-colors duration-300 border-[1px] border-[#bfbfbf] text-[#222] py-3 rounded-lg"
          disabled={isUploading}
        >
          {isUploading ? 'Subiendo...' : 'Cambiar foto'}
        </button>
        {error && <p className="text-red-500 mt-2 text-[13px]">{error}</p>}
        <button
          onClick={() => {
            if (window.confirm('¿Desea eliminar su foto?')) {
              handleRemovePhoto();
            }
          }}
          className="ml-3 w-[105px] font-inter font-[13px] text hover:border-[1px] text-sm hover:border-[#bfbfbf] hover:bg-[black] hover:text-[#f32121] transition-colors duration-300 border-[1px] border-[#bfbfbf] text-[#222] py-3 rounded-lg"
          disabled={isUploading}
        >
          Eliminar Foto
        </button>
      </div>
    </div>
  );
}
