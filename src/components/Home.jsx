import React from "react";
import { Link } from "react-scroll";
import TopTestimonials from "./TopTestimonials";

const Home = () => {
  return (
    <div
      name="home"
      className="container lg:w-[1300px] mx-auto pt-[30px] sm:pt-[30px] lg:pt-[80px] pb-[40px]"
    >
      <div className="px-5 lg:w-[700px] mb-[150px]">
        <h2 className="hero-subheader text-[#28e6ca] text-3xl mb-5">
          Hey there, my name is Travis!
        </h2>
        <h1 className="hero-header text-5xl sm:text-6xl font-bold text-white">
          I design and develop persuasive websites and apps
        </h1>
        <p className="text-[#b3bbd3] py-4 mb-5 max-w-[700px] text-[1.3em]">
          ...and other creative things as well. Checkout some of my most recent
          projects below and feel free to contact me using the form below to get
          in touch!
        </p>
        <p>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="button rounded-full bg-[#28e6ca] text-[#082b26] py-2 px-5 mr-2 cursor-pointer"
          >
            View Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="button rounded-full py-2 px-5 text-white border cursor-pointer"
          >
            Contact Me
          </Link>
        </p>
      </div>
      <div className="px-5">
        <TopTestimonials />
      </div>
    </div>
  );
};

export default Home;
