import React from "react";
import HeaderImg from "../assets/Black-Mage-Logo-Header.jpg";
import CompanyImage from "../assets/Black_Mage_Media_Company_Icon.png";

function BlackMageLogo() {
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
          <p>
            Black Mage Media is a company I created that offers unlimited
            graphic design for one fixed monthly subscription. Pretty sweet deal
            if you ask me.
          </p>
          <p>
            I really had a lot of fun creating this logo as I took inspiration
            from time favorite video game Final Fantasy. In the game there are
            these pointy hat mages that I thought would fit perfectly replacing
            the letter A in the word Mage itself. I feel like it worked out
            quite well.
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
    </div>
  );
}

export default BlackMageLogo;
