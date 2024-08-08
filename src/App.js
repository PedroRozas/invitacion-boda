import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
import { Helmet } from 'react-helmet';

import MainSection from './components/mainSection.jsx';
import fondo from './assets/fondo.png';
import fondoMobile from './assets/fondovertical.png';
import yourAudioFile from './assets/background.mp3';
import './App.css';
import ButtonsLinks from './components/buttons/index.jsx';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(yourAudioFile));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.1;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Autoplay was prevented. Trying to play the audio after a user interaction.", error);
        document.addEventListener('click', () => {
          audio.play();
        }, { once: true });
      });
    }

    return () => {
      audio.pause();
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
        <IconButton onClick={togglePlayPause} sx={{ position: 'fixed', bottom: 20, right: 20 }}>
          {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
        </IconButton>
      </Box>
    </>
  );
}

export default App;
