import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start a timer
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the timer on unmount
    return () => {
      clearInterval(timer);
      console.log('Timer cleared');
    };
  }, []); // Empty dependency array means it runs on mount and cleans up on unmount

  return (
    <div>
      <h2>Timer</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default TimerComponent;
