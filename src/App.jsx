import { useState } from 'react';
import Header from './components/Header.jsx';
import AiGameArea from './components/AiGameArea.jsx';
import UserGameArea from './components/UserGameArea.jsx';
import './App.css';
import Instructions from './components/Instructions.jsx';
import WinScreen from './components/WinScreen.jsx';
import ErrorScreen from './components/ErrorScreen.jsx';
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const [turn, setTurn] = useState('User');
  const [start, setStart] = useState(0);
  const [winner, setWinner] = useState('none');
  const [winningNumber, setWinningNumber] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isExploding, setIsExploding] = useState(false);

  const largeProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
  };

  return (
    <>
      <Header />
      <div className='mainDiv'>
        {start === 0 ? (
          <Instructions setStart={setStart} />
        ) : winner !== 'none' ? (
          <>
            <ConfettiExplosion {...largeProps} />
            <WinScreen winner={winner} number={winningNumber} />
          </>
        ) : hasError ? (
          <ErrorScreen />
        ) : (
          <div className='gameArea'>
            <UserGameArea turn={turn} setTurn={setTurn} setWinner={setWinner} setWinningNumber={setWinningNumber} />
            <div className='separator' />
            <AiGameArea turn={turn} setTurn={setTurn} setWinner={setWinner} setWinningNumber={setWinningNumber} setHasError={setHasError} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
