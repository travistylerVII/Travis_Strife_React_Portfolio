import React from "react";
import HeaderImg from "../assets/Golftroop-page-header.jpg";
import CompanyImage from "../assets/Golftroop_Company_Logo@2x.jpg";
function DeliciousLPTheme() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img
          src={CompanyImage}
          alt="Company"
          className="w-11 h-11 rounded-full"
        />
        <h4 className="pt-2">GolfTroop</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">GolfTroop Flyer Design</h1>
          <p>
            GolfTroop is the leading Golf Vacation company in Scottsdale, AZ,
            specializing in making sure you have a great time with your buddies
            and getting you the best deals on everything golf, lodging and car
            rentals.
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
              <li>Flyer Design</li>
              <li>InDesign Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliciousLPTheme;
