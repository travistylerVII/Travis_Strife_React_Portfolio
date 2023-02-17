import React from "react";
import HeaderVideo from "../assets/React_Masonry_Grid_Filter_Video_Preview_800_600.mp4";
import CompanyImage from "../assets/MooreMedia_Company_Icon.png";

function ReactMasonryGrid() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <video
          className="cover "
          src={HeaderVideo}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          height=""
          width="100%"
          alt=""
        ></video>
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Moore Media LLC</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            React Masonry Grid Filter Component
          </h1>

          <p>
            This masonry style grid component with filter was custom designed
            and developed so I had a clean and user friendly way to showcase my
            work.
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
              <li>React Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactMasonryGrid;
