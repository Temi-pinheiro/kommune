import { useState, useEffect } from 'react';

export const useCountdownTimer = (initialTime = 300) => {
  const [countdown, setCountdown] = useState(initialTime);
  const [isTimerEnded, setIsTimerEnded] = useState(false);

  useEffect(() => {
    if (countdown === 0) {
      setIsTimerEnded(true);
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  const resetTimer = () => {
    setCountdown(initialTime);
    setIsTimerEnded(false);
  };

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;

  return { time: formattedTime, isTimerEnded, resetTimer };
};
