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
            As both the designer and developer for this Leadpages landing page
            theme, I was surprised to learn that it became one of Leadpages
            top-rated themes in their marketplace. This project came about when
            a client requested a landing page for their yoga studio, and it
            opened my eyes to the market demand for this type of design.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          
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
        <h2>Design</h2>
        <p>
          The design process started in Photoshop, where I focused on subtle
          aesthetic details. I believe that the art of subtlety is extremely
          powerful in design when executed properly, and that's what I aimed for
          in this landing page. I incorporated accent colors and background
          patterns to give the page a unique look while maintaining its
          simplicity. The final design exceeded my expectations, and the client
          was thrilled with it.
        </p>
        <p>
          <img src={YogaScreen} alt="Yoga Photoshop Screenshot" />
        </p>
        <h2>Development</h2>
        <p>
          In terms of development, I used HTML, CSS (Bootstrap), and JSON to
          integrate the design into the Leadpages editor at the time. JSON was
          necessary to make sure the page worked seamlessly with the editor.
          Since then, Leadpages has switched to a drag and drop editor.
        </p>
        <h2>Final Words</h2>
        <p>
          What sets this landing page apart is its subtle design and effective
          use of color and patterns. It proves that even a simple design can be
          highly effective and successful. I am proud to have designed and
          developed this theme and am pleased that it has become one of
          Leadpages' top-rated themes in their marketplace.
        </p>
      </div>
    </div>
  );
}

export default YogaLandingPage;
