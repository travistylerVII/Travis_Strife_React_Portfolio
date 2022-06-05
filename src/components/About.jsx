import React from "react";

const about = () => {
  return (
    <div name="about" className="w-full text-white  py-20">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hey. I'm Travis, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improved
              the lives of those around me. I specialize in creating software
              for cleints ranging from indivientuals and small-businesses all
              the way to large enterpsiece corportations. What would you do if
              you had a software expert availabel at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
