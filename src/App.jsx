import { useState } from 'react';
import Header from './components/Header.jsx';
import AiGameArea from './components/AiGameArea.jsx';
import UserGameArea from './components/UserGameArea.jsx';
import './App.css';

function App() {
  const [turn, setTurn] = useState('user');
  const [start, setStart] = useState(0);
  return (
    <>
      <Header />
      <div className='mainDiv'>
        {start === 0 ? (
          <>
            <div className='instructions'>
              <h2>Game Instructions</h2>

              <h2>Objective:</h2>
              <p>Guess the secret four-digit number chosen by the AI within the fewest attempts possible.</p>

              <h2>How to Play:</h2>
              <ol>
                <li>The game consists of two players: you and the AI.</li>
                <li>You will start by entering a four-digit number where each digit is unique (no repeating digits).</li>
                <li>The AI will then respond with the number of "bulls" and "cows" for your guess:
                  <ul>
                    <li>A "bull" indicates that a digit in your guess is in the correct position.</li>
                    <li>A "cow" indicates that a digit in your guess is present in the secret number but not in the correct position.</li>
                  </ul>
                </li>
                <li>Based on the feedback, you will make subsequent guesses until you correctly guess the secret number.</li>
                <li>The AI will generate its guess based on the feedback provided by you.</li>
                <li>The game continues until you correctly guess the secret number or surrender.</li>
              </ol>

              <h2>Rules:</h2>
              <ul>
                <li>The secret number consists of four digits, each between 0 and 9.</li>
                <li>Each digit in the secret number is unique (no repeating digits).</li>
                <li>Your guesses must also adhere to the rule of having four unique digits.</li>
                <li>The game ends when you correctly guess the secret number or surrender.</li>
              </ul>

              <h2>Winning:</h2>
              <p>You win the game by correctly guessing the AI's secret number before the AI guesses your secret number.</p>
              <p>If AI guesses your number first, then the AI wins.</p>

              <p>Good luck and happy guessing!</p>
            </div>
            <button className='startButton' onClick={() => setStart(1)}>Start Game</button>
          </>
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