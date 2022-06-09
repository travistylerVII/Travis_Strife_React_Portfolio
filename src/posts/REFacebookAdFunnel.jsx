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
              <motion.div key={image} className="item p-[20px] min-w-[33rem]">
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
        <p>Most campaigns like this come in three phases. </p>
        <ol>
          <li>Attract</li>
          <li>Capture</li>
          <li>Convert</li>
        </ol>
        <h3 id="the-attract-phase">1 - The Attract Phase</h3>
        <p>
          The Attract phase is all about crafting the best bait that attracts
          all the fish. (I can&#39;t think of a better analogy). In other words,
          the advertisement and in this case we are attracting people who are
          looking to buy a home.
        </p>
        <p>
          When it comes to advertising it&#39;s all about the product and the
          offer. If you have a bad product and offer, no amount of marketing
          will help you...at least in the long run.
        </p>
        <p>
          With real estate and lead generation, I have found through research
          and testing over 50+ different types of creative and unique real
          estate offers that a list of home offer still outperform any other
          buyer real estate offer tested.
        </p>
        <p>So that&#39;s what I used in this case. </p>
        <p>
          The copy is optimized through testing, iterating, and studying the
          feedback.
        </p>
        <p>
          <strong>The process went like this:</strong>
        </p>
        <ol>
          <li>Based on the ad budget, create multiple variations. </li>
          <li>Each Adset should have about 4 ads. </li>
          <li>
            Each ad in the Adset are clones with one variable changed. (Image,
            header, text, etc...)
          </li>
          <li>Publish the ads and run the variations. </li>
          <li>Collect data and get feedback</li>
          <li>Study and find the winners and the losers.</li>
          <li>Drop losers and replace them with clones of winners</li>
          <li>Change one variable on clones. </li>
          <li>Repeat</li>
        </ol>
        <p>
          This process is much like the processes of nature with evolution and
          survival of the fittest.
        </p>
        <p>
          In the end, the processes of elimination will show you the
          best-performing ads.
        </p>
        <p>
          That&#39;s how you run ads... well that&#39;s how I do it at least and
          it works great.
        </p>
        <h3 id="the-capture-phase">2 - The Capture Phase</h3>
        <p>Every ad I run goes to funnel. </p>
        <p>
          The funnel is comprised of at least one landing page or lead form. I
          never run lead gen ads to websites. Load times are bad and conversion
          rates are low.
        </p>
        <p>
          In this case, I used a Facebook Lead Form. I have mixed reviews about
          lead forms. If they would just remove the email and phone autocomplete
          in Facebook lead forms the lead quality would be so much higher I
          feel, but I suppose the lead cost would be higher too.
        </p>
        <p>
          Facebook probably knows this and has determined for marketing and
          promotional purposes a lower lead cost is better to attract
          advertisers than a higher lead cost and a more qualified lead.
        </p>
        <p>
          Ether way, I test both lead forms and landing pages, and sometimes
          landing pages do better and sometimes lead forms. I guess it depends
          on the day, platform and campaign.
        </p>
        <h2 id="the-convert-phase">3 - The Convert Phase</h2>
        <p>
          Most people stop at putting up an ad and funnel and prey people will
          buy their stuff or schedule an appointment.
        </p>
        <p>
          Oh, unfortunately long gone are the days of people taking action on
          their own to buy. Especially in real estate.
        </p>
        <p>You need to get out there, hunt them down and reach out to them. </p>
        <p>
          That&#39;s why in this project I set up a long-term SMS and email
          marketing automation drip campaign sequence.
        </p>
        <p>
          I&#39;ve used just about every popular marketing automation platform
          under the sun just about, all with their pros and cons and the one I
          have found to be the best in terms of price vs quality is Go High
          Level. Now that&#39;s not to say Go High Level is the end all, be all.
          It&#39;s a real piece of $#!@ in many ways. But it has features I need
          and does the job.
        </p>
        <p>
          The follow-up phase consists of two strategies: &quot;Direct
          outreach&quot; and &quot;Nurture&quot;.
        </p>
        <h3>Direct Outreach and Nurture</h3>
        <p>
          With Direct Outreach using GHL I set up SMS and Email drip automation
          that looks like it&#39;s coming from the client directly. These are
          designed to get an immediate response.
        </p>
        <p>
          Once the prospect responds all automation stops and the Agent picks up
          the conversation and converts the lead to a call to advance them to
          the next phase. This is real estate so the next phase is an
          appointment usually because the sales cycles are so long.
        </p>
        <p>
          For all the leads that do not answer or need more nurturing, they are
          automatically placed in the long-term email nurture campaign.
        </p>
        <p>
          These emails are designed to provide value and display the agent as
          the authority so that when the prospect is ready to move forward the
          agent is top of mind.
        </p>
        <p>And that&#39;s it. That&#39;s the entire campaign summed up. </p>
        <p>
          Now the real problem is getting people to put in the correct phone
          number. But that&#39;s a story for another day.
        </p>
      </div>
    </div>
  );
}

export default REFacebookAdFunnel;
