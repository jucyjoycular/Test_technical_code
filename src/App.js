import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';


function App() {
  const inputReff = useRef(null)
  const [message, setMesage] = useState("");
  const [updated, setUpdated] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:8000/message")
    .then((res)=> res.json())
    .then((data)=> setMesage(data.message));
  }, []);


  const Ganjil = () => {
    setUpdated(inputReff.current.value)
  };




  return (
    <div className="App">
      <header className="App-header">

        <div>

            <input type="text" name="bil" ref={inputReff} placeholder="Masukkan Angka"/>

        </div>

        <div>

          <button>Generate Segitiga</button>

        </div>

        <div>

          <button onClick={this.onChange}>Generate Bilangan Ganjil</button>

        </div>

        <div>

          <button>Generate Bilangan Prima</button>

        </div>

        <h1>Result</h1>
        {message}<br/>
        
        {updated}
      </header>
    </div>
  );
}

export default App;
