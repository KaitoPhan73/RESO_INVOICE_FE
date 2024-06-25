import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/login-animation.json'; // Replace with your animation file path

const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ width: '100px', height: '100px' }}>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  );
};

export default LottieAnimation;
