import React from "react";
import HeaderImg from "../assets/white_rabbit_header@2x.jpg";
import CompanyImage from "../assets/White_Rabbit_Express_Company_Logo@2x.png";
import WRWinnerScreen from "../assets/white_rabbit_winner_screen.jpg";
import WRIllustratorScreen from "../assets/White_rabbit_illustrator_screen.jpg";
function WhiteRabbitExpress() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">White Rabbit Express</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-5">
            White Rabbit Express Postcard Design
          </h1>
          <h2>Project Overview</h2>
          <p>
            The White Rabbit Express is a shipping company that specializes in
            shipping products from Japan.
          </p>
          <p>
            This was one of the first and only projects I submitted to
            99designs.com when I first learned about them and... I won!
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
          Whoot Whoot! A 100% win rate on 99 Designs! I should probably quit
          while I&#39;m on top and just advertise that. :)
        </p>
        <p>
          With the client providing the copy, I took that into consideration to
          visually represent the shipping process the best I could while still
          maintaining a flat minimalistic feel.
        </p>
        <p>
          No drop shadows, gradients, or background overlays were used. Just
          flat shapes and plane colors. No over-engineering was necessary.
        </p>
        <p>Designed in Adobe Illustrator per clients request.</p>
        <p>
          <img src={WRIllustratorScreen} alt="99 Designs Winner Sreenshot" />
        </p>
        <p>
          In the end, it was a simple design, that was easy to read and
          understand and the client loved it.
        </p>
        <p>
          After I won I took my winnings and got to finally retire. Thanks 99
          designs!
        </p>
      </div>
    </div>
  );
}

export default WhiteRabbitExpress;
