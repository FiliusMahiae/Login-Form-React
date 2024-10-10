import { useState } from "react";
import Login from './components/Login';
import Mensaje from './components/Mensaje';
import './styles/App.css';

function App() {

  const [message, setMessage]=useState('');

  const handleSendOk = (message) =>{
    setMessage(message);
  }

  return (
    <div className="App">
        <Login sendOk={handleSendOk}/>
        <Mensaje message={message} />
    </div>
  );
}

export default App;
