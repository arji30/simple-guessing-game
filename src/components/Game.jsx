import { useState, useEffect } from "react";
import {passport} from '@imtbl/sdk'
import passportInstance from "../initPassport";



function Game() {
  useEffect(()=>{
    window.addEventListener('load', function() {
      passportInstance.loginCallback();
    });
  },[]);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage("Please enter a valid number.");
    } else if (userGuess === randomNumber) {
      console.log(message)
      setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`)
    } else if (userGuess < randomNumber) {
      setMessage("Try a higher number.");
      setAttempts(attempts + 1);
    } else {
      setMessage("Try a lower number.");
      setAttempts(attempts + 1);
    }
  }

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>Try to guess the number between 1 and 100.</p>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default Game;
