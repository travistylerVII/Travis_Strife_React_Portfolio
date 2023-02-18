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
          <p>Black Mage Media is a company that I founded to offer businesses a cost-effective and streamlined solution for their graphic design needs. Our innovative subscription-based model provides clients with unlimited access to high-quality designs for a fixed monthly fee, making our services an incredibly attractive option.</p>
          <p>As the founder and lead designer, I approached the creation of our company&apos;s logo with the same level of creativity and attention to detail that we bring to every client project. Drawing inspiration from one of my favorite video games, Final Fantasy, I incorporated elements of the game&apos;s iconic black mage character into the design.</p>
          <p>By replacing the letter &quot;A&quot; in &quot;Mage&quot; with a pointy-hat mage character, I was able to create a memorable and eye-catching logo that effectively represents our company&apos;s brand and values. Our logo is a reflection of our commitment to creative design, innovation, and outstanding customer service.</p>
          <p>At Black Mage Media, we believe that graphic design is a critical component of any successful business. By offering our clients unlimited access to high-quality designs, we are making it easier than ever for companies to elevate their branding and stand out in their respective markets.</p>
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
