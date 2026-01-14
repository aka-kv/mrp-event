import React, { useState, useEffect } from 'react';

const ImmigrantHero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-07T16:00:00Z").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-24 px-6 flex flex-col items-center justify-center text-center bg-paper overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <a href="https://myrealproduct.com" target="_blank" rel="noreferrer" className="mb-6 md:mb-8 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] border border-ink px-4 md:px-6 py-2 inline-block hover:bg-ink hover:text-paper transition-colors cursor-pointer z-10">
        Presented by MyRealProduct
      </a>

      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase text-ink max-w-6xl relative z-10">
        The Immigrant<br />
        Summit
      </h1>

      <div className="w-full border-y border-ink py-4 mb-12 max-w-4xl mx-auto z-10 bg-paper">
        <p className="font-mono text-[10px] md:text-sm uppercase tracking-wider flex flex-col md:flex-row justify-between items-center gap-2">
          <span>February 7, 2026</span>
          <span className="hidden md:inline mx-4 opacity-30">////</span>
          <span>Online Stream</span>
          <span className="hidden md:inline mx-4 opacity-30">////</span>
          <span>Hosted by Hari Prasad</span>
        </p>
      </div>

      {/* Mechanical Timer (Static) */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 z-10">
        <FlipUnit value={timeLeft.days} label="Days" />
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <FlipUnit value={timeLeft.minutes} label="Mins" />
        <FlipUnit value={timeLeft.seconds} label="Secs" />
      </div>

      <div className="relative group z-10">
        {/* Handwriting Arrows */}
        <div className="absolute -left-28 md:-left-40 top-1/2 -translate-y-1/2 hidden md:block opacity-60 pointer-events-none">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink">
                <path d="M10 40 Q 60 10, 110 30" fill="none" />
                <path d="M100 25 L 110 30 L 100 35" />
            </svg>
            <span className="font-hand text-xl absolute -top-4 left-0 -rotate-12">don't miss out!</span>
        </div>
        
        <div className="absolute -right-28 md:-right-40 top-1/2 -translate-y-1/2 hidden md:block opacity-60 pointer-events-none">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink">
                <path d="M110 40 Q 60 50, 10 30" fill="none" />
                <path d="M20 25 L 10 30 L 20 35" />
            </svg>
             <span className="font-hand text-xl absolute -bottom-4 right-0 rotate-6">spots limited</span>
        </div>

        <a href="https://luma.com/fsar999n" target="_blank" rel="noreferrer" className="relative px-8 md:px-12 py-4 md:py-5 bg-ink text-paper font-mono uppercase text-base md:text-lg border border-ink hover:bg-paper hover:text-ink transition-all duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
            Reserve Seat
        </a>
      </div>
      
    </section>
  );
};

const FlipUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const stringValue = String(value).padStart(2, '0');
    
    return (
        <div className="flex flex-col items-center gap-3 md:gap-4">
            <div className="relative w-16 h-20 md:w-24 md:h-32 bg-ink border border-ink shadow-sm rounded-[2px] overflow-hidden flex items-center justify-center">
                 
                 {/* The Line - Behind text */}
                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-paper/20 z-0"></div>

                 {/* The Number */}
                 <span className="text-4xl md:text-6xl font-mono font-bold text-paper z-10 leading-none">
                    {stringValue}
                 </span>
                 
                 {/* Gradient Overlay for texture */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none z-20"></div>
            </div>
            <span className="font-mono text-[10px] md:text-xs uppercase font-bold tracking-[0.2em]">{label}</span>
        </div>
    );
};

export default ImmigrantHero;
