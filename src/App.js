import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  console.log(input);

  const sendMessage = (event) => {

  }

  return (
    <div className="App">
      <h1>Sup Everybody</h1>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      {/* input field */}
      {/* input button */}

      {/* messages */}

    </div>
  );
}

export default App;
