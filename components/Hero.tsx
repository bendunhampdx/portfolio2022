import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ben Dunham",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/images/ben2.jpg'
        alt='Picture of Ben Dunham'
      />

      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#f7AB0A' />
      </h1>
    </div>
  );
}

export default Hero;
