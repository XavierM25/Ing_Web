import { useState, useRef, useEffect } from 'react';

interface Option {
  id: string;
  label: string;
  category: string;
}

interface Props {
  options: Option[];
  onSelectionChange: (selected: Set<string>) => void;
}

const CustomDropdown = ({ options, onSelectionChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set(),
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const groupedOptions = options.reduce(
    (acc, option) => {
      const category = option.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(option);
      return acc;
    },
    {} as Record<string, Option[]>,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (optionId: string, category: string) => {
    const newSelected = new Set(selectedOptions);

    if (category === 'Precio') {
      // Para la categoría Precio, primero removemos cualquier otra opción de precio
      selectedOptions.forEach((id) => {
        const option = options.find((opt) => opt.id === id);
        if (option && option.category === 'Precio') {
          newSelected.delete(id);
        }
      });

      // Luego agregamos la nueva selección (o la removemos si es la misma)
      if (newSelected.has(optionId)) {
        newSelected.delete(optionId);
      } else {
        newSelected.add(optionId);
      }
    } else {
      // Para otras categorías, mantener el comportamiento original de checkbox
      if (newSelected.has(optionId)) {
        newSelected.delete(optionId);
      } else {
        newSelected.add(optionId);
      }
    }

    setSelectedOptions(newSelected);
    onSelectionChange(newSelected);
  };

  const resetSelection = () => {
    setSelectedOptions(new Set());
    onSelectionChange(new Set());
  };

  const getButtonText = () => {
    if (selectedOptions.size === 0) {
      return 'Filtrar';
    } else if (selectedOptions.size === 1) {
      return '1 seleccionado';
    } else {
      return `${selectedOptions.size} seleccionados`;
    }
  };

  const renderOptionControl = (option: Option, isSelected: boolean) => {
    if (option.category === 'Precio') {
      return (
        <div
          className={`w-4 h-4 border rounded-full transition-all duration-150 flex items-center justify-center ${
            isSelected ? 'border-blue-500' : 'border-gray-300'
          }`}
        >
          {isSelected && <div className="w-2 h-2 rounded-full bg-blue-500" />}
        </div>
      );
    }

    return (
      <div
        className={`w-4 h-4 border rounded transition-all duration-150 flex items-center justify-center ${
          isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
        }`}
      >
        {isSelected && (
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-onest px-4 py-2 border border-gray-300 rounded-lg bg-white font-medium text-[#222] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        style={{ transition: 'width 0.3s ease' }}
      >
        {getButtonText()}
      </button>

      {/* Dropdown panel */}
      <div
        className={`font-poppins absolute mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 transform transition-all duration-200 z-50 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-h-96 overflow-y-auto p-4">
          {Object.entries(groupedOptions).map(([category, items]) => (
            <div key={category} className="mb-4">
              <div className="text-sm font-onest text-[#222] font-bold mb-2">
                {category}
              </div>
              {items.map((option) => (
                <div
                  key={option.id}
                  onClick={() => toggleOption(option.id, category)}
                  className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-150 ${
                    selectedOptions.has(option.id)
                      ? 'bg-blue-50 text-[#0267dc]'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {renderOptionControl(
                      option,
                      selectedOptions.has(option.id),
                    )}
                    <span className="text-sm">{option.label}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={resetSelection}
            className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-150"
          >
            Restablecer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
