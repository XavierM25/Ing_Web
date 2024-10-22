import React, { useState, useEffect } from 'react';

const PeruTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const formatter = new Intl.DateTimeFormat('es-PE', {
    timeZone: 'America/Lima',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const timeStr = formatter.format(time);
  const [hours, minutes, seconds] = timeStr.split(':').map(num => formatNumber(parseInt(num)));

  return (
    <div className="fixed top-4 right-4  px-3 py-2 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <p className="text-[15px]">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};

export default PeruTime;