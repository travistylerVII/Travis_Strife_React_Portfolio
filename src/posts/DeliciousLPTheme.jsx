import React from "react";
import HeaderImg from "../assets/Delicious-Header@2x.jpg";
import CompanyImage from "../assets/leadpages_logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/delicious_screen1@2x.jpg";
import Image2 from "../assets/delicious_screen2@2x.jpg";
import Image3 from "../assets/delicious_screen3@2x.jpg";
import { FaGithub } from "react-icons/fa";
function Realtytotherescue() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3];
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
          <h1 className="text-5xl mb-10">Restaurant Landing Page Theme</h1>
          <h2>Project Overview</h2>
          <p>
            Like most of the themes I created for Leadpages.net, this theme was
            created because I spotted a gap in the market. With all the various
            themes in the Leadpages marketplace at the time, there was not one
            that catered to restaurant owners.
          </p>
          <p>
            Now of course that could be because there was low demand, but
            studying the comments and getting feedback from many Leadpages
            users, a theme of this nature was in high demand.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://github.com/tstrife777/delicious_landing_page_theme"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://github.com/tstrife777/delicious_landing_page_theme"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repository
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
            <li>Figma Design</li>
            <li>Photoshop Design</li>
            <li>Theme Files</li>
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
      <p>
        The hard part is designing it so it applied to a wide variety of the
        different types of restaurant owners that used the platform.
      </p>
      <p>But I settled on these basic elements. </p>
      <ol>
        <li>Hero Section</li>
        <li>Events Section</li>
        <li>Popular / Featured Dishes Section</li>
        <li>Menu Section</li>
        <li>About Section</li>
        <li>Testimonials</li>
        <li>Call to action</li>
      </ol>
      <p>
        After coming up with a game plan, it was time for the wireframe and
        design.
      </p>
      <p>
        The design was created in Photoshop. This was before I switched to Figma
        for most of all my website designs.
      </p>
      <p>
        After the design was finished, before I hardcoded it, I presented it to
        some potential prospects that were planning on using it. They loved it.
      </p>
      <p>After their approval, I went to coding. </p>
      <p>
        Hardcoding just takes some HTML, CSS (Bootstrap), and JSON. JSON was
        needed to integrate it with the Leadpages editor at the time. Since then
        they have switched to drag and drop editor.
      </p>

      <div></div>
    </div>
  );
}

export default Realtytotherescue;
