import React from "react";
import HeaderVideo from "../assets/tictactoe_video.mp4";
import CompanyImage from "../assets/MooreMedia_Company_Icon.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function TicTacToe() {
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
          <h1 className="text-5xl mb-10">Tic Tac Toe</h1>

          <p>
            A simple Tic Tac Toe Game I build with Javascript, HTML, SCSS. This project was created to practice my functional javascipt programming skills. I really enjoy designing the entire user interface and experience, then actually hardcoding it myself to make them come to life. 
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="/demos/tic-tac-toe/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="/demos/card-matching-game/game.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Play Game
                </a>
              </span>
            </div>
          </div>
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a
                href="https://github.com/travistylerVII/tic-tac-toe"
                target="_blank" rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://github.com/travistylerVII/tic-tac-toe"
                  target="_blank" rel="noreferrer"
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

export default TicTacToe;
