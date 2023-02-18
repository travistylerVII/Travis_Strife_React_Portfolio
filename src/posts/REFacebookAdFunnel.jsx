import React from "react";
import HeaderImg from "../assets/RE_FB_Header@2x.jpg";
import CompanyImage from "../assets/The_Lead_Agent_Logo.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/REFBAttract1.jpg";
import Image2 from "../assets/REFBCapture1.jpg";
import Image3 from "../assets/REFBConvert1.jpg";
function REFacebookAdFunnel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image1, Image2, Image3];
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">TheLeadAgent.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-5">Real Estate Facebook Ad Campaign</h1>
          <h2>Project Overview</h2>
          <p>
            This is a complete Facebook real estate Buyer marketing campaign
            designed to generate buyer leads and convert them to appointments
            and phone calls.
          </p>
          <p>
            I have been helping businesses run Facebook and Google ads for at
            least 8 years now, so this stuff is like second nature to me at this
            point.
          </p>
          <p>
            Most of the time I approach any marketing campaign I have to create
            from start to finish I break it down into three phases: Attract,
            capture and convert. Below I will go over the phases and how it
            relates to this campaign.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Marketer</li>
              <li>Designer</li>
              <li>Developer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Facebook Ad</li>
              <li>Marketing Funnel</li>
              <li>SMS / Email Follow-up</li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        ref={carousel}
        className="carousel overflow-hidden cursor-grab my-5 relative w-[100vw] ml-[-50vw] left-[50%] "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex"
        >
          {cimages.map((image) => {
            return (
              <motion.div key={image} className="item p-[20px] min-w-[40rem]">
                <img
                  src={image}
                  alt=""
                  className="rounded-[5px] w-full h-full pointer-events-none shadow-[0px_0px_10px_0px_rgba(0,0,0,.6)]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div>
        <h2>Phase 1: Attract</h2>
        <p>
          The first phase, attract, involved crafting the perfect bait to lure
          in potential buyers. With my experience in the real estate industry and through extensive research and testing, I found
          that a list of homes offer was the most effective bait for attracting buyer prospects. With this knowledge, I created multiple variations of the offer
          to test, each with about four ads in each adset. By iterating and
          studying feedback, I was able to eliminate the weaker ads and focus on
          the best performers, ultimately leading to the creation of the perfect
          ad.
        </p>
        <h2>Phase 2: Capture</h2>
        <p>
          In the capture phase, I every ad should lead to a funnel specificly designed for lead capture. I
          opted for a Facebook lead form, as I have found success in using this
          method in the past. However, I am aware that the quality of leads may
          be lower due to the email and phone autocomplete feature. To combat
          this, I created a landing page as an alternative and tested which
          method worked best for this campaign.
        </p>
        <h2>Phase 3: Convert</h2>
        <p>
          Finally, in the conversion phase, I set up a long-term SMS and email
          marketing automation drip campaign sequence through Go High Level. Go High Level is an amazing and cost effect CRM marketing platform. The
          sequence consisted of two strategies: direct outreach and nurture.
          </p>
          <p>
          Through direct outreach, I utilized SMS and email automation designed
          to get an immediate response from prospects. For leads that were not
          immediately converted, they were placed in a long-term email nurture
          campaign designed to showcase the agent as an authority and provide
          value to the prospects until they were ready to move forward.
        </p>
        <h2>Final Words</h2>
        <p>
          Overall, this campaign was a success thanks to my experience and
          expertise in the industry. By implementing the attract, capture, and
          convert phases, I was able to create a comprehensive campaign that
          generated high-quality leads and converted them into appointments and
          phone calls. The only hurdle that remains is getting people to always
          put in the correct phone number…
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default REFacebookAdFunnel;
