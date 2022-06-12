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
        <h4 className="pt-2">Moore Media LLC</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-4xl leading-[1.2em] mb-10">
            My Personal Web Dev/Design Portfolio Built with React
          </h1>
          <h2>Project Overview</h2>
          <p>
            Thanks for checking out my portfolio page about my portfolio, while
            being on my portfolio....whoa so meta right now.
          </p>
          <p>
            I wanted to design and develop my portfolio site from scratch
            because I feel designers and developers who don&#39;t are posers.
            That&#39;s why I chose the time-consuming, but way more fun route of
            designing my portfolio in Figma, and hand-coding it using React and
            Tailwind CSS.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a href="https://travistmoore.com/" target="_blank">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a href="https://travistmoore.com/" target="_blank">
                  Website URL
                </a>
              </span>
            </div>
          </div>
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://github.com/tstrife777/Travis_Strife_React_Portfolio"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://github.com/tstrife777/Travis_Strife_React_Portfolio"
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
          <img src={FigmaScreen} />
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
        <h2 id="problem-and-solution">Problem and Solution</h2>
        <h3 id="background-image-blur-on-scroll">
          Background image blur on scroll
        </h3>
        <p>
          The first problem I faced was figuring out the best way to get the
          background image to blur when I scrolled down past the hero section,
          and unblur when I scrolled back up to the top. This is not something
          you see on websites a lot, so this is something I don&#39;t do often.
        </p>
        <p>
          At first thought I was thinking the best way to achieve this effect
          was to create some Javascript code that listened to the vertical
          scroll value and then in real time it would update the opacity of the
          background image in real-time as you scrolled up or down.
        </p>
        <p>...Whoa, was I way off!</p>
        <p>
          After thinking about it for a minute and pondering if web development
          is the right career choice for me, I quickly realized how dumb of an
          idea that was and thought of something less overly engineered.
        </p>
        <p>
          That&#39;s kinda the goto mental model I have taught myself these days
          when I think about problems like this. I have realized that the very
          first solution I often come up with may in theory work, but more often
          or not is perhaps the most complex of options. That&#39;s why I have
          trained myself to step away for a minute or two, in the beginning, to
          settle down a little and gather my thoughts more so I can let my mind
          manifest a simpler solution. The majority of the time it does.
        </p>
        <p>
          In this case, all I needed to still listen to the vertical Scroll
          value, but instead of changing the opacity of the background element
          in real time, I just needed it to trigger when it hit a specific
          scroll value and then add or remove a custom class. A class with a
          blur transition-timing-function and filter: blur effect in the CSS.
        </p>
        <p>
          <img src={CodeScreen3} />
        </p>
        <p>
          An easy solution in hindsight, luckily I didn&#39;t just blindly jump
          into the first idea I thought of. Thanks, wisdom!
        </p>
        <h3 id="portfolio-item-filter-animation">
          Portfolio Item Filter Animation
        </h3>
        <p>
          The next thing I needed to build out was my Portfolio Item Filter
          Animation thingy.
        </p>
        <p>
          Luckily I have worked with the Framer-Motion library in the past and
          knew it would be perfect for a job like this. After extensively
          combing through their documentation, combined with a Youtube video or
          two and tinkering with the animation transitions I put together a
          solid filter effect for my portfolio items.
        </p>
        <p>
          <img src={CodeScreen1} />
        </p>
        <p>Next up was adding the modal windows. </p>
        <h3 id="adding-modals">Adding Modals</h3>
        <p>
          Coding a modal from scratch in React is not as easy as you would
          think. But hey, nothing is these days with modern web development.
          Everything is more complex than it needs to be it seems.
        </p>
        <p>
          The problem I had after coding my Modal component was that It would
          pop up like normal, however, the background would still scroll when
          using the scroll wheel along with other issues I won&#39;t get into
          now.
        </p>
        <p>
          On any normal static site, you can easily code it so an overlay div
          goes outside of the body tag allowing you to have full control.
        </p>
        <p>
          <img src={CodeScreen2} />
        </p>
        <p>
          So the easy solution would be to just put your modal overlay tags
          outside of the body tag. Easy enough right....haha you react noob,
          things aren&#39;t that simple!
        </p>
        <p>
          Unfortunately, all components you create in your React app are inside
          the body tag and there is nothing you can do about it! Well except for
          using a React Portal I guess.
        </p>
        <p>
          A Portal provides a first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </p>
        <p>
          So that&#39;s basically how I solved this problem and now I have a
          nice custom-made modal window where I have full control.
        </p>
        <p>First this website... next, the world! Watch out now!</p>
      </div>
    </div>
  );
}

export default MyPortfolio;
