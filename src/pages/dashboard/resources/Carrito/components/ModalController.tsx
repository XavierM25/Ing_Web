import { useState } from 'react';
import PaymentModal from '../../../../../components/PaymentModal';

interface ModalControllerProps {
  price: string;
  title: string;
}

export default function ModalController({ price, title }: ModalControllerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-row px-24 py-2 bg-white bg-opacity-5 border-[#bfbfbf] border-[1px] backdrop-blur rounded-lg mx-auto"
      >
        <p className="text-[#222]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
          Comprar para mí
        </p>
      </button>

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        price={price}
        title={title}
      />
    </>
  );
}
