import React from 'react';

const Metrics: React.FC = () => {
  return (
    <section className="bg-paper border-t border-ink py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-4">Event Impact</h2>
          <p className="font-mono text-sm uppercase tracking-wider opacity-70">The Numbers That Matter</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <MetricCard 
            value="830+"
            label="People Registered"
            description="Total registrations for the summit"
          />
          <MetricCard 
            value="120+"
            label="Concurrent Attendees"
            description="Peak live attendance during the event"
          />
          <MetricCard 
            value="750+"
            label="Recording Views"
            description="People who watched the recording"
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  isLast?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, description, isLast }) => (
  <div className={`p-6 md:p-8 border border-ink bg-paper flex flex-col items-center text-center hover:bg-ink hover:text-paper transition-colors duration-300 group ${!isLast ? 'md:border-r' : ''}`}>
    <div className="mb-4">
      <span className="font-mono text-5xl md:text-6xl font-bold text-ink group-hover:text-paper transition-colors">
        {value}
      </span>
    </div>
    <h3 className="font-serif text-xl md:text-2xl font-bold mb-2 uppercase tracking-tight">
      {label}
    </h3>
    <p className="font-mono text-xs md:text-sm opacity-80 group-hover:opacity-90 leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export default Metrics;
