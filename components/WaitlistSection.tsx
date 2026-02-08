import React from 'react';

const TALLY_EMBED_URL =
  'https://tally.so/embed/dWxaMz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

const WaitlistSection: React.FC = () => {
  return (
    <section className="border-t border-ink py-12 md:py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
          Join the waitlist
        </h2>
        <p className="font-mono text-sm opacity-70 mb-8">
          Get notified when we announce new events.
        </p>
        <div className="min-h-[120px] w-full">
          <iframe
            data-opened="true"
            title="WaitList for MRP Events"
            src={TALLY_EMBED_URL}
            className="w-full border-0 min-h-[120px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
