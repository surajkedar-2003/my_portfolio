import React from 'react';

import { useTypewriter, Cursor } from 'react-simple-typewriter'
function TypingHeading() {
    const[typeEffect] = useTypewriter({
        words: ["Software Engineer.", "Full Stack Developer."],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50
    })
  return (
    <>
    <h2 className='text-2xl'>
        I'm a
        <span className='text-4xl font-semibold text-pink-500'> {typeEffect}</span>
        <Cursor cursorBlinking={true} cursorColor='#ec4899'cursorClassName='blinking-cursor' />
    </h2>
    </>
  )
}

export default TypingHeading