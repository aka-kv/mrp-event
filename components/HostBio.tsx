import React from 'react';

const HostBio: React.FC = () => {
  return (
    <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative border-b md:border-b-0 md:border-r border-ink bg-gray-200 overflow-hidden flex items-center justify-center min-h-[420px] md:min-h-[520px] pb-24">
                <a
                    href="https://www.linkedin.com/in/hariprasad20/"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center -translate-y-4 md:-translate-y-6"
                >
                    <img 
                        src="/images/hari-prasad.webp" 
                        alt="Hari Prasad" 
                        className="max-h-full max-w-full object-contain bg-[#EBEBE5] p-6 md:p-10 grayscale contrast-125 hover:contrast-100 transition-all duration-500"
                    />
                </a>

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-paper border-t border-ink flex justify-between items-end">
                    <div>
                        <p className="font-mono text-xs uppercase mb-1">Host & Curator</p>
                        <p className="font-serif font-bold text-xl md:text-2xl">Hari Prasad</p>
                    </div>
                    <div className="h-3 w-3 bg-ink"></div>
                </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10 flex flex-col justify-center bg-paper">
                <div className="mb-6 md:mb-8">
                     <span className="font-mono text-xs border border-ink px-2 py-1 uppercase bg-ink text-paper">
                        The Host
                     </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    Bridging theory <br />
                    and product.
                </h2>
                
                <div className="font-serif text-base md:text-lg leading-relaxed space-y-4 mb-8 max-w-md">
                    <p>
                        Hari Prasad is an Ivy League Alum and AI Engineer.
                    </p>
                    <p>
                        Having launched 5+ AI products, he bridges the gap between academic theory and shipping real-world software.
                    </p>
                    <p>
                        He specializes in turning messy ideas into shipped, reliable AI systems.
                    </p>
                    <p>
                        "We are past the hype cycle. Now is the time for builders."
                    </p>
                </div>

                <div className="pt-6 border-t border-ink">
                    <p className="font-mono text-xs uppercase tracking-widest mb-3 text-gray-500">Featured In</p>
                    <div className="flex flex-wrap gap-3 font-mono font-bold text-base uppercase">
                        <span>TEDx</span>
                        <span className="text-gray-400">|</span>
                        <span>BBC</span>
                        <span className="text-gray-400">|</span>
                        <a href="https://www.linkedin.com/in/hariprasad20/" target="_blank" rel="noreferrer" className="underline decoration-1 underline-offset-4">
                            LinkedIn Top Voice
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HostBio;
