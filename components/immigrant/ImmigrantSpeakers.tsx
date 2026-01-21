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
    name: 'Sunjana Ramana',
    role: 'Data & AI Engineer',
    company: 'QBE Insurance',
    image: '/images/immigrant-summit-images/sunjana.jpeg',
    linkedin: 'https://www.linkedin.com/in/sunjana-ramana/',
    highlights: ['Tedx Speaker', 'Featured - Fox, NBC, Times Square', 'Columbia University Scholar 23\'', 'F1 Stem OPT -> UK HPI Visa']
  },
  {
    name: 'Saloni Thakkar',
    role: 'Research Data Scientist',
    company: 'Barclays',
    image: '/images/dec25-summit-images/saloni.jpeg',
    linkedin: 'https://www.linkedin.com/in/salonithakkar/',
    highlights: ['Ex- HP', 'EB1A Awardee', 'TAMU Alum']
  },
  {
    name: 'Sumit Gupta',
    role: 'Lead Analytics Engineer',
    company: 'Notion',
    image: '/images/immigrant-summit-images/sumit.png',
    linkedin: 'https://www.linkedin.com/in/sumonigupta/',
    highlights: ['Ex-Snowflake, Dropbox', 'EB1A recipient', '27k+ on LinkedIn']
  },
  {
    name: 'Vidhi Sharma',
    role: 'Data Regulatory Professional',
    company: 'Uniper',
    image: '/images/immigrant-summit-images/vidhi.jpeg',
    linkedin: 'https://www.linkedin.com/in/vidhisharma93/',
    highlights: ['7+ Years Global Experience', 'Ex-PwC | Ex-EY', 'H-1B (U.S.) → EU Blue Card']
  },
  {
    name: 'Harsh Maheshwari',
    role: 'Principal AI/ML Engineer',
    company: 'Superset',
    image: '/images/immigrant-summit-images/harsh.jpeg',
    linkedin: 'https://www.linkedin.com/in/hmacmaheshwari/',
    highlights: ['O1 Visa', 'Healthcare & Fintech', 'Mentored 100+ Engineers']
  },
  {
    name: 'Veronica Sepehr',
    role: 'CEO',
    company: 'Westdale Immigration',
    image: '/images/immigrant-summit-images/veronica.jpeg',
    linkedin: 'https://www.linkedin.com/in/veronicasepehr/',
    highlights: ['Regulated Canadian Immigration Consultant', 'Ex-RBC Ventures', 'H-1B & F-1 → Canada Pathways']
  },
  {
    name: 'Asra Aslam',
    role: 'Assistant Professor of AI & Data Science',
    company: 'University of Sheffield',
    image: '/images/immigrant-summit-images/arsh.jpeg',
    linkedin: 'https://www.linkedin.com/in/asra-aslam-phd-501a4261/',
    highlights: ['Rising Star of the Year 2024', 'UK Global Talent Visa', 'Academic/Education Leader']
  }
];

const ImmigrantSpeakers: React.FC = () => {
  const renderSpeaker = (speaker: Speaker, index: number) => {
    // For 7 speakers in a 3x3 grid (with 1 centered in last row), all speakers get borders except:
    // - Last column (index % 3 === 2): no right border
    // - Last row (index >= 6): no bottom border
    let borderClasses = 'group border-b border-ink md:border-b-0 md:odd:border-r';
    
    // Desktop layout: 3 columns, 3 rows
    borderClasses += ' lg:border-r lg:border-b';
    
    // Remove right border on last column (indices 2, 5)
    if (index % 3 === 2 && index < 6) {
      borderClasses += ' lg:border-r-0';
    }
    
    // Remove bottom border on last row (index 6 - Asra Aslam)
    if (index >= 6) {
      borderClasses += ' lg:border-b-0';
    }
    
    // Center the last speaker (Asra Aslam) on large screens and ensure it has all borders
    let gridClasses = '';
    if (index === 6) {
      gridClasses = 'lg:col-start-2 lg:border-l';
    }
    
    return (
    <div
      key={speaker.name}
      className={`${borderClasses} ${gridClasses} relative`}
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

      {/* Speakers grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => renderSpeaker(speaker, index))}
      </div>
    </section>
  );
};

export default ImmigrantSpeakers;
