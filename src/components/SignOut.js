import { Button } from '@mui/material'
import React from 'react'
import {auth} from "../firebase.js"

function SignOut() {
  return (
    <div className='header'>
      <Button style={{color:"white", fontSize:"15px"}}onClick={()=>auth.signOut()}>
        サインアウト
      </Button>
    </div>
  );
}
export default SignOut;