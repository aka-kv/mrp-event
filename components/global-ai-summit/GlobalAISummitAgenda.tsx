import React from 'react';
import { Clock } from 'lucide-react';

interface AgendaItem {
  number: string;
  title: string;
  time: string;
  duration: string;
  takeaways: string[];
}

const agendaItems: AgendaItem[] = [
  {
    number: '01',
    title: 'Opening Keynote',
    time: '11:00 AM',
    duration: '15 min',
    takeaways: [
      'Welcome, context-setting, and the state of AI in 2026. What has changed, what is overhyped, and what actually matters.'
    ]
  },
  {
    number: '02',
    title: 'Panel: AI in the Real World',
    time: '11:15 AM',
    duration: '45 min',
    takeaways: [
      'How top engineers and leaders are using AI on the job today',
      'What skills separate the top 1% in an AI-first world',
      'The honest truth about AI replacing vs. augmenting roles',
      'How to position yourself to thrive regardless of the tools',
      'No-BS takes from people who are actually shipping AI products'
    ]
  },
  {
    number: '03',
    title: 'Fireside Chat: Building AI Products That Scale',
    time: '12:00 PM',
    duration: '30 min',
    takeaways: [
      'From idea to deployed product: what the process actually looks like',
      'How to find the right problem to solve with AI',
      'Getting from zero users to traction without a massive team'
    ]
  },
  {
    number: '04',
    title: 'Audience Q&A',
    time: '12:30 PM',
    duration: '30 min',
    takeaways: [
      'Open floor. Bring your toughest questions and get direct answers from the speakers on careers, tools, products, and everything AI.'
    ]
  }
];

const GlobalAISummitAgenda: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-6 md:p-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Event Agenda</h2>
        <p className="font-mono text-sm uppercase tracking-wider mt-4 opacity-70">
          March 14, 2026 · 11:00 AM EST · ~2 Hours
        </p>
      </div>

      <div className="relative py-8 md:py-12 px-6 md:px-10">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-[1px] bg-ink/30"></div>

        <div className="space-y-12 md:space-y-16">
          {agendaItems.map((item) => (
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
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-lg md:text-xl font-bold">({item.number})</span>
                    <span className="font-mono text-xs md:text-sm opacity-60 group-hover:opacity-80 uppercase tracking-widest">
                      {item.time}
                    </span>
                  </div>
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

export default GlobalAISummitAgenda;
