import React from 'react';

const Divider = ({ text = "O usa Email" }) => {
  return (
    <div className="relative flex items-center justify-center w-full my-2">
      <div className="absolute w-full border-t border-[#bfbfbf]"></div>
      <div className="relative px-6 bg-[white] text-sm text-[#222]" style={{ fontFamily: 'Onest, sans-serif' }}>
        {text}
      </div>
    </div>
  );
};

export default Divider;