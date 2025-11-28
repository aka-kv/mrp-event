import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="bg-paper flex flex-col">
        <div className="border-b border-ink p-6 md:p-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase">Why to Attend?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <FeatureColumn 
                number="01"
                title="ZERO TO ONE"
                description="Stop watching tutorials. We focus on the messy, real work of going from an idea to a deployed AI product in 4 weeks."
            />
            <FeatureColumn 
                number="02"
                title="MVP MINDSET"
                description="Don't over-engineer. Learn how to identify core features, ship fast, and iterate based on real user feedback, not theory."
            />
            <FeatureColumn 
                number="03"
                title="TRACTION"
                description="Building is half the battle. Learn the distribution strategies used by top AI founders to get your first 1,000 users."
                isLast={true}
            />
        </div>
    </section>
  );
};

interface FeatureColumnProps {
    number: string;
    title: string;
    description: string;
    isLast?: boolean;
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({ number, title, description, isLast }) => (
    <div className={`p-6 md:p-8 border-ink ${!isLast ? 'border-b md:border-b-0 md:border-r' : 'border-b md:border-b-0'} flex flex-col gap-4 hover:bg-ink hover:text-paper transition-colors duration-300 group`}>
        <div className="flex justify-between items-start">
            <span className="font-mono text-xl font-bold">({number})</span>
            <ArrowDownRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 tracking-tight leading-none">{title}</h3>
            <p className="font-mono text-sm leading-relaxed opacity-90 max-w-sm">
                {description}
            </p>
        </div>
    </div>
);

export default Features;