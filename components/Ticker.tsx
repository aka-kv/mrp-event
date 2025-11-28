import React from 'react';

const Ticker: React.FC = () => {
  const content = "REGISTRATIONS CLOSING SOON /// JOIN THE AI REVOLUTION /// DECEMBER 21 2025 /// BUILD SHIP SCALE /// ";
  const repeatedContent = Array(10).fill(content).join("");

  return (
    <div className="border-y border-ink bg-ink text-paper overflow-hidden py-3 whitespace-nowrap relative">
      <div className="animate-marquee font-mono text-sm uppercase tracking-widest font-bold inline-block">
        {repeatedContent}
      </div>
    </div>
  );
};

export default Ticker;