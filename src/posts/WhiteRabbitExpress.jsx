import React from "react";
import HeaderImg from "../assets/white_rabbit_header@2x.jpg";
import CompanyImage from "../assets/White_Rabbit_Express_Company_Logo@2x.png";
import WRWinnerScreen from "../assets/white_rabbit_winner_screen.jpg";
import WRIllustratorScreen from "../assets/White_rabbit_illustrator_screen.jpg";
function WhiteRabbitExpress() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">White Rabbit Express</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            White Rabbit Express Postcard Design
          </h1>
          <h2>Project Overview</h2>
          <p>
            As a designer, one of my first experiences with 99designs.com was
            working with The White Rabbit Express, a shipping company that
            specializes in shipping products from Japan. To my excitement, I won
            the project and had a 100% win rate on the platform. Time to retire
            on top!
          </p>
          <p>
            This was a great start to my freelance career and it gave me the
            confidence I needed to continue with my design work.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Designer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Illustrator Files</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>
          <img src={WRWinnerScreen} alt="99 Designs Winner Sreenshot" />
        </p>
        <p>
          The client provided the copy for the project, and I took that into
          consideration when developing the design. My goal was to visually
          represent the shipping process in the best way possible, while
          maintaining a flat, minimalistic feel. I made sure to use only flat
          shapes and plain colors and avoided using any drop shadows, gradients,
          or background overlays. This approach allowed the design to remain
          simple and easy to read, while still being aesthetically pleasing.
        </p>
        <p>
          <img src={WRIllustratorScreen} alt="99 Designs Winner Sreenshot" />
        </p>
        <p>
          By keeping the design simple, I was able to convey the important
          information in a clear and concise manner. The client loved the final
          result, and the design was a great success. I am grateful for the
          opportunity to have worked with The White Rabbit Express, and I thank
          99designs.com for providing me with this platform to showcase my
          skills.
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default WhiteRabbitExpress;
