import React from "react";
import HeaderImg from "../assets/thinkpro_page_header@2x.jpg";
import CompanyImage from "../assets/thinkpro_company_symbol@2x.png";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image1 from "../assets/thinkpro_image_1@2x.jpg";
import Image2 from "../assets/thinkpro_image_2@2x.jpg";
import Image3 from "../assets/thinkpro_image_3@2x.jpg";
import Image4 from "../assets/thinkpro_image_4@2x.jpg";
import Image5 from "../assets/thinkpro_image_5@2x.jpg";
import Image6 from "../assets/thinkpro_image_6@2x.jpg";
import Image7 from "../assets/thinkpro_image_7@2x.jpg";
import Image8 from "../assets/thinkpro_image_8@2x.jpg";
import Image9 from "../assets/thinkpro_image_9@2x.jpg";
import Image10 from "../assets/thinkpro_image_10@2x.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
function ThinkPro() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const cimages = [Image4, Image5, Image6, Image7, Image8, Image9, Image10];
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
        <h4 className="pt-2">thinkpro.net</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-10">
            TH!NK Pro Graphics & Printing Website & Branding
          </h1>
          <h2>Project Overview</h2>
          <p>
            TH!NK Pro Graphics &amp; Printing, a premier printing and marketing
            service provider located in Tempe, Arizona, offers an extensive
            range of services, including traditional printing, graphic design,
            garment printing, and website development and marketing services.
          </p>

          <p>
            Despite their excellent reputation for delivering top-notch services
            to their clients, the company's own branding materials had become
            outdated and were no longer reflective of the modern changes in the
            design and marketing landscape.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div className="flex md:justify-end md:items-end mb-5">
            <div className="mr-[10px] md:ml-[10px] md:mr-[0px] md:order-last">
              <a href="https://thinkpro.net" rel="noreferrer" target="_blank">
                <FaExternalLinkAlt size={30} />
              </a>
            </div>
            <div>
              <span className="text-sm self-center">
                <a
                  href="https://thinkpro.net/homepage-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Website URL
                </a>
              </span>
            </div>
          </div>
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Creative Director</li>
              <li>Designer</li>
              <li>Developer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Wordpress Website</li>
              <li>Elementor Theme</li>
              <li>Figma Theme Files</li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        This is a common pattern I see for most businesses even design agencies,
        they focus on their customers more than themselves. TH!NK Pro was no
        different.
      </p>

      <p>
        As the creative director and lead designer and developer of this
        project, I was tasked with upgrading the company's outdated design and
        breathing new life into the brand. The purpose of this case study is to
        examine the key decisions made throughout the project, as well as the
        problems and solutions that arose during the redesign process.
      </p>

      <p>
        In this study, I will provide an in-depth analysis of the project's
        successful completion, and offer insights into the strategies and
        tactics that were employed to modernize the company's branding. By
        discussing the challenges faced, the solutions that were implemented,
        and the results achieved, this case study will provide valuable insights
        into how service-based companies can stay ahead of the curve in an
        ever-changing industry. Let's dive in!
      </p>
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
              <motion.div key={image} className="item p-[20px] min-w-[26rem]">
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
        <h2>Research</h2>
        <h3>Social Proof Positive Feedback Loops</h3>
        <p>
          After gaining a comprehensive understanding of the foundational
          aspects of the company, such as the target market, product, and
          message, I delved into the various traffic sources to identify the
          primary drivers of the company's business.
        </p>

        <p>
          Subsequently, I discovered that the bulk of the company's business
          originates from Google, particularly from their Google My Business
          page and Google Maps. Notably, TH!NK has successfully invested in
          acquiring numerous Google reviews, which serves as an effective
          positive feedback loop for a brick-and-mortar business. The
          acquisition of more reviews leads to increased visibility and a better
          online reputation, attracting more customers and boosting the bottom
          line.
        </p>

        <p>
          However, I did not merely stop at gathering reviews for the company. I
          also conducted a comprehensive search for other print shops in Tempe
          and Arizona to determine their respective review counts. This analysis
          revealed that TH!NK is the highest reviewed print shop in Arizona, a
          remarkable feat. Armed with this insight, I planned to utilize it as
          leverage to promote the stats on their website, social media, email
          blasts, etc...
        </p>
        <h3>Learning From The Competition</h3>
        <p>
          The second thing I did was research the top print and design studios
          worldwide, as well as the local competition. By analyzing the leading
          industry players like Vistaprint, Moo, GoPrint, and other
          well-regarded studios, I was able to learn from both their successes
          and their mistakes.
        </p>

        <p>
          To gather my findings, I utilized tools like the Awesome Screenshots
          plugin to screenshot the entire website and FigJam to save them to the
          whiteboard. I wasn&rsquo;t as focused on the graphic on the websites
          as much as I was on the overall user interface and experience. UX/UI
          is the is the foundation of good design in web design and development.
        </p>
        <p>
          <img src={Image1} alt="whiteboard" />
        </p>

        <p>
          By compiling my screenshots into FigJam, I was able to easily label
          the good, bad, and ugly aspects of the various websites and use this
          as a reference for the redesign process. In addition to my own
          insights, I also sought feedback from coworkers and colleagues to
          ensure a well-rounded analysis.
        </p>

        <p>
          However, it's important to note that the limitations of my research
          approach were the potential biases or limitations of the data
          collected from the various sources. Therefore, I made a conscious
          effort to consult a diverse range of sources to mitigate any biases
          and limitations, while still ensuring a comprehensive analysis.
        </p>
        <h2>Problem &amp; Opportunity</h2>
        <p>
          The redesign of the TH!NK Pro Graphics &amp; Printing website was
          initiated to address several issues that were impacting the company's
          online presence. The current website was outdated and cluttered, with
          poor UI/UX, SEO and plugin bloat. This made it challenging for users
          to navigate the site, locate the information they needed, and engage
          with the company's products and services.
        </p>

        <p>
          In addition, the website lacked key design elements, including social
          proof, client logos, and high-quality photography, which are critical
          components for building trust and driving sales. The absence of these
          elements limited the company's ability to showcase its strengths and
          differentiate itself from the competition.
        </p>

        <p>
          If these issues were not addressed, TH!NK Pro Graphics &amp; Printing
          risked losing potential customers and falling behind in a highly
          competitive market. Additionally, the lack of social proof and other
          design elements could limit its ability to attract and retain
          customers. As such, it was imperative to revamp the website and
          address these issues in order to improve the user experience, build
          trust with potential customers, and stay competitive in the market.
        </p>
        <h2>Solution</h2>
        <h3>Social Proof Section</h3>
        <p>
          Acquiring testimonials for the TH!NK redesign was a straightforward
          process, as the company had amassed over 300 Google reviews on its
          Google My Business page. From my research, TH!NK was the highest-rated
          print and design studio in Tempe, and from what I could gather Arizona
          overall, so it was imperative to showcase this authority on the front
          page of the new website.
        </p>
        <p>
          <img src={Image2} alt="testimonials" />
        </p>

        <p>
          To accomplish this, I set out to collect as many impressive
          testimonials as possible and created a dedicated testimonial section
          that truly stood out. Emphasizing our status as the top-rated design
          and print studio in Arizona was crucial since it placed us at the top
          of the market, which is a strong selling point for potential
          customers.
        </p>

        <h3>Portfolio Section</h3>

        <p>
          Next, I assembled a portfolio website of TH!NK's best works, which was
          a significant oversight that the company had previously overlooked. As
          a professional designer, I understand that it's essential to showcase
          the quality of work to potential clients to increase the chances of
          attracting customers and making sales.
        </p>
        <p>
          <img src={Image3} alt="testimonials" />
        </p>

        <p>
          To compile the portfolio, I initially used the best images that TH!NK
          already had. Afterward, I obtained all the items I could locate from
          their warehouse and captured the photos myself. To optimize the
          quality of the images, I would have previously used an expensive DSLR
          camera and lenses to create a professional-looking bokeh effect.
          However, in today's digital age, an iPhone camera can produce similar
          quality images at a faster pace.
        </p>

        <p>
          It's important to note that expensive gear does not make a better
          photographer, and the outcome is more dependent on the photographer's
          skill and eye for detail.
        </p>

        <p>
          While I could delve into all the changes that were made, I felt that
          these were the two most critical alterations I did for the entire
          redesign.
        </p>

        <h2>Results</h2>

        <p>
          The redesign of TH!NK Pro Graphics &amp; Printing's website was a
          resounding success. The new website is modern, clean, and
          user-friendly, with improved UI/UX, high-quality images, and a clear
          layout that makes it easy for visitors to navigate and find the
          information they need.
        </p>

        <p>
          The addition of social proof and a portfolio of the company's best
          works has increased the website's credibility and authority, making it
          easier to attract and retain customers.
        </p>
        <h2>Conclusion</h2>
        <p>
          In conclusion, the redesign of TH!NK Pro Graphics &amp; Printing's
          website was a challenging but rewarding project that successfully
          addressed the issues that were affecting the company's online
          presence. By conducting extensive research, collecting impressive
          testimonials, and creating a portfolio of the company's best works, we
          were able to modernize the company's branding and increase its
          credibility and authority.
        </p>

        <p>
          The success of the project highlights the importance of staying
          up-to-date with industry trends and adopting best practices to improve
          the user experience, build trust with potential customers, and stay
          competitive in a highly competitive market.
        </p>
      </div>
    </div>
  );
}

export default ThinkPro;
