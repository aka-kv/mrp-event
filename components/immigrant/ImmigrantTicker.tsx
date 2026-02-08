import React from 'react';

const ImmigrantTicker: React.FC = () => {
  const content = "EVENT COMPLETE /// THANK YOU FOR ATTENDING /// THE IMMIGRANT SUMMIT /// FEBRUARY 7 2026 /// WATCH THE RECORDING /// ";
  const repeatedContent = Array(10).fill(content).join("");

  return (
    <div className="border-y border-ink bg-ink text-paper overflow-hidden py-3 whitespace-nowrap relative">
      <div className="animate-marquee font-mono text-sm uppercase tracking-widest font-bold inline-block">
        {repeatedContent}
      </div>
    </div>
  );
};

export default ImmigrantTicker;
