import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const GlobalAISummitFeatures: React.FC = () => {
  return (
    <section className="bg-paper flex flex-col">
        <div className="border-b border-ink p-6 md:p-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase">Why Attend?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
            <FeatureColumn
                number="01"
                title="GLOBAL VOICES"
                description="The sharpest AI minds from across industries and geographies. Unfiltered. No marketing, no fluff. Just the real talk."
            />
            <FeatureColumn
                number="02"
                title="NO THEORY"
                description="Real strategies, real products, real numbers. Learn from people who are actually building and deploying AI right now."
            />
            <FeatureColumn
                number="03"
                title="LIVE Q&A"
                description="Ask your toughest AI questions directly to the experts. Get honest answers about careers, tools, and what actually works."
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

export default GlobalAISummitFeatures;
