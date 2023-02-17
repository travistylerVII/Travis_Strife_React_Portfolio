import React from "react";
import HeaderImg from "../assets/logistick_header.jpg";
import CompanyImage from "../assets/Logistick_Company_Logo@2x.jpg";
import LogistickDraft from "../assets/logistick_logo_drafts@2x.jpg";
import LogistickProof from "../assets/logistick_logo_proof@2x.jpg";
import LogistickFinal from "../assets/logistick_logo_final@2x.jpg";
function Logistick() {
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
        <h4 className="pt-2">Logistick Promotions</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">Logistick Logo</h1>
          <h2>Project Overview</h2>
          <p>
          Logistic Promotions is a company specializing in creating marketing materials that are designed to stick, such as stickers and magnets. Our goal is to help businesses create effective promotional campaigns by providing them with high-quality and eye-catching marketing materials.
          </p>
          <p>
          For this particular project, my objective was to design a logo that immediately communicates the essence of the company. I designed a logo that conveys the concept of sticking in just a few seconds, so that potential customers could easily understand what they are about. The logo is a vital part of our branding strategy, and I was committed to creating a design that is memorable, engaging, and aligns with our overall mission.
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
              <li>Illustrator Design</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>
          &quot;Let's create a logo to look like it's peeled up in an area to
          represent a sticker feel!&quot; Those were the instructions given. I
          like it. Sounds, easy enough, Let's get started...
        </p>
        <p>
          <img alt="Logistick Drafts" src={LogistickDraft} />
        </p>
        <p>
          Several rough drafts were made with various color schemes and fonts
          for variation.
        </p>
        <p>
          <img alt="Logistick Proof" src={LogistickProof} />
        </p>
        <p>
          After some back and forth on the design, we settled on the direction
          of the design, and several color variations were presented.
        </p>
        <p>
          <img alt="Logistick Final" src={LogistickFinal} />
        </p>
        <p>
          In the end, we decided to drop the O in the background where the
          sticker was and settled on the final design, resulting in a very happy
          client.
        </p>
      </div>
    </div>
  );
}

export default Logistick;
