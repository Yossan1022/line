import React, { useState } from 'react'
import { db,auth } from '../firebase';
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';


export const SendMessage = () => {
  const [message,setMessage] = useState();
  function sendMessage(e){
   e.preventDefault();
const {uid,photoURL} = auth.currentUser   

   db.collection("messages").add({
    text: message,
photoURL,
createdAt: firebase.firestore.FieldValue.serverTimestamp(),
uid,
   });
   setMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
        style={{
          width: "78%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        placeholder='メッセージを入力してください' type="text" onChange={(e) => setMessage(e.target.value)}
        value={message}
        />
        
      </div>
      </form>
    </div>
  )
}
