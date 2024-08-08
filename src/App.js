import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';

import MainSection from './components/mainSection.jsx';
import fondo from './assets/fondo.png';
import fondoMobile from './assets/fondovertical.png';
import './App.css';
import ButtonsLinks from './components/buttons/index.jsx';

const App = () => {
  useEffect(() => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.volume = 0.2;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay was prevented. Trying to play the audio after a user interaction.", error);
          document.addEventListener('click', () => {
            audio.play();
          });
        });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';" />
      </Helmet>
      <Box
        sx={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '@media (max-width: 600px)': {
            backgroundImage: `url(${fondoMobile})`,
          },
        }}
      >
        <MainSection />
        <ButtonsLinks />
      </Box>
    </>
  );
}

export default App;
