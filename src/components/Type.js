import React, { useEffect } from 'react';
import Typed from 'typed.js';

const MyComponent = () => {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy(); // cleanup Typed instance when component unmounts
    };
  }, []); // empty dependency array ensures this effect runs only once

  return <span id="element"></span>;
};

export default MyComponent;
