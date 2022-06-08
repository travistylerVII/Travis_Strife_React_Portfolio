import React from "react";
import HeaderImg from "../assets/Black-Mage-Logo-Header.jpg";
import CompanyImage from "../assets/Black_Mage_Media_Company_Icon.png";

import FigmaScreen from "../assets/tla_figma_screen.jpg";
function DeliciousLPTheme() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Black Mage Media</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">Black Mage Media Logo</h1>
          <h2>Project Overview</h2>
          <p>
            The Lead Agent is a digital marketing agency that specializes in
            helping Real Estate Agents, Brokers, and Mortgage Loan Officers
            capture and convert leads into closed deals.
          </p>
          <p>
            The services it provides range from creating ads, building funnels,
            marketing automation, training, and more.
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
              <li>Logo Design</li>
              <li>Illustrator Files</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>My Role</h2>
        <p>
          As the Founder and CEO of this company was in charge of everything
          until I needed to hire out.
        </p>

        <p>
          <img alt="figma screenshot" src={FigmaScreen} />
        </p>
        <p>
          The most time consuming part was creating the copy. But that's a story
          for another day.
        </p>
      </div>
    </div>
  );
}

export default DeliciousLPTheme;
