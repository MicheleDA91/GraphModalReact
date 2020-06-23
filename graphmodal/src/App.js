import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <button onClick={() => setOpen(!isOpen)}>Apri Modal</button>
      {isOpen ? (
        <div className='modal'>
          <p><Chart /></p></div>

      ) : null}
    </div>
  );
}

export default App;
