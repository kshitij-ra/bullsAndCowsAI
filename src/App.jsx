import { useState } from 'react';
import Header from './components/Header.jsx';
import AiGameArea from './components/AiGameArea.jsx';
import UserGameArea from './components/UserGameArea.jsx';
import './App.css';
import Instructions from './components/Instructions.jsx';

function App() {
  const [turn, setTurn] = useState('user');
  const [start, setStart] = useState(0);
  return (
    <>
      <Header />
      <div className='mainDiv'>
        {start === 0 ? (
          <Instructions setStart={setStart} />
        ) : (
          <div className='gameArea'>
            <UserGameArea turn={turn} setTurn={setTurn} />
            <div className='separator' />
            <AiGameArea turn={turn} setTurn={setTurn} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
