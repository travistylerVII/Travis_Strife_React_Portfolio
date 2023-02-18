import React from "react";
import HeaderImg from "../assets/tidy-cactus-header-image@2x.jpg";
import CompanyImage from "../assets/tidy-cactus-small-logo@2x.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/tidy-cactus-screen-1@2x.jpg";
import Image2 from "../assets/tidy-cactus-screen-2@2x.jpg";
import Image3 from "../assets/tidy-cactus-screen-3@2x.jpg";
import Image4 from "../assets/tidy-cactus-screen-4@2x.jpg";
import Image5 from "../assets/tidy-cactus-screen-5@2x.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
function TidyCactus() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img
          src={CompanyImage}
          alt="Company"
          className="w-11 h-11 rounded-full"
        />
        <h4 className="pt-2">tidycactus.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Tidy Cactus Cleaning Website & Branding
          </h1>
          <h2>Project Overview</h2>
          <p>
            I was approached by Tidy Cactus Cleaning, an cleaning company in Arizona, who were looking to grow but couldn't due to the lack of a website. The owner wanted a
            clean, minimal style that was inspired by the boho style, which
            suited the natural and organic ethos of the business.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a href="https://tidycactus.com" rel="noreferrer" target="_blank">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://tidycactus.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Website URL
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
              <li>Wordpress Website</li>
              <li>Elementor Theme</li>
              <li>Figma Theme Files</li>
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
      <div>
        <h2>Problem & Solution</h2>
        <p>
          The challenge was that there was no sales copy to work with, which is
          a crucial element in designing a successful website. I utilized my
          experience in writing website sales copy to create a framework that
          included all the essential sections such as the top navigation, hero
          section, call-to-action, features, benefits, testimonials, gallery,
          FAQ, and footer. With this framework, I was able to create copy that
          represented the business in a positive light.
        </p>

        <p>
          One of the most important sections of the sales copy is the hero or
          primary headline section. We crafted a bunch of headline ideas but
          finally settled on "Offering the Valley Premium Cleaning At an
          Affordable Price," with the Valley referring to the Phoenix, AZ valley
          where Tidy Cactus operates. This headline conveyed that the business
          offers premium services that won't break the bank, and we wanted to
          ensure that readers understood this.
        </p>
        <p>
          With the sales copy approved, I designed the website using Figma,
          which is my preferred tool for most of my design projects. The design
          was clean, minimal, and embraced the boho style that the client loved.
          I also redesigned the logo, business cards, and marketing materials to
          complement the website's design and complete the brand image.
        </p>
        <div className="mb-10">
          <iframe
            title="Tidy Cactus"
            width="100%"
            height="550"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F26SDOofMVmi6jvr7z2H9Yt%2FWEBSITE---Tidy-Cactus-Shared%3Fnode-id%3D0%253A1%26t%3D2Daos1aSDgcSYjNm-1"
            allowFullScreen
          ></iframe>
        </div>
        <h2>Development</h2>
        <p>
          For the development, I used WordPress and Elementor, which allowed me
          to quickly and easily create the website, making it simple for the
          client to edit and add content in the future.
        </p>
        <h2>Final Words</h2>
        <p>
          In conclusion, by working closely with the client and utilizing my
          design and development expertise, I was able to create a website that
          fulfilled Tidy Cactus's vision, conveyed the business's organic and
          natural ethos, and ultimately helped increase their sales and business
          growth.
        </p>
      </div>
    </div>
  );
}

export default TidyCactus;
