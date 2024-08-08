import React from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import './mainSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/image4.png';
import image2 from '../assets/image5.png';
import image3 from '../assets/image6.png';
import image4 from '../assets/image3.png';
import banner from '../assets/banner.png'; 
import ContadorBoda from './timer/index.jsx';

const images = [image1, image2, image3, image4];

function MainSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Box
      className="main-section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: { xs: '10px', sm: '20px', md: '10px' },
      }}
    >
      <Box
        sx={{
          width: {xs: '80%', sm: '100%', md: '100%'},
          height: 'auto',
          
          pl: {xs: 4}
        }}
      >
        <img src={banner} alt="Banner" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <Box
        sx={{
          width: { xs: '50%', sm: '80%', md: '100%' },
          maxWidth: '600px',
          height: { xs: 'auto', md: '400px' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Slider {...settings} className="carousel">
          {images.map((image, index) => (
            <div key={index}>
              <Box
                component="img"
                src={image}
                alt={`Imagen ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
      <ContadorBoda />
    </Box>
  );
}

export default MainSection;
