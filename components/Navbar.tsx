import React, { useState, useEffect } from 'react';

interface NavbarProps {
  registrationUrl?: string;
  registrationClosed?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ registrationUrl = '/all-events', registrationClosed = false }) => {
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
          {registrationClosed ? (
            <a href="/all-events" className="px-6 py-2 text-sm font-mono font-bold uppercase border border-ink text-ink opacity-60 hover:opacity-100 hover:bg-ink hover:text-paper transition-colors">
              Registration Closed
            </a>
          ) : (
            <a 
              href={registrationUrl} 
              target={registrationUrl.startsWith('http') ? '_blank' : undefined}
              rel={registrationUrl.startsWith('http') ? 'noreferrer' : undefined}
              className="px-6 py-2 text-sm font-mono font-bold uppercase bg-ink text-paper border border-ink hover:bg-paper hover:text-ink transition-colors"
            >
              Register &rarr;
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
