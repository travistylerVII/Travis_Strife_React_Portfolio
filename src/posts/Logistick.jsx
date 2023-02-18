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
              Logistic Promotions is a company that specializes in creating high-quality
              marketing materials that stick, such as stickers and magnets. As the lead
              designer for the project, my primary goal was to create a logo that
              encapsulated the essence of the company, while remaining instantly
              recognizable and memorable.
          </p>
          <p>
              To achieve this goal, I took on the challenge of creating a logo that
              emulated the look of a sticker peeling up from the surface. This concept
              was well received by the client, and I began the design process by
              exploring various color schemes and fonts to achieve the perfect
              combination.
          </p>
          <div>
              <br/>
          </div>
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
          <img alt="Logistick Drafts" src={LogistickDraft} />
        </p>
        <p>
              After a series of rough drafts and design iterations, we arrived at a final
              design that perfectly aligned with the company's vision and values.
          </p>
        <p>
          <img alt="Logistick Proof" src={LogistickProof} />
        </p>
        <p>
        The chosen design featured the letter "O" dropping away in the background, simulating the look of a sticker being peeled up.
        </p>
        <p>
          <img alt="Logistick Final" src={LogistickFinal} />
        </p>
        <p>
              The final design was presented to the client in several color variations,
              and the chosen logo was met with great enthusiasm. By creating a logo that
              visually represents the company's core values and mission, we were able to
              provide Logistic Promotions with a strong foundation for their branding
              efforts.
          </p>
      </div>
    </div>
  );
}

export default Logistick;
