import React from 'react';

const GlobalAISummitTicker: React.FC = () => {
  const content = "THE GLOBAL AI SUMMIT /// MARCH 14 2026 /// 11:00 AM EST /// VIRTUAL EVENT /// REGISTER NOW /// PRESENTED BY MYREALPRODUCT /// ";
  const repeatedContent = Array(10).fill(content).join("");

  return (
    <div className="border-y border-ink bg-ink text-paper overflow-hidden py-3 whitespace-nowrap relative">
      <div className="animate-marquee font-mono text-sm uppercase tracking-widest font-bold inline-block">
        {repeatedContent}
      </div>
    </div>
  );
};

export default GlobalAISummitTicker;
