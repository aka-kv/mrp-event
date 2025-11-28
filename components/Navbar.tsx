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
          <span className="font-mono font-bold text-xl tracking-tighter uppercase">
            AI IS_25
          </span>
          <a href="/" className="hidden sm:inline-block font-mono text-[10px] border border-ink px-1 pt-[2px] pb-[1px] uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors">
            [ MRP_EVENT ]
          </a>
        </div>
        
        <a href="https://luma.com/xp3erbsz" target="_blank" rel="noreferrer" className="hidden sm:block px-6 py-2 text-sm font-mono font-bold uppercase bg-ink text-paper border border-ink hover:bg-paper hover:text-ink transition-colors">
          Register &rarr;
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
