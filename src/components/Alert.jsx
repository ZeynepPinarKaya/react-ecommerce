import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function Alert({ message, open = false }) {
  return <Snackbar open={open} TransitionComponent={Slide} message={message}/>;
}

export default Alert