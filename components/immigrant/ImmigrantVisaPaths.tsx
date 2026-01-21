import React from 'react';

const visaPaths = [
  'H1B → EB-1A (Extraordinary Ability)',
  'O-1 Visa',
  'F1 STEM OPT → UK Skilled Worker',
  'F1 STEM OPT → UK HPI',
  'H-1B → EU Blue Card (Germany)',
  'H-1B → Germany Opportunity Card',
  'UK Global Talent',
  'US → Canada PR Pathways'
];

const ImmigrantVisaPaths: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-8 md:p-12">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 tracking-tight">
          The Panelists Got All These Visas
        </h2>
        <p className="font-mono text-sm md:text-base opacity-70 mt-3">
          Real people. Real journeys. Multiple immigration outcomes.
        </p>
      </div>
      <div className="p-8 md:p-12 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {visaPaths.map((path, index) => (
            <span
              key={index}
              className="inline-flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-ink/40 bg-paper font-mono text-sm md:text-base font-semibold text-ink hover:bg-ink hover:text-paper transition-all duration-200 cursor-default"
            >
              {path}
            </span>
          ))}
        </div>
        <p className="text-center font-serif text-lg md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto">
          You think you don't have any other visa choice. Let's prove you wrong by talking to these people. Don't miss out.
        </p>
      </div>
    </section>
  );
};

export default ImmigrantVisaPaths;
