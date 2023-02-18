import React from "react";
import HeaderImg from "../assets/pfp_header@2x.jpg";
import CompanyImage from "../assets/pridefit_company_icon@2x.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/pfp_screen-1.jpg";
import Image2 from "../assets/pfp_screen-2.jpg";
import Image3 from "../assets/pfp_screen-3.jpg";
import Image4 from "../assets/pfp_screen-4.jpg";
import Image5 from "../assets/pfp_screen-5.jpg";
import PfpPhotoshop from "../assets/pfp_photoshop.jpg";
function PowerForPride() {
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
            I am excited to share my experience designing and developing a
            custom Leadpages landing page theme for Power for Pride, a
            deadlifting event designed to raise money and awareness for homeless
            youth in Minneapolis. The client, a fitness organization based in
            Minneapolis, provided me with their branding guide and copy, making
            my job as the designer much easier.
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
          My focus was on creating a design that was both visually appealing and
          aligned with the client's brand. The clear requirements and branding
          guide provided by the client allowed me to deliver the design quickly.
          The final design showcased the event's purpose, with the branding
          elements incorporated seamlessly.
        </p>
        <p>
          <img src={PfpPhotoshop} alt="Landing Page Photoshop Screenshot" />
        </p>
        <p>
          However, the development process was not without its challenges.
          Integrating the custom design into the Leadpages landing page editor
          required me to hardcode each div element into a JSON object. This
          process was time-consuming, but I was able to successfully complete
          it.
        </p>

        <p>
          The end result was a high-quality Leadpages landing page theme that
          met the client's needs. The design was visually striking and the
          messaging was clear, highlighting the purpose of the event and
          encouraging people to participate. The seamless integration of the
          branding elements ensured a cohesive look and feel throughout the
          landing page.
        </p>

        <p>
          In conclusion, this project was a great success. The clear
          requirements and branding guide provided by the client, coupled with
          my design and development skills, resulted in a high-quality landing
          page theme. The design showcased the event's purpose, while the
          development ensured the landing page was functional and integrated
          seamlessly with the Leadpages editor. I am proud to have been a part
          of this project and look forward to future opportunities to use my
          skills to help clients achieve their goals.
        </p>
      </div>
    </div>
  );
}

export default PowerForPride;
