import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { classBody } from '@babel/types';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import {createTheme} from '@material-ui/core/styles';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )
  
  useEffect(() => {
    setUsername(prompt('Please enter a name'));
  }, [] );
  
  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  };

  return (
    <div className="App">
      <h1>Easy Message</h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input placeholder='Enter a message...' className='app__input' value={input} onChange={event => setInput(event.target.value)} />

          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} name={username} message={message} />
        ))
      }
      </FlipMove>

      {/* messages */}
    </div>
  );
}

export default App;
