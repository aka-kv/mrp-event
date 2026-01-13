import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 border-b border-ink bg-paper transition-all duration-200`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center border-x border-ink">
        <div className="flex items-center gap-4 cursor-pointer">
          <a href="/" className="font-mono font-bold text-xl tracking-tighter uppercase hover:opacity-70 transition-opacity">
            MRP_EVENTS
          </a>
          <a href="/all-events" className="hidden sm:inline-block font-mono text-[10px] border border-ink px-1 pt-[2px] pb-[1px] uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors">
            [ ALL EVENTS ]
          </a>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <a href="/all-events" className="font-mono text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
            All Events
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="px-6 py-2 text-sm font-mono font-bold uppercase bg-ink text-paper border border-ink hover:bg-paper hover:text-ink transition-colors">
            Register &rarr;
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
