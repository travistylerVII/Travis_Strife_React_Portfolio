import React from "react";
import AboutImg from "../assets/Travis_headshot_1@2x.jpg";

const about = () => {
  return (
    <div
      name="about"
      className="container mx-auto text-white py-[80px] max-w-[1000px] p-5"
    >
      <div className="md:flex">
        <div className="mr-8 mb-5">
          <img
            src={AboutImg}
            alt="Travis Headshot"
            className="rounded-[20px] max-w-[280px]"
          />
        </div>
        <div>
          <h4 className="homepage-h4 font-bold text-4xl inline border-b-4 border-[#28e6ca]">
            About
          </h4>
          <div className="mt-[20px] text-[18px]">
            <p className="mb-4">
              Technology is at the forefront of solving some of the biggest
              problems in this world and I want to be a part of it. As early as
              I
            </p>
            <p>
              could remember I have always been passionate about technology and
              design. Around age 12, shortly after my family brought home our
              first home computer, I remember going to the book store to buy my
              very first programming book "HTML: A beginners guide by Wendy
              Willard". I read that book from cover to cover jumpstarting my
              career in the web-dev at an early age. Since then I have improved
              my skills dramatically with not just coding, but also designing
              for the web as well. This is a lifelong journey of growth for me
              and I look forward to adding more value to this world as I
              continue to progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
