import React from 'react';

const GlobalAISummitFooter: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-ink max-w-7xl mx-auto border-x mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-ink flex flex-col justify-between h-full">
            <div>
              <h4 className="font-mono font-bold text-lg uppercase mb-2">The Global AI Summit</h4>
              <p className="font-serif text-sm opacity-60">&copy; 2026. All rights reserved.</p>
            </div>

            <div className="mt-8 pt-8 border-t border-ink border-dashed">
              <a href="https://myrealproduct.com" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity">
                Powered by MyRealProduct
              </a>
            </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col md:items-end justify-center">
            <a href="https://luma.com/d72x6b4o" target="_blank" rel="noreferrer" className="px-8 py-3 bg-ink text-paper font-mono uppercase text-sm border border-ink hover:bg-paper hover:text-ink transition-all mb-8 w-full md:w-auto inline-block text-center">
                Reserve Your Seat &rarr;
            </a>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-2 font-mono text-sm uppercase items-start md:items-center">
                <a href="/all-events" className="hover:underline">All Events</a>
                <span className="hidden md:inline text-gray-400">/</span>
                <a href="https://myrealproduct.com" target="_blank" rel="noreferrer" className="hover:underline">Cohort</a>
                <span className="hidden md:inline text-gray-400">/</span>
                <a href="https://www.linkedin.com/in/hariprasad20/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span className="hidden md:inline text-gray-400">/</span>
                <a href="mailto:contact@myrealproduct.com" className="hover:underline">contact@myrealproduct.com</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalAISummitFooter;
