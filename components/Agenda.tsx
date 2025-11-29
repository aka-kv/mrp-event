import React from 'react';
import { Clock } from 'lucide-react';

interface AgendaItem {
  number: string;
  title: string;
  duration: string;
  takeaways: string[];
}

const agendaItems: AgendaItem[] = [
  {
    number: '01',
    title: 'Introduction',
    duration: '10 min',
    takeaways: [
      'Welcome and opening remarks setting the stage for an insightful discussion.'
    ]
  },
  {
    number: '02',
    title: 'Panel Discussion',
    duration: '40 min',
    takeaways: [
      'How to become an AI Engineer',
      'How to be top 1% in the era of AI',
      'Breaking no-bs questions answered by industry leaders',
      'Real strategies and tactics from those who\'ve made it',
      'The exact path to building expertise and credibility',
      'What separates top performers from the rest'
    ]
  },
  {
    number: '03',
    title: 'Audience QnA',
    duration: '40 min',
    takeaways: [
      'Interactive session where you can ask your burning questions directly to the experts.'
    ]
  }
];

const Agenda: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-6 md:p-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Event Agenda</h2>
        <p className="font-mono text-sm uppercase tracking-wider mt-4 opacity-70">
          What to Expect: Your Journey Through the Summit
        </p>
      </div>

      <div className="relative py-8 md:py-12 px-6 md:px-10">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-ink/30"></div>

        <div className="space-y-12 md:space-y-16">
          {agendaItems.map((item, index) => (
            <div
              key={item.number}
              className="relative pl-16 md:pl-20 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 flex items-center justify-center">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-paper border-2 border-ink rounded-full z-10 group-hover:bg-ink transition-colors duration-300"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-ink/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="hover:bg-ink hover:text-paper transition-colors duration-300 p-6 md:p-8 border border-ink">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-lg md:text-xl font-bold">({item.number})</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-sm md:text-base opacity-70 group-hover:opacity-100">
                      {item.duration}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5 tracking-tight leading-none">
                  {item.title}
                </h3>
                <div className="space-y-3">
                  {item.takeaways.map((takeaway, idx) => (
                    <div 
                      key={idx} 
                      className={`font-mono text-sm md:text-base leading-relaxed ${
                        item.takeaways.length === 1 
                          ? 'opacity-90' 
                          : 'font-semibold border-l-2 border-ink pl-4 py-2 group-hover:border-paper transition-colors'
                      }`}
                    >
                      {takeaway}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;

