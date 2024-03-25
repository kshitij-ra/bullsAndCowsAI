import React, { useEffect, useState } from 'react';
import './aiGameArea.css';

const AiGameArea = ({ turn, setTurn }) => {
    const [lastNumber, setLastNumber] = useState('-');
    const [lastBulls, setLastBulls] = useState('-');
    const [lastCows, setLastCows] = useState('-');
    const [aiGuess, setAiGuess] = useState(0);
    const [cowsInput, setCowsInput] = useState('');
    const [bullsInput, setBullsInput] = useState('');
    const [possibleChoices, setPossibleChoices] = useState([]);

    useEffect(() => {
        generatePossibleChoices();
    }, []);

    useEffect(() => {
        if (aiGuess === 0 && turn === 'ai' && possibleChoices.length > 0) {
            const guess = guessFromChoices();
            setAiGuess(guess);
            console.log("ai guess" + guess);
        }
        console.log(possibleChoices);

    }, [turn, aiGuess, possibleChoices]);

    const generatePossibleChoices = () => {
        let choices = [];
        for (let i = 1000; i < 10000; i++) {
            if (hasDistinctDigits(i.toString())) {
                choices.push(i);
            }
        }
        setPossibleChoices(choices);
    };

    const hasDistinctDigits = (number) => {
        const numberString = number.toString();
        const numberArray = numberString.split('');
        const uniqueArray = [...new Set(numberArray)];
        return numberArray.length === uniqueArray.length;
    };

    const handleTurnChange = () => {
        setTurn(prevTurn => (prevTurn === 'ai' ? 'user' : 'ai'));
    };

    const guessFromChoices = () => {
        const randomIndex = Math.floor(Math.random() * possibleChoices.length);
        const guess = possibleChoices[randomIndex];
        setPossibleChoices(prevChoices => prevChoices.filter(choice => choice !== guess));
        return guess;
    }
    const filterChoices = (guess, cows, bulls) => {
        setPossibleChoices(prevChoices => prevChoices.filter(choice => {
            const [feedbackCows, feedbackBulls] = countBullsAndCows(choice.toString(), guess.toString());
            return feedbackCows === cows && feedbackBulls === bulls;
        }));
    };

    const handleGuessSubmit = () => {
        const cows = parseInt(cowsInput.trim());
        const bulls = parseInt(bullsInput.trim());

        if (isNaN(cows) || isNaN(bulls) || cows < 0 || cows > 4 || bulls < 0 || bulls > 4 || cows + bulls > 4) {
            alert('Please enter valid numbers for cows and bulls (0-4)');
            return;
        }
        if (bulls === 4) {
            alert('AI Wins! Your number: ' + aiGuess);
            return;
        }
        filterChoices(aiGuess, cows, bulls);
        if (possibleChoices.length === 0) {
            alert('You made a mistake in entering cows and bulls. Please restart game.');
            return;
        }
        if (possibleChoices.length === 1) {
            alert('AI Wins! Your number: ' + possibleChoices[0]);
            return;
        }
        setLastNumber(aiGuess);

        const guess = guessFromChoices();
        setAiGuess(guess);
        setLastCows(cows);
        setLastBulls(bulls);

        setCowsInput('');
        setBullsInput('');
        handleTurnChange();
    };
    const countBullsAndCows = (guess, num) => {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < 4; i++) {
            if (guess[i] === num[i]) {
                bulls++;
            } else if (num.includes(guess[i])) {
                cows++;
            }
        }
        return [cows, bulls];
    }

    return (
        <div className='ai' style={turn !== 'ai' ? { pointerEvents: "none", opacity: "0.4" } : {}}>
            <h2 className='ai-head'>AI&apos;s turn</h2>
            <div className='ai-res-row1'>
                <div className='ai-guess'>
                    <h3 className='ai-hh'>Last Guess:</h3>
                    <h3>{lastNumber}</h3>
                </div>
                <div className='ai-cows'>
                    <h3 className='ai-hh'>Cows:</h3>
                    <h3>{lastCows}</h3>
                </div>
                <div className='ai-bulls'>
                    <h3 className='ai-hh'>Bulls:</h3>
                    <h3>{lastBulls}</h3>
                </div>
            </div>
            <div className='ai-res-row'>
                <div className='ai-guess'>
                    <h3 className='ai-hh'>AI&apos;s Guess:</h3>
                    {turn === 'ai' && <span><b>{aiGuess}</b></span>}
                </div>
                <div className='ai-guess'>
                    <h3 className='ai-hh'>Enter Cows:</h3>
                    <input type='text' value={cowsInput} onChange={(e) => setCowsInput(e.target.value)} />
                </div>
                <div className='ai-guess'>
                    <h3 className='ai-hh'>Enter Bulls:</h3>
                    <input type='text' value={bullsInput} onChange={(e) => setBullsInput(e.target.value)} />
                </div>
            </div>
            <button onClick={handleGuessSubmit}>Submit</button>
        </div>
    );
};

export default AiGameArea;
