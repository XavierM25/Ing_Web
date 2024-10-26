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
      className="absolute top-12 left-[28%] bg-white/10 border border-white/20 hover:bg-white/20"
      onClick={handleBack}
    >
      <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="m6.47 13.78.53.53 1.06-1.06-.53-.53-3.97-3.97H15v-1.5H3.56l3.97-3.97.53-.53L7 1.69l-.53.53-5.074 5.073a1 1 0 0 0 0 1.414z" fill="#fff"/></svg>
    </Button>
  );
};

export default BackButton;