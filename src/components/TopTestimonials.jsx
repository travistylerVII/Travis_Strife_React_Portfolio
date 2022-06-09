import TestimonialImg1 from "../assets/Testimonial_1.png";
import TestimonialImg2 from "../assets/Testimonial_2.png";
import TestimonialImg3 from "../assets/Testimonial_3.png";
import Star from "../assets/Star.svg";

const TopTestimonials = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 text-white border border-t-0 border-[#c7cfd5] p-8 relative">
        <div className="stars absolute w-[100%] text-center">
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
        </div>
        <div className="flex">
          <div className="w-[150px] mr-5 mt-1">
            <img src={TestimonialImg1} />
          </div>
          <div>
            <p className="pb-3 italic">
              "Travis is very knowledgeable and works quickly and efficiently to
              get the job done. Highly recommend!!"
            </p>
            <p>- Alejandra Paladino</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[150px] mr-5 mt-1">
            <img src={TestimonialImg2} />
          </div>
          <div>
            <p className="pb-3 italic">
              "Travis has helped me tremendously in my business. If you're
              looking to grow and scale your business talk to Travis!!!"
            </p>
            <p>- Lennart Bellemann</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[150px] mr-5 mt-1">
            <img src={TestimonialImg3} />
          </div>
          <div>
            <p className="pb-3 italic">
              "Travis doesn’t waste his time with failure. He doesn’t waste your
              time with empty promises. Travis delivers.”
            </p>
            <p>- Joe Shipley</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopTestimonials;
