import React from "react";
import HeaderImg from "../assets/Coaching_Guru_Header@2x.jpg";
import CompanyImage from "../assets/leadpages_logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/Coach_Guru_Screens_01@2x.jpg";
import Image2 from "../assets/Coach_Guru_Screens_02@2x.jpg";
import Image3 from "../assets/Coach_Guru_Screens_03@2x.jpg";
import Image4 from "../assets/Coach_Guru_Screens_04@2x.jpg";
import Image5 from "../assets/Coach_Guru_Screens_05@2x.jpg";
function DeliciousLPTheme() {
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
          <h1 className="text-5xl mb-10">Coach Guru Landing Page Theme</h1>
          <h2>Project Overview</h2>
          <p>
            A Leadpages Landing Page Theme designed specifically for coaching
            professionals.
          </p>
          <p>
            Leadpages demographic is like 90% life coaches. Ok maybe not 90% but
            it sure seems like it. With that in mind, that&#39;s exactly why I
            created this landing page for coaches.
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

              <li>Figma Design</li>
              <li>Theme Files</li>
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
        <p>
          Designed in Figma and Illustrator and Developed with HTML, CSS,
          Bootstrap, and JSON (For the Leadpages V1 Editor).
        </p>
        <p>
          What I like about this page is its color scheme, Illustrations, and
          minimalistic design. This was one of our most downloaded landing pages
          in the Leadpages marketplace!
        </p>
      </div>
    </div>
  );
}

export default DeliciousLPTheme;
