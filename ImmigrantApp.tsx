import React from 'react';
import Navbar from './components/Navbar';
import ImmigrantHero from './components/immigrant/ImmigrantHero';
import ImmigrantHostBio from './components/immigrant/ImmigrantHostBio';
import ImmigrantSpeakers from './components/immigrant/ImmigrantSpeakers';
import ImmigrantAgenda from './components/immigrant/ImmigrantAgenda';
import ImmigrantFeatures from './components/immigrant/ImmigrantFeatures';
import ImmigrantFooter from './components/immigrant/ImmigrantFooter';
import ImmigrantTicker from './components/immigrant/ImmigrantTicker';
import ImmigrantMetrics from './components/immigrant/ImmigrantMetrics';

const ImmigrantApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper overflow-x-hidden">
      <Navbar registrationUrl="https://luma.com/fsar999n" />
      <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
        <ImmigrantHero />
        <ImmigrantTicker />
        <div className="border-t border-ink">
          <ImmigrantMetrics />
        </div>
        <div className="border-t border-ink">
          <ImmigrantHostBio />
        </div>
        <div className="border-t border-ink">
          <ImmigrantFeatures />
        </div>
        <div className="border-t border-ink">
          <ImmigrantSpeakers />
        </div>
        <div className="border-t border-ink">
          <ImmigrantAgenda />
        </div>
        <div className="border-t border-ink py-12 md:py-16 px-6 flex justify-center">
          <a 
            href="https://luma.com/fsar999n" 
            target="_blank" 
            rel="noreferrer" 
            className="relative px-8 md:px-12 py-4 md:py-5 bg-ink text-paper font-mono uppercase text-base md:text-lg border border-ink hover:bg-paper hover:text-ink transition-all duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block"
          >
            Register Now
          </a>
        </div>
      </main>
      <ImmigrantFooter />
    </div>
  );
};

export default ImmigrantApp;
