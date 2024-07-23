import React, { useState, useEffect } from 'react';

// Function to animate the counter
const useCounter = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endCount = end;
    const stepTime = Math.abs(Math.floor(duration / (endCount / 10))); // More increments

    const timer = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 10; // Larger step
        if (newCount >= endCount) {
          clearInterval(timer);
          return endCount;
        }
        return newCount;
      });
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Counter = ({ end, duration, suffix }) => {
  const count = useCounter(end, duration);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;
