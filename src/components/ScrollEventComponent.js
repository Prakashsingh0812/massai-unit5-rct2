import React, { useState, useEffect } from 'react';

const ScrollEventComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll event listener removed');
    };
  }, []); // Empty array means this effect runs on mount and cleanup runs on unmount

  return (
    <div style={{ height: '150vh' }}>
      <h2>Scroll Event Tracker</h2>
      <p>Scroll Position Y: {scrollY}px</p>
      <p>Scroll the page to see the effect!</p>
    </div>
  );
};

export default ScrollEventComponent;
