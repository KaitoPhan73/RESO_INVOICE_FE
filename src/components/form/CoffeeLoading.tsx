import React from 'react';
import '@dotlottie/player-component/dist/dotlottie-player.mjs'; // Import dotlottie-player

const CoffeeLoading: React.FC = () => {
  return (
    // <div className="coffee-loading">
      <dotlottie-player
        src="https://lottie.host/d4dd4311-b564-4771-83e3-06141e29eeb4/tQqrViPvvP.json"
        background="transparent"
        speed="1"
        style={{ width: '100px', height: '100px' }}
        loop
        autoplay
      />
    </div>
  );
};

export default CoffeeLoading;
