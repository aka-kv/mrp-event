import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HostBio from './components/HostBio';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Features from './components/Features';
import Footer from './components/Footer';
import Ticker from './components/Ticker';
import Metrics from './components/Metrics';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper overflow-x-hidden">
      <Navbar />
      <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
        <Hero />
        <Ticker />
        <div className="border-t border-ink">
          <Metrics />
        </div>
        <div className="border-t border-ink">
          <HostBio />
        </div>
        <div className="border-t border-ink">
          <Features />
        </div>
        <div className="border-t border-ink">
          <Speakers />
        </div>
        <div className="border-t border-ink">
          <Agenda />
        </div>
        <div className="border-t border-ink py-12 md:py-16 px-6 flex flex-col items-center justify-center gap-6">
          <div className="px-8 md:px-12 py-4 md:py-5 border-2 border-ink font-mono uppercase text-base md:text-lg inline-block opacity-60">
            Registration Closed
          </div>
          <a 
            href="/all-events" 
            className="relative px-8 md:px-12 py-4 md:py-5 bg-ink text-paper font-mono uppercase text-base md:text-lg border border-ink hover:bg-paper hover:text-ink transition-all duration-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block"
          >
            Check Out Our Other Events
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
