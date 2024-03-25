import React from 'react'

const ErrorScreen = () => {
    return (
        <div className='errorScreen'>
            <h1>⚠️</h1>
            <h1>Error !</h1>
            <h2>You made a mistake in entering cows and bulls.<br></br>Please restart game.</h2>
            <button onClick={() => window.location.reload()}>Restart</button>
        </div>
    )
}

export default ErrorScreen