import React from "react";
import HeaderImg from "../assets/pfp_header@2x.jpg";
import CompanyImage from "../assets/pridefit_company_icon@2x.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/pfp_screen-1.png";
import Image2 from "../assets/pfp_screen-2.png";
import Image3 from "../assets/pfp_screen-3.png";
import Image4 from "../assets/pfp_screen-4.png";
import Image5 from "../assets/pfp_screen-5.png";
import PfpPhotoshop from "../assets/pfp_photoshop.jpg";
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
        <h4 className="pt-2">Pride Fit</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Charity Fitness Leadpages Landing Page
          </h1>
          <h2 id="project-overview">Project Overview</h2>
          <p>
            Power for pride is an unconventional spin on active fundraising — a
            deadlifting event designed to raise money and build awareness for
            Minneapolis homeless youth.
          </p>
          <p>
            This was a custom Leadpages landing page theme request designed for
            a fitness client based in Minneapolis.
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
              <li>Photoshop Design</li>
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
              <motion.div key={image} className="item p-[20px] min-w-[36rem]">
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
          What was nice about this project was that the copy and branding guide
          was provided. I love projects when the client provides much of the
          heavy lifting.
        </p>
        <p>
          With not having to write creative copy and having to determine what
          the colors and style should be, the design turnaround time was
          lightning speed.
        </p>
        <p>The design was created in Photoshop.</p>
        <p>
          <img src={PfpPhotoshop} alt="Landing Page Photoshop Screenshot" />
        </p>
        <p>Now on to the development part...</p>
        <p>
          Overall developing a basic page like this is extremely simple.
          Hardcoding just takes some simple HTML and CSS and with Bootstrap as a
          framework, like the one I used for this project, this takes less than
          an hour to complete.
        </p>
        <p>
          However, in this case, I had to integrate it with the Leadpages (Now
          Legacy) Landing page editor at the time.
        </p>
        <p>
          That required me to hardcode each div element of the landing page into
          a JSON object so their landing page editor can use it. Needless to
          say, this was a time-consuming process.
        </p>
      </div>
    </div>
  );
}

export default DeliciousLPTheme;
