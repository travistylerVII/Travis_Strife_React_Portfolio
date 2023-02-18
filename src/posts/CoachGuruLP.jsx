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
function CoachGuru() {
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
            The creation of a landing page that is optimized for the specific
            needs of a target audience is a critical component of a successful
            marketing campaign. For this reason, I created a Leadpages landing
            page theme that was specifically designed for coaching
            professionals.
          </p>
          <p>
            Given that the overwhelming majority of Leadpages users are coaches
            of some kind (Ok that might be a slight exaggeration), it was
            essential to create a landing page that met their unique needs and
            preferences. Therefore, I set out to create a page that would stand
            out, while also delivering a clean, professional look and feel.
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
          The landing page theme was designed using the latest digital design
          tools, including Figma and Illustrator. By utilizing these tools, we
          were able to create a highly customizable design that would allow
          coaches to tailor their pages to their specific needs. Additionally,
          the theme was developed using HTML, CSS, Bootstrap, and JSON, which
          ensured optimal functionality for the Leadpages V1 Editor.
        </p>
        <p>
          One of the primary advantages of this landing page theme is its
          exceptional color scheme, minimalistic design, and beautiful
          illustrations. The colors were carefully chosen to create an
          atmosphere of calm and serenity, while the illustrations added an
          element of personality and character to the page.
        </p>
        <p>
          The Leadpages landing page theme we created for coaching professionals
          quickly became one of the most popular pages in the Leadpages
          marketplace, with many coaches opting to use the design for their own
          campaigns. This success speaks to the quality of our design work, and
          the attention we paid to the needs of our target audience.
        </p>
        <p>
          In conclusion, by designing a landing page theme that was optimized
          for coaching professionals, I was able to deliver an outstanding
          product that was both beautiful and highly functional. My focus on
          creating a design that met the unique needs of our target audience,
          coupled with the use of the latest design and development tools,
          resulted in one of the most successful landing pages on the Leadpages
          marketplace.
        </p>
      </div>
    </div>
  );
}

export default CoachGuru;
