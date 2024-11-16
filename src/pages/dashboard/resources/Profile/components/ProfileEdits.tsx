import { useState, type FormEvent } from 'react';
import { Pencil, Lock } from 'lucide-react';
import DateInput from './DateInput.tsx';

import '../../../../../layouts/styles/global.css';

interface ProfileFormData {
  apellidos: string;
  nombres: string;
  correo: string;
  fechaNacimiento: string;
  contrasena: string;
}

export default function ProfileEdit() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProfileFormData>({
    apellidos: 'Montaño García',
    nombres: 'Xavier David',
    correo: 'xaviermg2504@gmail.com',
    fechaNacimiento: '2004-12-25',
    contrasena: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsEditing(false);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row mb-6 items-center justify-between">
        <h2 className="text-xl text-[#222] font-bold font-onest">
          Editar perfil
        </h2>
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className={`py-1 px-4 rounded-full transition-colors flex flex-row items-center ${
            isEditing ? 'bg-[#26c926]' : 'bg-[#ed2929]'
          }`}
          title={isEditing ? 'Cancelar edición' : 'Editar perfil'}
        >
          {isEditing ? (
            <Pencil className="w-4 h-4 text-white" />
          ) : (
            <Lock className="w-4 h-4 text-white" />
          )}
          <span className="ml-2 text-white text-[13px] font-onest font-medium">
            {isEditing ? 'Editando' : 'No editando'}
          </span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="space-y-4">
          {/* Apellidos */}
          <div>
            <label
              htmlFor="apellidos"
              className="block text-sm font-poppins font-semibold text-[#222] mb-1"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={(e) =>
                setFormData({ ...formData, apellidos: e.target.value })
              }
              placeholder="Ingrese sus apellidos"
              className="font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              disabled={!isEditing}
              required
            />
          </div>

          {/* Nombres */}
          <div>
            <label
              htmlFor="nombres"
              className="block text-sm font-poppins font-semibold text-[#222] mb-1"
            >
              Nombres
            </label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={formData.nombres}
              onChange={(e) =>
                setFormData({ ...formData, nombres: e.target.value })
              }
              placeholder="Ingrese sus nombres"
              className="font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              disabled={!isEditing}
              required
            />
          </div>

          {/* Correo */}
          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-poppins font-semibold text-[#222] mb-1"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={(e) =>
                setFormData({ ...formData, correo: e.target.value })
              }
              placeholder="Ingrese su correo"
              className="font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              disabled={!isEditing}
              required
            />
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label
              htmlFor="fechaNacimiento"
              className="block text-sm font-poppins font-semibold text-[#222] mb-1"
            >
              Fecha de nacimiento
            </label>
            <DateInput
              value={formData.fechaNacimiento}
              onChange={(value) =>
                setFormData({ ...formData, fechaNacimiento: value })
              }
              isEditing={isEditing}
            />
          </div>

          {/* Contraseña */}
          <div>
            <label
              htmlFor="contrasena"
              className="block text-sm font-poppins font-semibold text-[#222] mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={(e) =>
                setFormData({ ...formData, contrasena: e.target.value })
              }
              placeholder="Ingrese su contraseña"
              className="font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500"
              disabled={!isEditing}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={!isEditing}
            className={`w-full py-2 px-4 rounded-lg font-onest font-semibold border-1 transition-colors duration-200 ${
              isEditing
                ? 'bg-[#222] text-white hover:bg-[white] hover:text-black border-[#bfbfbf]'
                : 'bg-gray-300 text-gray-700 cursor-not-allowed border-[#bfbfbf]'
            }`}
          >
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
