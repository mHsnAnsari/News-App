import { Box} from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SmButton from './button'
import Input from './input'




function  Login() {


    const navigate = useNavigate();
    const logInUSer = () => {
        console.log("User click")
        navigate("/", { state : { user : true} } );
    }


  return (
      <>
      <Box sx={{padding : 5}} textAlign={ 'center' }>
          <Box sx={ { padding : 1 } }>
            <Input label="email" type="email" />
          </Box>
          <Box sx={ { padding : 1 } }>
              <Input label="password" type="password"  />
          </Box>
          <SmButton onClick={logInUSer} label="LOGIN" />
      </Box>
      </>
  )
}

export default  Login