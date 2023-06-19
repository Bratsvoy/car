import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [leftTurnSignalActive, setLeftTurnSignalActive] = useState(false);
  const [rightTurnSignalActive, setRightTurnSignalActive] = useState(false);
  const [emergencyTurnSignalActive, setEmergencyTurnSignalActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (emergencyTurnSignalActive) {
      intervalId = setInterval(() => {
        setLeftTurnSignalActive((prevState) => !prevState);
        setRightTurnSignalActive((prevState) => !prevState);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [emergencyTurnSignalActive]);

  const toggleLeftTurnSignal = () => {
    setLeftTurnSignalActive(!leftTurnSignalActive);
    if (emergencyTurnSignalActive) {
      setRightTurnSignalActive(false);
    }
  };

  const toggleRightTurnSignal = () => {
    setRightTurnSignalActive(!rightTurnSignalActive);
    if (emergencyTurnSignalActive) {
      setLeftTurnSignalActive(false);
    }
  };

  const toggleEmergencyTurnSignal = () => {
    setEmergencyTurnSignalActive(!emergencyTurnSignalActive);
    if (!emergencyTurnSignalActive) {
      setLeftTurnSignalActive(false);
      setRightTurnSignalActive(false);
    }
  };

  return (
    <div className="car">
      <img src={require('./ling.png')} alt="car" className="car-image" />

      <div className={`turn-signal left ${leftTurnSignalActive ? 'active' : ''}`} />
      <div className={`turn-signal right ${rightTurnSignalActive ? 'active' : ''}`} />
      <div className={`turn-signal left1 ${leftTurnSignalActive ? 'active' : ''}`} />
      <div className={`turn-signal right2 ${rightTurnSignalActive ? 'active' : ''}`} />

      <div className="buttons">
        <button onClick={toggleLeftTurnSignal}>Toggle Left Turn Signal</button>
        <button onClick={toggleRightTurnSignal}>Toggle Right Turn Signal</button>
        <button onClick={toggleEmergencyTurnSignal}>Toggle Emergency Turn Signal</button>
      </div>
    </div>
  );
};

export default App;
