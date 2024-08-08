import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton, Link, Modal } from '@mui/material';

import estacionamiento from '../../assets/estacionamiento.png';
import buttonparking from '../../assets/buttonparking.png';
import contact from '../../assets/contacto.png'; 
import listaNovios from '../../assets/listanovios.png'; 
import preguntas from '../../assets/preguntas.png'; 
import ubicacion from '../../assets/ubicacion.png'; 

const ButtonsLinks = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      className="buttons-links"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(5, 1fr)' }, // Tres columnas en mobile, cinco en pantallas más grandes
        gap: { xs: 1, sm: 2, md: 4 }, 
        justifyItems: 'center', // Centra los elementos horizontalmente
        alignItems: 'center', // Centra los elementos verticalmente
        width: '100%',
      }}
    >
      <IconButton onClick={handleOpen}>
        <Box
          component="img"
          src={buttonparking}
          alt="Button Parking"
          sx={{
            height: 100,
          }}
        />
      </IconButton>
      <Link href="https://wa.me/56984272570" target="_blank" underline="none">
      <IconButton size='large' color="text.primary">
        <Box
          component="img"
          src={contact}
          alt="Contact"
          sx={{
            height: 100,
          }}
        />
      </IconButton>
      </Link>
      <Link href="https://drive.google.com/file/d/16dZfZeNZFRORSWvFdOjWyiPc6-YptWfV/view?usp=sharing" target="_blank" underline="none">
      <IconButton size='large' color="text.primary">
        <Box
          component="img"
          src={listaNovios}
          alt="Lista de Novios"
          sx={{
            height: 100,
          }}
        />
      </IconButton>
      </Link>
      <Link href="https://drive.google.com/file/d/1UWkygFwNhfGAx18Vt3EYbGFqzJJXlr-s/view?usp=sharing" target="_blank" underline="none">
      <IconButton size='large' color="text.primary">
        <Box
          component="img"
          src={preguntas}
          alt="Preguntas"
          sx={{
            height: 100,
          }}
        />
      </IconButton>
      </Link>
      <Link href="https://maps.app.goo.gl/vfGxq1xeg1Rk7Mp79" target="_blank" underline="none">
      <IconButton size='large' color="text.primary">
        <Box
          component="img"
          src={ubicacion}
          alt="Ubicación"
          sx={{
            height: 100,
          }}
        />
      </IconButton>
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs: 350, sm: 600},
            bgcolor: 'background.paper',
            border: '2px solid #000',
            borderRadius: 2,
            boxShadow: 24,
            p: 1,
          }}
        >
          <img src={estacionamiento} alt="Estacionamiento" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Modal>
    </Box>
  );
}

export default ButtonsLinks;
