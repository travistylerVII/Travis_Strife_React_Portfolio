import React from "react";
import HeaderImg from "../assets/binarykings_logo_header@2x.jpg";
import CompanyImage from "../assets/binarykings_logo_company_symbol@2x.png";
import { FaExternalLinkAlt } from "react-icons/fa";
function BinaryKingsLogo() {

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
        <h4 className="pt-2">Binary Kings</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Binary Kings Logo Design
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! 
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a href="https://mobile.twitter.com/binarykings" rel="noreferrer" target="_blank">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://mobile.twitter.com/binarykings"
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
    </div>
  );
}

export default BinaryKingsLogo;
