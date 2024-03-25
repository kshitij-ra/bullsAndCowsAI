import React from 'react'

const WinScreen = ({ winner, number }) => {
    return (
        <div className='winScreen'>
            <h1>🎉🎉</h1>
            <h1>{winner} wins!</h1>
            <h2>The Secret Number was {number}</h2>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
    )
}

export default WinScreen