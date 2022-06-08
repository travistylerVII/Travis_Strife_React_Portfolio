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
          <p className="mt-[20px] text-[18px]">
            I am passionate about building excellent software that improved the
            lives of those around me. I specialize in creating software for
            cleints ranging from indivientuals and small-businesses all the way
            to large enterpsiece corportations. What would you do if you had a
            software expert availabel at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
