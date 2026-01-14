import React from 'react';
import { Linkedin } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
  highlights?: string[];
}

const speakers: Speaker[] = [
  {
    name: 'Sohan Sethi',
    role: 'Data Analytics Manager',
    company: 'HCSC',
    image: '/images/dec25-summit-images/sohan_sethi.jpg',
    linkedin: 'https://www.linkedin.com/in/sohansethi/',
    highlights: ['120k+ LinkedIn', 'Co-founded 2 Startups By 20', 'Featured on TEDx, CNBC, Business Insider', 'India to US (STEM OPT Visa)']
  },
  {
    name: 'Speaker TBD',
    role: 'Role TBD',
    company: 'Company TBD',
    image: '/images/placeholder-speaker.jpg',
    linkedin: '#',
    highlights: []
  },
  {
    name: 'Speaker TBD',
    role: 'Role TBD',
    company: 'Company TBD',
    image: '/images/placeholder-speaker.jpg',
    linkedin: '#',
    highlights: []
  },
  {
    name: 'Speaker TBD',
    role: 'Role TBD',
    company: 'Company TBD',
    image: '/images/placeholder-speaker.jpg',
    linkedin: '#',
    highlights: []
  },
  {
    name: 'Speaker TBD',
    role: 'Role TBD',
    company: 'Company TBD',
    image: '/images/placeholder-speaker.jpg',
    linkedin: '#',
    highlights: []
  },
  {
    name: 'Speaker TBD',
    role: 'Role TBD',
    company: 'Company TBD',
    image: '/images/placeholder-speaker.jpg',
    linkedin: '#',
    highlights: []
  }
];

const ImmigrantSpeakers: React.FC = () => {
  const renderSpeaker = (speaker: Speaker, index: number) => {
    // For 6 speakers in a 3x2 grid, all speakers get borders except:
    // - Last column (index % 3 === 2): no right border
    // - Last row (index >= 3): no bottom border
    let borderClasses = 'group border-b border-ink md:border-b-0 md:odd:border-r';
    
    // Desktop layout: 3 columns, 2 rows
    borderClasses += ' lg:border-r lg:border-b';
    
    // Remove right border on last column (indices 2 and 5)
    if (index % 3 === 2) {
      borderClasses += ' lg:border-r-0';
    }
    
    // Remove bottom border on last row (indices 3, 4, 5)
    if (index >= 3) {
      borderClasses += ' lg:border-b-0';
    }
    
    return (
    <div
      key={speaker.name}
      className={`${borderClasses} relative`}
    >
      <div className="aspect-square w-full overflow-hidden border-b border-ink bg-[#EBEBE5] relative flex items-center justify-center">
        {/* Placeholder pattern for TBD speakers */}
        {speaker.image === '/images/placeholder-speaker.jpg' ? (
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
        ) : (
          <img 
            src={speaker.image} 
            alt={speaker.name}
            className="max-h-full max-w-full object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        )}
      </div>
      <div className="p-6 bg-paper relative">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-serif font-bold">{speaker.name}</h3>
          {speaker.linkedin !== '#' && (
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-ink hover:text-ink/70 transition-colors duration-300 flex-shrink-0"
              aria-label={`${speaker.name}'s LinkedIn`}
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          )}
        </div>
        <p className="font-mono text-xs uppercase tracking-wider opacity-70 mb-2">
          {speaker.role}
        </p>
        <p className="font-mono text-sm font-bold border-t border-ink/20 pt-2 mt-2 mb-3 text-center">
          {speaker.company}
        </p>
        {speaker.highlights && speaker.highlights.length > 0 && (
          <div className="mt-3 space-y-1 text-center">
            {speaker.highlights.map((highlight, idx) => (
              <p key={idx} className="font-mono text-xs uppercase tracking-wider opacity-60">
                {highlight}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
    );
  };

  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-6 md:p-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Participating Voices</h2>
        <p className="font-mono text-sm uppercase tracking-wider mt-4 opacity-70">
          Speakers: Industry Leaders & Experts
        </p>
      </div>

      {/* 6 speakers in a 3x2 grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => renderSpeaker(speaker, index))}
      </div>
    </section>
  );
};

export default ImmigrantSpeakers;
