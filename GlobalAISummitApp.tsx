import React from 'react';
import Navbar from './components/Navbar';
import GlobalAISummitHero from './components/global-ai-summit/GlobalAISummitHero';
import GlobalAISummitTicker from './components/global-ai-summit/GlobalAISummitTicker';
import GlobalAISummitFeatures from './components/global-ai-summit/GlobalAISummitFeatures';
import GlobalAISummitHostBio from './components/global-ai-summit/GlobalAISummitHostBio';
import GlobalAISummitSpeakers from './components/global-ai-summit/GlobalAISummitSpeakers';
import GlobalAISummitAgenda from './components/global-ai-summit/GlobalAISummitAgenda';
import GlobalAISummitFooter from './components/global-ai-summit/GlobalAISummitFooter';
import WaitlistSection from './components/WaitlistSection';

const GlobalAISummitApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper overflow-x-hidden">
      <Navbar registrationUrl="https://luma.com/d72x6b4o" />
      <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
        <GlobalAISummitHero />
        <GlobalAISummitTicker />
        <div className="border-t border-ink">
          <GlobalAISummitFeatures />
        </div>
        <div className="border-t border-ink">
          <GlobalAISummitHostBio />
        </div>
        <div className="border-t border-ink">
          <GlobalAISummitSpeakers />
        </div>
        <div className="border-t border-ink">
          <GlobalAISummitAgenda />
        </div>
        <div className="border-t border-ink py-12 md:py-16 px-6 flex flex-col items-center justify-center gap-6">
          <a
            href="https://luma.com/d72x6b4o"
            target="_blank"
            rel="noreferrer"
            className="relative px-8 md:px-12 py-4 md:py-5 bg-ink text-paper font-mono uppercase text-base md:text-lg border border-ink hover:bg-paper hover:text-ink transition-all duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block"
          >
            Reserve Your Seat
          </a>
          <a href="/all-events" className="font-mono text-sm uppercase tracking-widest opacity-60 hover:opacity-100 underline underline-offset-4">
            View All Events
          </a>
        </div>
        <WaitlistSection />
      </main>
      <GlobalAISummitFooter />
    </div>
  );
};

export default GlobalAISummitApp;
