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
        <img src={HeaderImg} alt="Header" className="" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Realty To The Rescue</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h2>Project Overview</h2>
          <p>
            Realty To The Rescue is a real estate website with a twist. For
            every home bought and sold with Barb, a percentage of the sale gets
            donated to an animal charity of the buyer or seller's choice. Pretty
            sweet deal if you ask me!
          </p>
          <p>
            I had a lot of fun with this project because I fully support Barb's
            cause.
          </p>
          <p>
            <img alt="figma screenshot" src={FigmaScreen} />
          </p>

          <p>
            The design was created in Figma and crafted in WordPress using
            Elementor.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a href="https://realtytotherescue.com/" target="_blank">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a href="https://realtytotherescue.com/" target="_blank">
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
      <h2>Problem and Solution</h2>
      <p>
        The easy part was setting up WordPress, however, the part that was a
        little more challenging, that I have never done until now, was
        integrating an IDX.
      </p>
      <p>
        An &quot;IDX&quot; stands for &quot;Internet Data Exchange&quot; and
        basically what it does is allow real estate agents to display all the
        properties that go into the MLS on their website automatically. Imagine
        having to add and remove each property manually every-time one came on
        the market and got sold. It would be a nightmare.
      </p>
      <p>
        Luckily some genius(s) out there invented IDX's! However, with the
        variety of options available on the market, each with its own complex
        interfaces and setup procedures, things can be a little overwhelming and
        quite confusing.
      </p>
      <p>
        Eventually, I managed to settle on ihomefinder.com for my solution. Out
        of all the options I researched, this one had the best track record and
        after a bit of a learning curve, it was fairly easy to set up and
        configure.
      </p>
      <p>
        <img alt="IDX screenshot" src={IDXScreen} />
      </p>
      <p>
        The only gripe I have was the lack of options in the UI to customize the
        design of the IDX front-end elements without diving into the code.
        Trying to override CSS on ihomefinder servers is not the easiest thing
        to do.
      </p>
      <p>
        But I can't complain too much I guess. I love this stuff and always
        enjoy a good challenge.
      </p>

      <div></div>
    </div>
  );
}

export default Realtytotherescue;
