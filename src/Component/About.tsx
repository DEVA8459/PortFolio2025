import React from "react";
import { Info } from "../Utils/Constant";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
    <div className=" bg-color font-mono ">
      <div className="sm:px-28 p-8 sm:w-3/5 flex flex-col  gap-3 items-center sm:items-start text-xl ">
        <div className="text-primary sm:text-3xl">Hi,I am</div>
        <div className="text-white sm:text-[4.25rem] font-extrabold text-4xl">{Info.name}</div>
        <div className="sm:text-3xl  text-white flex text-lg ">
          I'm a&nbsp;
          <span className="text-primary ">
            <Typewriter
              options={{ strings: Info.Stack, autoStart: true, loop: true }}
            />
          </span>
        </div>
        <div className="w-[90%] text-secondary font-semibold text-justify sm:gap-3  text-sm sm:text-xl">{Info.bio}</div>
      </div>
      <div></div>
    </div></>
  );
};

export default About;
