import React from 'react';

// Number of placeholder slots to show
const PLACEHOLDER_COUNT = 3;

const Speakers: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-6 md:p-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Participating Voices</h2>
        <p className="font-mono text-sm uppercase tracking-wider mt-4 opacity-70">Speakers TBD</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
                <div key={index} className="group border-b border-ink md:border-b-0 md:odd:border-r lg:border-r lg:border-b lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 relative">
                    <div className="aspect-square w-full overflow-hidden border-b border-ink bg-ink/5 relative">
                        {/* Mystery pattern overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg 
                                width="120" 
                                height="120" 
                                viewBox="0 0 120 120" 
                                fill="none" 
                                className="opacity-20"
                            >
                                <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" fill="none"/>
                                <path 
                                    d="M60 30 L60 50 M60 70 L60 90 M40 60 L50 60 M70 60 L80 60" 
                                    stroke="currentColor" 
                                    strokeWidth="3" 
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {/* Subtle pattern background */}
                        <div 
                            className="w-full h-full opacity-5"
                            style={{
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`
                            }}
                        />
                    </div>
                    <div className="p-6 bg-paper">
                        <h3 className="text-xl font-serif font-bold mb-1 text-ink/40">Speaker TBD</h3>
                        <p className="font-mono text-xs uppercase tracking-wider opacity-40 mb-2">Role TBD</p>
                        <p className="font-mono text-sm font-bold border-t border-ink/20 pt-2 mt-2 inline-block text-ink/40">
                            Company TBD
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Speakers;