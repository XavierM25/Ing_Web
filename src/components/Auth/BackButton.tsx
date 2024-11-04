import React from 'react';
import { Button } from '@nextui-org/react';

const BackButton = () => {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <Button
      isIconOnly
      aria-label="Go back"
      className="absolute top-12 left-[28%] bg-[#222] border border-[#bfbfbf] hover:bg-[#222]/80"
      onClick={handleBack}
    >
      <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path d="m6.47 13.78.53.53 1.06-1.06-.53-.53-3.97-3.97H15v-1.5H3.56l3.97-3.97.53-.53L7 1.69l-.53.53-5.074 5.073a1 1 0 0 0 0 1.414z" fill="#fff"/></svg>
    </Button>
  );
};

export default BackButton;