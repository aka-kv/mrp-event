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
import ImmigrantVisaPaths from './components/immigrant/ImmigrantVisaPaths';
import ImmigrantYoutubeRecording from './components/immigrant/ImmigrantYoutubeRecording';
import WaitlistSection from './components/WaitlistSection';

const ImmigrantApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper overflow-x-hidden">
      <Navbar registrationClosed />
      <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
        <ImmigrantHero />
        <div className="border-t border-ink py-8 md:py-12 px-6 flex flex-col items-center justify-center text-center">
          <p className="font-mono text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6 text-ink opacity-70">
            Event Sponsor: EB1A Experts
          </p>
          <a 
            href="https://eb1aexperts.com/" 
            target="_blank" 
            rel="noreferrer"
            className="transition-all duration-300"
          >
            <img 
              src="/images/immigrant-summit-images/eb1a-experts.png" 
              alt="EB1A Experts Logo" 
              className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
        <ImmigrantTicker />
        <div className="border-t border-ink">
          <ImmigrantMetrics />
        </div>
        <div className="border-t border-ink">
          <ImmigrantYoutubeRecording />
        </div>
        <div className="border-t border-ink">
          <ImmigrantHostBio />
        </div>
        <div className="border-t border-ink">
          <ImmigrantFeatures />
        </div>
        <div className="border-t border-ink">
          <ImmigrantVisaPaths />
        </div>
        <div className="border-t border-ink">
          <ImmigrantSpeakers />
        </div>
        <div className="border-t border-ink">
          <ImmigrantAgenda />
        </div>
        <div className="border-t border-ink py-12 md:py-16 px-6 flex flex-col items-center justify-center gap-6">
          <div className="px-8 md:px-12 py-4 md:py-5 border-2 border-ink font-mono uppercase text-base md:text-lg inline-block opacity-60">
            Registration Closed
          </div>
          <a href="/all-events" className="relative px-8 md:px-12 py-4 md:py-5 bg-ink text-paper font-mono uppercase text-base md:text-lg border border-ink hover:bg-paper hover:text-ink transition-all duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
            Check Out Our Other Events
          </a>
        </div>
        <WaitlistSection />
      </main>
      <ImmigrantFooter />
    </div>
  );
};

export default ImmigrantApp;
