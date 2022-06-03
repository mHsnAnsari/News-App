import React from 'react'
import { Button } from '@mui/material'

function SmButton(props) {

    const {label, onClick} = props;
  return (
      <>
      <Button onClick={onClick} variant="contained">{label}</Button>
      </>
  )
}

export default SmButton;