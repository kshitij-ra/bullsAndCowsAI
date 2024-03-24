import React, { useEffect, useState } from 'react';
import './userGameArea.css';
const UserGameArea = ({ turn, setTurn }) => {
    const [guesses, setGuesses] = useState([]);
    const [lastNumber, setLastNumber] = useState('-');
    const [lastBulls, setLastBulls] = useState('-');
    const [lastCows, setLastCows] = useState('-');
    const [targetNumber, setTargetNumber] = useState(0);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (targetNumber == 0 && turn === 'user') {
            const randomNumber = generateRandomNumber();
            setTargetNumber(randomNumber);
            console.log(randomNumber);
        }
    }, []);


    const generateRandomNumber = () => {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);
        if (hasDistinctDigits(randomNumber)) {
            return randomNumber;
        }
        return generateRandomNumber();
    }

    const handleTurnChange = () => {
        setTurn(prevTurn => (prevTurn === 'ai' ? 'user' : 'ai'));
    };

    const hasDistinctDigits = (number) => {
        const numberString = number.toString();
        const numberArray = numberString.split('');
        const uniqueArray = [...new Set(numberArray)];
        return numberArray.length === uniqueArray.length;
    };

    const calculateBullsAndCows = (guess) => {
        let bulls = 0;
        let cows = 0;

        for (let i = 0; i < 4; i++) {
            if (targetNumber.toString()[i] === guess.toString()[i]) {
                bulls++;
            } else if (targetNumber.toString().includes(guess.toString()[i])) {
                cows++;
            }
        }

        setLastBulls(bulls);
        setLastCows(cows);
    }


    const handleGuessSubmit = () => {
        const guessInput = parseInt(input.trim());
        if (isNaN(guessInput)) {
            alert('Please enter a valid number');
            setInput('');
            return;
        }
        if (guessInput < 1000 || guessInput > 9999) {
            alert('Please enter a 4-digit number');
            setInput('');
            return;
        }
        if (!hasDistinctDigits(guessInput)) {
            alert('Please enter a number with distinct digits');
            setInput('');
            return;
        }
        if (guesses.includes(guessInput)) {
            alert('You have already guessed that number, please try a different one.');
            setInput('');
            return;
        }
        if (guessInput === targetNumber) {
            alert('Congratulations! You guessed the number!');
            return;
        }
        setGuesses([...guesses, guessInput]);
        setLastNumber(guessInput);
        calculateBullsAndCows(guessInput);
        setInput('');
        handleTurnChange();
    };

    return (
        <div className='user' style={turn != 'user' ? { pointerEvents: "none", opacity: "0.4" } : {}}>
            <h2 className='user-head'>Your turn</h2>
            <div className='user-res-row'>
                <div className='user-guess'>
                    <h3 className='user-hh'>Last Guess:</h3>
                    <h3>{lastNumber}</h3>

                </div>
                <div className='user-cows'>
                    <h3 className='user-hh'>Cows:</h3>
                    <h3>{lastCows}</h3>
                </div>
                <div className='user-bulls'>
                    <h3 className='user-hh'>Bulls:</h3>
                    <h3>{lastBulls}</h3>
                </div>
            </div>
            <div className='user-res-row'>
                <div className='user-guess'>
                    <h3 className='user-hh'>Enter Guess:</h3>
                    <input type='text' id='guessInput' value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
            </div>
            <button onClick={handleGuessSubmit}>Submit</button>
        </div>
    );
};

export default UserGameArea;
