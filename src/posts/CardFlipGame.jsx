import React from "react";
import HeaderVideo from "../assets/card_matching_game_video_preview.mp4";
import CompanyImage from "../assets/MooreMedia_Company_Icon.png";

import { FaGithub } from "react-icons/fa";
function CardFlipGame() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <video
          className="cover "
          src={HeaderVideo}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          height=""
          width="100%"
          alt=""
        ></video>
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Moore Media LLC</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">Card Matching Game</h1>

          <p>
            I try and code everyday if have time to maintain my programming
            sills and sometimes I think of a cool small project to build and do
            it. This is one of those projects. A simple card matching game build
            just with HTML, CSS and Javascript. No frameworks.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://github.com/tstrife777/card-matching-game"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://github.com/tstrife777/card-matching-game"
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
              <li>Development Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlipGame;
