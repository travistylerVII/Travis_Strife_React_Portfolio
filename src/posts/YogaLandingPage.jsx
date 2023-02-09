import React from "react";
import HeaderImg from "../assets/yoga_header@2x.jpg";
import CompanyImage from "../assets/leadpages_logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/yogo_screenshot_01@2x.jpg";
import Image2 from "../assets/yogo_screenshot_02@2x.jpg";
import Image3 from "../assets/yogo_screenshot_03@2x.jpg";
import Image4 from "../assets/yogo_screenshot_04@2x.jpg";
import Image5 from "../assets/yogo_screenshot_05@2x.jpg";
import YogaScreen from "../assets/Yoga_Photoshop_Screen.png";
import { FaGithub } from "react-icons/fa";
function YogaLandingPage() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Leadpages.net</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10 leading-[1.2em]">
            Yoga Leadpages Landing Page Theme
          </h1>
          <h2>Project Overview</h2>
          <p>
            Designed for yoga studios, surprisingly this Leadpages landing page
            theme was one of Leadpages top-rated themes in their marketplace!
          </p>
          <p>
            This was one of those instances where I would have never thought to
            design and develop a landing page like this unless someone requested
            it specifically and that&#39;s exactly what happened. Apparently,
            there are a lot of business owners who own studios that use
            Leadpages.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://theleadagent.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://theleadagent.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repository
                </a>
              </span>
            </div>
          </div>
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Designer</li>
              <li>Developer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Photoshop Files</li>
              <li>Leadpages Theme</li>
            </ul>
          </div>
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
              <motion.div key={image} className="item p-[20px] min-w-[40rem]">
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
      <div>
        <p>Designed in Photoshop.</p>
        <p>
          <img src={YogaScreen} alt="Yoga Photoshop Screenshot" />
        </p>
        <p>
          What I love about this page is the subtly in the design ascetics. The
          art of subtly is extremely powerful in design when used right. In this
          case, the subtly comes in the form of accent colors and background
          patterns. I am extremely happy with how this turned out and so were
          Leadpages.
        </p>
        <p>
          Regarding the development, I used HTML, CSS (Bootstrap), and JSON.
          JSON was needed to integrate it with the Leadpages editor at the time.
          Since then they have switched to drag and drop editor.
        </p>
      </div>
    </div>
  );
}

export default YogaLandingPage;
