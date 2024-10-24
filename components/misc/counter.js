// components/Counter.js
"use client"
import { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 1000, incrementValue, afterSymbol }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's in view
        }
      });
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {

    if (isVisible) {
      let start = 0;
      let value = incrementValue;
      const end = target;
      const increment = Math.ceil((end / duration) * value); // calculate increment based on duration

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end); // ensure the final count is set to the target
        } else {
          setCount(start);
        }
      }, 100); // update every 75ms

      return () => clearInterval(timer); // cleanup on unmount

    }

  }, [isVisible, target, duration, incrementValue, afterSymbol]);

  return <div ref={counterRef}><h2 className="green">{count}<span>{afterSymbol}</span></h2></div>;

};

export default Counter;
