import React from "react";
import HeaderImg from "../assets/copykraze_logo_header@2x.jpg";
import CompanyImage from "../assets/copykraze_logo_symbol@2x.png";
import Image1 from "../assets/copykraze_logo_image.jpg";
function CopyKrazeLogo() {

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
        <h4 className="pt-2">Copy Kraze</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            Copy Kraze Logo Design
          </h1>
          <p>
          Here is a logo that I crafted for CopyKraze.com - a professional copy and content writing service that offers unparalleled value with its unlimited content subscription. The logo boasts a brilliant blend of professionalism and uniqueness that perfectly represents the business and its offerings. On the left, the word "copy" is presented in a timeless font that exudes professionalism and experience, while on the right, "Kraze" is portrayed in a playful font that embodies the company's boldness and willingness to defy conventions in today's competitive marketing landscape.
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
              <li>Illustrator Files</li>
            </ul>
          </div>
        </div>
        
      </div>
      <p>
            <img src={Image1} alt="copykraze" />
          </p>
          <p>
To add to its uniqueness, the "Crazy Comma" - a captivating swirling comma - is strategically placed in the letter "R" of Kraze, making it an unforgettable symbol of the brand. With this stunning logo, CopyKraze.com is sure to make a lasting impression on its clients and set itself apart from the competition as a leading provider of copy and content writing services. 
          </p>
    </div>
  );
}

export default CopyKrazeLogo;
