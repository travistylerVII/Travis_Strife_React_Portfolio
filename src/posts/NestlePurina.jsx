import React from "react";
import HeaderImg from "../assets/nestle_purina_header@2x.jpg";
import CompanyImage from "../assets/The_Lead_Agent_Logo.png";
import TunaBizCard from "../assets/tuna_bizcard_mockup.jpg";
function NestlePurina() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Nestle Purina</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-5">Nestle Purina Business Card Design</h1>
          <h2>Project Overview</h2>
          <p>
              a rep at Nestle Purina, the merger of two well-known brands in the food industry,
              approached me to design their business cards. As a designer, I was
              entrusted with the task of creating a business card that accurately
              reflects their corporate identity. Despite the strict branding guidelines
              set by the company, I took on the challenge and created a design that they
              ultimately loved.
          </p>
          <div>
              
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
              <li>Business Card Design</li>
              <li>InDesign Files</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>
              While the design of the cards is not my most creative work, it is a
              testament to my ability to follow strict guidelines while still producing a
              functional and professional design. As a designer, it's essential to
              understand the importance of following branding guidelines while still
              producing a design that speaks to the brand's values.
          </p>
          
          <p>
              Although I had limited room for creative expression, I was able to produce
              a design that achieved its intended purpose. As a designer, sometimes our
              job is simply to create a design that performs its intended function, and
              in this case, the cards do just that. As with any project, I take pride in
              my ability to deliver a final product that meets the client's needs and
              expectations.
          </p>
        
      </div>
    </div>
  );
}

export default NestlePurina;
