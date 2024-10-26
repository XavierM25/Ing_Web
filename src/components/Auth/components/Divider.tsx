import React from 'react';

const Divider = ({ text = "O usa Email" }) => {
  return (
    <div className="relative flex items-center justify-center w-full my-2">
      <div className="absolute w-full border-t border-gray-300/20"></div>
      <div className="relative px-6 bg-[#0d0d0d] text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
        {text}
      </div>
    </div>
  );
};

export default Divider;