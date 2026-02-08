import React from 'react';

const ImmigrantYoutubeRecording: React.FC = () => {
  return (
    <div className="border-t border-ink py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center font-serif">
          Watch Recording
        </h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-2 border-ink"
            src="https://www.youtube.com/embed/zRo0nbYURD4"
            title="The Immigrant Summit - Recording"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ImmigrantYoutubeRecording;
