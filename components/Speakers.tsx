import React from 'react';

interface Speaker {
    name: string;
    role: string;
    company: string;
    image: string;
}

const speakers: Speaker[] = [
    {
        name: "Dr. Sarah Chen",
        role: "Head of AI Research",
        company: "DeepMind",
        image: "https://picsum.photos/300/300?random=1"
    },
    {
        name: "Marcus Thorne",
        role: "VP of Engineering",
        company: "OpenAI",
        image: "https://picsum.photos/300/300?random=2"
    },
    {
        name: "Elena Rodriguez",
        role: "Chief Data Scientist",
        company: "NVIDIA",
        image: "https://picsum.photos/300/300?random=3"
    },
    {
        name: "David Kim",
        role: "Founder & CEO",
        company: "NeuralNet",
        image: "https://picsum.photos/300/300?random=4"
    },
    {
        name: "Aisha Patel",
        role: "LLM Architect",
        company: "Anthropic",
        image: "https://picsum.photos/300/300?random=5"
    },
    {
        name: "James Wilson",
        role: "Distinguished Eng",
        company: "Google",
        image: "https://picsum.photos/300/300?random=6"
    }
];

const Speakers: React.FC = () => {
  return (
    <section className="bg-paper">
      <div className="border-b border-ink p-6 md:p-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase">Participating Voices</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {speakers.map((speaker, index) => (
                <div key={index} className="group border-b border-ink md:border-b-0 md:odd:border-r lg:border-r lg:border-b lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 relative">
                    <div className="aspect-square w-full overflow-hidden border-b border-ink bg-gray-200">
                        <img 
                            src={speaker.image} 
                            alt={speaker.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="p-6 bg-paper group-hover:bg-ink group-hover:text-paper transition-colors duration-200">
                        <h3 className="text-xl font-serif font-bold mb-1">{speaker.name}</h3>
                        <p className="font-mono text-xs uppercase tracking-wider opacity-70 mb-2">{speaker.role}</p>
                        <p className="font-mono text-sm font-bold border-t border-current pt-2 mt-2 inline-block">
                            {speaker.company}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Speakers;