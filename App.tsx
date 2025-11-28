import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HostBio from './components/HostBio';
import Speakers from './components/Speakers';
import Features from './components/Features';
import Footer from './components/Footer';
import Ticker from './components/Ticker';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink font-serif selection:bg-ink selection:text-paper overflow-x-hidden">
      <Navbar />
      <main className="border-x border-ink max-w-7xl mx-auto bg-paper">
        <Hero />
        <Ticker />
        <div className="border-t border-ink">
          <HostBio />
        </div>
        <div className="border-t border-ink">
          <Features />
        </div>
        <div className="border-t border-ink">
          <Speakers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
