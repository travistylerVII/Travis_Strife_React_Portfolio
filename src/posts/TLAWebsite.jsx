import React from "react";
import HeaderImg from "../assets/Theleadagent_page_header@2x.jpg";
import CompanyImage from "../assets/The_Lead_Agent_Logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/TLA_Page_Previews01@2x.jpg";
import Image2 from "../assets/TLA_Page_Previews02@2x.jpg";
import Image3 from "../assets/TLA_Page_Previews03@2x.jpg";
import Image4 from "../assets/TLA_Page_Previews04@2x.jpg";
import Image5 from "../assets/TLA_Page_Previews05@2x.jpg";
import FigmaScreen from "../assets/tla_figma_screen.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
function TLAWebsite() {
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
        <h4 className="pt-2">TheLeadAgent.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">Real Estate Marketing Agency</h1>
          <h2>Project Overview</h2>
          <p>
    As the designer and developer and founder of The Lead Agent, my role was to
    set up a simple, yet effective website that would help capture and convert
    leads for real estate agents, brokers, and mortgage loan officers. I was
    responsible for defining the target audience, understanding their biggest
    pain points, and developing a solution that would be attractive to them.
</p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://theleadagent.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://theleadagent.com"
                  target="_blank"
                  rel="noreferrer"
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
              <li>Website Design</li>
              <li>Marketing Funnel</li>
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
      <h2>Design</h2>
      <p>
    The design for theleadagent.com required a sleek and polished aesthetic. In
    order to highlight the efficacy of our services and its potential impact on
    the users, on the homepage I opted to create a striking hero section featuring a woman
    intently looking down at her phone amidst a flurry of text bubbles and a
    queue of messages, effectively capturing the volume of leads and
    conversations that await the user.
</p>
<p>
    Beneath the hero section, we prominently displayed trust logos of reputable
    companies we have worked with, reinforcing our credibility and reliability.
</p>
<p>
    Directly following the trust logos section, I sought to express our
    services with two clear and concise sections. On the left, we conveyed the
    message that we provide our real estate clients with a hassle-free and
    efficient process, essentially teeing up the ball for them so that all they
    have to do is sell, essentially knocking it out of the park metaphorically
    speaking.
</p>
        <p>
<img src={FigmaScreen} alt="tlascreenshot"/>

        </p>
<h2>Development</h2>
<p>
    The primary challenge was to create a functional website that was easy to
    use and wouldn't break the bank given that this was a bootstrapped startup.
    I knew I needed a cost-effective solution that could be set up quickly, and
    that's why I decided to use WordPress as the CRM and Amazon AWS as the
    hosting provider. This would allow me to keep costs to a minimum while
    still delivering a quality product.
</p>
<p>
    <strong>Setting up the website was a straightforward process:</strong>
</p>
<ol>
    <li>
        
            Buy a domain from Google Domains
        
    </li>
    <li>
        
            Setting up the host using Amazon AWS Lightsail, which was an
            affordable hosting option. I also created a Route 53 Hosted Zones
            in AWS to help with domain management.
        
    </li>
    <li>
        
            Download Wordpress files and go through the Wordpress installation
            process.
        
    </li>
    <li>
        
            Once the hosting was set up, I logged into WordPress and changed
            the username login credentials to improve security.
        
    </li>
    <li>
        
            I then began adding the necessary plugins, including Elementor,
            which is a drag-and-drop page builder that makes it easy to
            customize the design of the website.
        
    </li>
</ol>
<p>
    And that's it! A website from scratch in just 5 easy steps.
</p>
<p>
    In the end, the website was up and running, and it has been instrumental in
    capturing and converting leads for The Lead Agent's clients.
</p>
<p>
    While the design and development process went smoothly, the biggest
    challenge was creating the sales copy that would resonate with the target
    audience. Nonetheless, the result was a simple, easy-to-use website that
    served its intended purpose and helped The Lead Agent achieve its goals.
</p>

      </div>
    </div>
  );
}

export default TLAWebsite;
