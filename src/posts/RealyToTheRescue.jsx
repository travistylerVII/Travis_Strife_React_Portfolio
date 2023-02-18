import React from "react";
import HeaderImg from "../assets/RealtyToTheRescue_Page_Header@2x.png";
import CompanyImage from "../assets/RealtyToTheRescue_Logo@2x.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/rttr1@2x.jpg";
import Image2 from "../assets/rttr2@2x.jpg";
import Image3 from "../assets/rttr3@2x.jpg";
import Image4 from "../assets/rttr4@2x.jpg";
import Image5 from "../assets/rttr5@2x.jpg";
import FigmaScreen from "../assets/rttr_figma_screen.jpg";
import IDXScreen from "../assets/idx_screenshot.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
function Realtytotherescue() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Realty To The Rescue</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Real Estate Wordpress Website w/ IDX
          </h1>

          <h2>Project Overview</h2>
          <p>
            As the designer and developer for the Realty To The Rescue project,
            I was excited to work with Barb Forsyth and her unique concept of
            selling real estate while donating a percentage of each sale to an
            animal charity of the buyer or seller's choice. Not only was I
            passionate about the cause, but I also enjoyed the challenge of
            integrating an IDX, a technology I had never worked with before.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://realtytotherescue.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://realtytotherescue.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website URL
                </a>
              </span>
            </div>
          </div>
          <ul className="md:text-right mb-5 list-none">
            <li>
              <strong>Role:</strong>
            </li>
            <li>Project Manager</li>
            <li>Designer</li>
            <li>Developer</li>
          </ul>
          <ul className="md:text-right mb-5 list-none">
            <li>
              <strong>Deliverables:</strong>
            </li>
            <li>Wordpress Website</li>
            <li>Website Design</li>
            <li>Marketing Funnel</li>
          </ul>
        </div>
      </div>
      <motion.div
        ref={carousel}
        className="carousel overflow-hidden cursor-grab my-5 relative w-[100vw] ml-[-50vw] left-[50%] "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {cimages.map((image) => {
            return (
              <motion.div key={image} className="item p-[20px] min-w-[26rem]">
                <img
                  src={image}
                  alt=""
                  className="rounded-[5px] w-full h-full pointer-events-none shadow-[0px_0px_10px_0px_rgba(0,0,0,.6)]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <h2>Problem & Solution</h2>
      <p>
        The first challenge I faced was setting up WordPress, which was fairly
        easy given my experience with the platform. However, integrating an IDX
        proved to be a little more challenging than I anticipated. An IDX allows
        real estate agents to display all the properties that go into the MLS on
        their website automatically, eliminating the need to manually add and
        remove each property. After researching various options, I settled on
        ihomefinder.com as my solution.
      </p>

      <p>
        While ihomefinder.com had the best track record and was easy to set up
        and configure, it lacked options in the UI to customize the design of
        the IDX front-end elements without diving into the code. Trying to
        override CSS on ihomefinder servers was a challenge. However, I welcomed
        this challenge and enjoyed the opportunity to learn more about the
        technology.
      </p>

      <h2>The Design</h2>
      <p>
        <img alt="figma screenshot" src={FigmaScreen} />
      </p>
      <p>
        The design was custom built in Figma and crafted in WordPress using
        Elementor. I made sure to keep the design simple and user-friendly, so
        users could easily navigate the site and find the properties they were
        looking for. The site features a sleek, modern design that is both
        visually appealing and functional.
      </p>
      <h2>Final Words</h2>
      <p>
        Overall, the Realty To The Rescue project was a success, and I was proud
        to be a part of it. The site was well-received by users and received
        positive feedback from Barb's clients. I thoroughly enjoyed working on
        this project, and I look forward to working on more projects that
        support causes I am passionate about in the future.
      </p>
      <div></div>
    </div>
  );
}

export default Realtytotherescue;
