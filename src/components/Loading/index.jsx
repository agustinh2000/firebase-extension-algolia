import React, { useEffect } from 'react';
import Lottie from 'lottie-web';

import Data from 'utils/lottie/loading.json';

import LoadingIcon from './styles/LoadingIcon';
import IconContainer from './styles/IconContainer';
import Background from './styles/Background';

const Loading = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById('loading'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Data,
    });
  }, []);

  return (
    <>
      <Background />
      <IconContainer>
        <LoadingIcon id="loading" />
      </IconContainer>
    </>
  );
};

export default Loading;
