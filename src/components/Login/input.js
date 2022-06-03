import { TextField } from '@mui/material'
import React from 'react'


function Input(props) {
    const {type, label} = props;
  return (
      <>
      <TextField type={type} label={label} variant="outlined" />
      </>
  )
}

export default Input