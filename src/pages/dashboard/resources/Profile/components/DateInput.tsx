import React, { useEffect, useState } from 'react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange, isEditing }) => {
  const [dateError, setDateError] = useState(true);
  const [inputClass, setInputClass] = useState(
    'font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500'
  );

  useEffect(() => {
    const dateInput = document.getElementById('fechaNacimiento') as HTMLInputElement;
    const dateErrorElement = document.getElementById('dateError');

    const isValidDate = (date: Date) => {
      return date instanceof Date && !isNaN(date.getTime());
    };

    const updateMaxDate = () => {
      const today = new Date();
      const maxDate = today.toISOString().split('T')[0];
      dateInput.setAttribute('max', maxDate);
    };

    const validateDate = () => {
      const selectedDate = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (!isValidDate(selectedDate) || selectedDate > today) {
        setInputClass(
          'font-normal font-inter w-full px-4 py-2 border border-red-500 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500'
        );
        setDateError(false);
      } else {
        setInputClass(
          'font-normal font-inter w-full px-4 py-2 border border-[#bfbfbf] rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors disabled:bg-gray-50 disabled:text-gray-500'
        );
        setDateError(true);
      }
    };

    if (isEditing) {
      updateMaxDate();
      dateInput.addEventListener('change', validateDate);
    }

    return () => {
      dateInput.removeEventListener('change', validateDate);
    };
  }, [isEditing]);

  return (
    <div>
      <input
        type="date"
        id="fechaNacimiento"
        name="fechaNacimiento"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        placeholder="dd/mm/yyyy"
        disabled={!isEditing}
        required
      />
      {!dateError && (
        <p id="dateError" className="mt-1 text-[12px] opacity-75 text-red-500">
          Inserte una fecha válida
        </p>
      )}
    </div>
  );
};

export default DateInput;