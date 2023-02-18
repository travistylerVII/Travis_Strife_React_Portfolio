import React from "react";
import HeaderImg from "../assets/Delicious-Header@2x.jpg";
import CompanyImage from "../assets/leadpages_logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/delicious_screen1@2x.jpg";
import Image2 from "../assets/delicious_screen2@2x.jpg";
import Image3 from "../assets/delicious_screen3@2x.jpg";
import { FaGithub } from "react-icons/fa";
function DeliciousLPTheme() {
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
            This case study highlights the development process of a Leadpages
            landing page theme created specifically for restaurant owners. The
            theme was designed to fill a gap in the market and cater to a high
            demand that had been identified through feedback from Leadpages
            users.
          </p>
          <h2>Research &amp; Planning &amp; Design</h2>
          <p>
            The first step in the creative process was to identify the key
            elements that the theme would need to have in order to cater to the
            needs of restaurant owners. These elements included a hero section,
            events section, popular/featured dishes section, menu section, about
            section, testimonials, and call to action.
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
        Once the plan was in place, the design process began in Photoshop (Figma
        was not popular at the time). I had to ensure that the design was
        versatile enough to apply to a wide variety of different types of
        restaurant owners that used the Leadpages platform. The color scheme,
        layout, and illustrations were chosen to be simple, clean, and easily
        customizable to match any restaurant's branding.
      </p>
      <p>
        After the design was finalized, I presented it to potential prospects
        for feedback. The response was overwhelmingly positive, and the design
        was approved for coding.
      </p>
      <h2>Development</h2>
      <p>
        The coding process involved using HTML, CSS (Bootstrap), and JSON to
        create the landing page theme. The JSON integration was necessary to
        ensure compatibility with the Leadpages editor at the time.
      </p>
      <p>
        After completion, the landing page theme was made available in the
        Leadpages marketplace, and it quickly became one of the most downloaded
        themes. By identifying a gap in the market and catering to the needs of
        a specific demographic, the designer was able to create a successful
        landing page theme that met the demands of the Leadpages user community.
      </p>
    </div>
  );
}

export default DeliciousLPTheme;
