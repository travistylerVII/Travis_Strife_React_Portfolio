import React from "react";
import HeaderImg from "../assets/Leadmagnet_Landing_Page_Header.jpg";
import CompanyImage from "../assets/Copyking_Company_Icon.png";

function DeliciousLPTheme() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Copy King</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Profitable Blogger Leadmagnet Funnel
          </h1>
          <h2>Project Overview</h2>
          <p>
            The leadmagnet landing page funnel is designed to collect the lead
            in return for the profitabble blogger cheat sheet. Designed in
            Photoshop and devoped using HTML, CSS and Bootstrap CSS Framework.
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
              <li>Photohop Files</li>
              <li>Development Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliciousLPTheme;
