import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      style={{ color: 'gray', marginTop: '30px' }}
    >
      {'Copyright © '}
      JUEON, {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
