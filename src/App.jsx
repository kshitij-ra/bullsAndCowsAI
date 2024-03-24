import { useState } from 'react';
import Header from './components/Header.jsx';
import AiGameArea from './components/AiGameArea.jsx';
import UserGameArea from './components/UserGameArea.jsx';
import './App.css';

function App() {
  const [turn, setTurn] = useState('user');

  // You can define a function to handle turn changes

  return (
    <>
      <Header />
      <div className='mainDiv'>
        <div className='gameArea'>
          <AiGameArea turn={turn} setTurn={setTurn} />
          <div className='separator' />
          <UserGameArea turn={turn} setTurn={setTurn} />
        </div>
      </div>
    </>
  );
}

export default App;
