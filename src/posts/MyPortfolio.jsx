import React from "react";
import HeaderImg from "../assets/Portfolio-header.jpg";
import CompanyImage from "../assets/MooreMedia_Company_Icon.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/Portfolio_Images_01@2x.jpg";
import Image2 from "../assets/Portfolio_Images_02@2x.jpg";
import Image3 from "../assets/Portfolio_Images_03@2x.jpg";
import FigmaScreen from "../assets/Portfolio_Figma_Screen.jpg";
import CodeScreen1 from "../assets/Portfolio_Code_Screen_1@2x.jpg";
import CodeScreen2 from "../assets/Portfolio_Code_Screen_2@2x.jpg";
import CodeScreen3 from "../assets/Portfolio_Code_Screen_3@2x.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function MyPortfolio() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">TravisTMoore.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-4xl leading-[1.2em] mb-10">
            My Personal Web Dev/Design Portfolio Built with React
          </h1>
          <h2>Project Overview</h2>
          <p>
            Welcome to my portfolio page about my portfolio. (So meta!)
          </p>
          <p>
            I chose to design and develop my portfolio site from scratch because
            I feel like it would be hard to trust a designer who uses a
            ThemeForest template or a developer who has a plug-and-play
            Wordpress website. But hey, that's just my opinion.
          </p>
          <p>
            That's why I chose the time-consuming, but way more fun route of
            designing my portfolio in Figma, and hand-coding it using HTML, CSS,
            Javascript, React and Tailwind!
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://travistmoore.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://travistmoore.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Website URL
                </a>
              </span>
            </div>
          </div>
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://github.com/tstrife777/Travis_Strife_React_Portfolio"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://github.com/tstrife777/Travis_Strife_React_Portfolio"
                  rel="noreferrer"
                  target="_blank"
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
              <li>Figma Design</li>
              <li>React App</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>
          <img src={FigmaScreen} alt="figmascreen" />
        </p>
        <p>More work, but I love how it turned out. </p>
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
        <h2>Problem and Solution</h2>
        <h3>Problem #1: Background image blur on scroll</h3>
        <p>
          The first problem I faced was figuring out the best way to get the
          background image to blur when scrolling down past the hero section,
          and unblur when scrolling back up to the top. This is not something
          you see on websites a lot, so it was something I don't often do.
        </p>
        <p>
          At first, I thought the best way to achieve this effect was to
          create some Javascript code that listened to the vertical scroll
          value and then update the opacity of the background image in real
          time as you scrolled up or down. However, after some thought, I
          realized how complex and unnecessary this was.
        </p>
        <p>
          Instead, I decided to listen to the vertical scroll value and
          trigger a custom class to be added or removed when it hits a
          specific scroll value. The class had a blur
          transition-timing-function and filter: blur effect in the CSS. This
          solution was much simpler and effective.
        </p>
        <p>
          <img src={CodeScreen3} alt="CodeScreen3" />
        </p>
        <h3>Problem #2: Portfolio Item Filter Animation</h3>
        <p>
          The next thing I needed to build out was my Portfolio Item Filter
          Animation. Luckily, I have worked with the Framer-Motion library in
          the past and knew it would be perfect for the job. After combing
          through their documentation, combined with a Youtube video, and
          tinkering with the animation transitions, I put together a solid
          filter effect for my portfolio items.
        </p>
        <p>
          I really wanted the viewer to see with clarity all the projects I
          have worked on in the past based on the skill/tech stack they were
          created with. I am addicted to learning new modern tech that will
          help me achieve my results in a more efficient way so there are a
          lot of technologies I have learned and used that I have created
          projects with.
        </p>
        <p>
          <img src={CodeScreen1} alt="CodeScreen1" />
        </p>
        <h3>Popup Modal</h3>
          <p>
            Coding a modal from scratch in React is not as easy as you would
            think. But hey, nothing is these days with modern web development.
            Everything is more complex than it needs to be it seems.
          </p>
          <p>
            The problem I had after coding my Modal component was that It would
            pop up like normal, however, the background would still scroll when
            using the scroll wheel along with other issues I won't get into now.
          </p>
          <p>
            On any normal static site, you can easily code it so an overlay div
            goes outside of the body tag allowing you to have full control.
          </p>
          <p>
            So the easy solution would be to just put your modal overlay tags
            outside of the body tag. Unfortunately, all components you create in
            your React app are inside the body tag, and there is nothing you can
            do about it! Well, except for using a React Portal.
          </p>
          <p>
            I decided to use a React Portal to provide a first-class way to
            render children into a DOM node that exists outside the DOM
            hierarchy of the parent component. This solved the problem, and now
            I have a nice custom-made modal window where I have full control.
          </p>
          <p>
          <img src={CodeScreen2} alt="CodeScreen2" />
        </p>
        <h2>Final Words</h2>
          <p>
            In conclusion, designing and developing my portfolio site from
            scratch was a great learning experience. It allowed me to showcase
            my design and development skills in a more meaningful way and to
            solve some interesting problems along the way.
          </p>
          <p>
            I enjoyed using Figma to design the site and React and Tailwind CSS
            to code it. The background image blur on scroll was a challenging
            problem that I was able to solve with a simple solution. I also used
            the Framer-Motion library to create a filter animation for my
            portfolio items and built custom modal windows with the help of a
            React Portal.
          </p>
          <p>
            Overall, the experience taught me the importance of taking a step
            back to consider simpler solutions before jumping into complex ones.
            It also showed me the value of using existing libraries and tools to
            streamline development.
          </p>
          <p>
            I am proud of the final product and excited to continue building
            upon it as I progress in my career.
          </p>
        
      </div>
    </div>
  );
}

export default MyPortfolio;
