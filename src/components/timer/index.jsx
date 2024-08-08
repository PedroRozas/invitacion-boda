import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './index.css';

import flowerBorder from '../../assets/flower.png';


const calculateTimeLeft = () => {
    const weddingDate = new Date('2025-01-17');
    const difference = weddingDate - new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
      };
    }
  
    return timeLeft;
  };
  

const ContadorBoda = () => {


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);


    return (
        <Box className="timer-container">
          <img src={flowerBorder} alt="Flor" className="border-image border-image-top" />
          <Box className="timer-paper" elevation={3}>
            <Typography variant="body2" className="grey-qo-regular" style={{ fontSize: '40px',  fontFamily: 'unset' }}>
              {`${timeLeft.days || 0} días ${timeLeft.hours || 0} horas`}
            </Typography>
          </Box>
          <img src={flowerBorder} alt="Flor" className="border-image border-image-bottom" />
        </Box>
    )
}

export default ContadorBoda;