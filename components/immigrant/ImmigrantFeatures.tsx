import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const ImmigrantFeatures: React.FC = () => {
  return (
    <section className="bg-paper flex flex-col">
        <div className="border-b border-ink p-6 md:p-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase">Why to Attend?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <FeatureColumn 
                number="01"
                title="JOB STRATEGY"
                description="Learn proven strategies for landing jobs as an international student or immigrant. From resume optimization to networking tactics that actually work."
            />
            <FeatureColumn 
                number="02"
                title="VISA NAVIGATION"
                description="Get clarity on visa processes, OPT, H1B, green cards, and more. Real advice from those who've successfully navigated the system."
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

export default ImmigrantFeatures;
