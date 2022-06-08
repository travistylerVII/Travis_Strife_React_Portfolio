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
          <p>Business cards designed for Nestle Purina. </p>
          <p>
            Do you know Nestle the chocolate company? And do you know Purina the
            dog food company? Well, apparently they merged into Nestle Purina
            for some reason, and well... I find that kinda strange.
          </p>
          <p>
            But regardless of their strange business strategy, someone from the
            corporate office at one point put trust in me to design them a
            business card. (Welp, that was a mistake.) Lucky for me, in the end,
            they loved it.
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
              <li>Business Card Design</li>
              <li>InDesign Files</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>
          Now, I&#39;m going to be 100% honest with you.... the design of these
          cards is not anything to write home about. They are just on my
          portfolio here for brand recognition. Gotta capitalize off those big
          brand names from time to time ya know?
        </p>
        <p>
          However, with their strict corporate branding guidelines, I hardly had
          any creative wiggle room to get crazy with the design. Which was a
          good decision on their part because I would have put Tuna from the
          popular instagram channel
          <a
            href="https://www.instagram.com/tunameltsmyheart"
            target="_blank"
            rel="noreferrer"
          >
            Tuna Melts My Heart
          </a>
          on the backside of the card and called it a day!
        </p>
        <p>
          <img src={TunaBizCard} alt="Tuna Biz Card Mockup" />
        </p>
        <p>
          But overall I guess I like how they turned out. They do the job they
          were intended for perfectly well and sometimes that is all you need.
        </p>
      </div>
    </div>
  );
}

export default NestlePurina;
