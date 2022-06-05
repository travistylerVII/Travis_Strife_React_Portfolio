import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const home = () => {
  return (
    <div
      name="home"
      className="container lg:w-[1300px] mx-auto pt-[80px] sm:pt-[30px] lg:pt-[200px] pb-[100px] lg:pb-[100px]"
    >
      {/* Container */}
      <div className="px-8 lg:w-[700px]">
        <p className="text-pink-600">Hi, my name is Travis</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          This is where the headline goes!
        </h1>
        <p className="text-[#b3bbd3] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          deleniti animi, cumque fugit id necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default home;
