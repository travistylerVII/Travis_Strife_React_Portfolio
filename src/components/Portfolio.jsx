import React, { useEffect } from "react";
import PortData from "../PortData.json";
import { useState } from "react";
import Post from "./Post";
import Filter from "./Filter";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import RealyToTheRescue from "../posts/RealyToTheRescue";
import DeliciousLPTheme from "../posts/DeliciousLPTheme";
import TLAWebsite from "../posts/TLAWebsite";
import PowerForPride from "../posts/Power-For-Pride";
import NestlePurina from "../posts/NestlePurina";
import Logistick from "../posts/Logistick";
import BrandingCoachLP from "../posts/BrandingCoachLP";
import CoachGuruLP from "../posts/CoachGuruLP";
import FitnessFunnel from "../posts/FitnessFunnel";
import BlackMageLogo from "../posts/BlackMageLogo";
import GolfTroop from "../posts/GolfTroop";
import MyPortfolio from "../posts/MyPortfolio";
import ReactMasonryGrid from "../posts/ReactMasonryGrid";
import LeadmagnetFunnel from "../posts/LeadmagnetFunnel";
import REFacebookAdFunnel from "../posts/REFacebookAdFunnel";
import WhiteRabbitExpress from "../posts/WhiteRabbitExpress";
import YogaLandingPage from "../posts/YogaLandingPage";

const Portfolio = (props) => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalData, setModalData] = useState(0);

  useEffect(() => {
    if (isModalOpened === true) {
      props.setValue(true);
      document.body.classList.add("disable-scroll");
    } else {
      props.setValue(false);
      document.body.classList.remove("disable-scroll");
    }
  }, [isModalOpened, props]);

  useEffect(() => {
    const data = PortData;
    setPosts(data);
    setFiltered(data);
  }, []);

  return (
    <div name="work" className="container lg:w-[1300px] mx-auto lg:pb-16">
      <Filter
        posts={posts}
        setFiltered={setFiltered}
        setActiveCat={setActiveCat}
        activeCat={activeCat}
      />
      <div className="portfolio-items lg:container lg:masonry-3-col md:masonry-2-col mx-auto">
        <AnimatePresence>
          {filtered.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                posts={posts}
                setIsModalOpened={setIsModalOpened}
                setModalData={setModalData}
              />
            );
          })}
        </AnimatePresence>

        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
          {modalData.page === "RealyToTheRescue" ? <RealyToTheRescue /> : ""}
          {modalData.page === "DeliciousLPTheme" ? <DeliciousLPTheme /> : ""}
          {modalData.page === "TLAWebsite" ? <TLAWebsite /> : ""}
          {modalData.page === "PowerForPride" ? <PowerForPride /> : ""}
          {modalData.page === "NestlePurina" ? <NestlePurina /> : ""}
          {modalData.page === "Logistick" ? <Logistick /> : ""}
          {modalData.page === "YogaLandingPage" ? <YogaLandingPage /> : ""}
          {modalData.page === "BlackMageLogo" ? <BlackMageLogo /> : ""}
          {modalData.page === "MyPortfolio" ? <MyPortfolio /> : ""}
          {modalData.page === "BrandingCoachLP" ? <BrandingCoachLP /> : ""}
          {modalData.page === "CoachGuruLP" ? <CoachGuruLP /> : ""}
          {modalData.page === "FitnessFunnel" ? <FitnessFunnel /> : ""}
          {modalData.page === "ReactMasonryGrid" ? <ReactMasonryGrid /> : ""}
          {modalData.page === "GolfTroop" ? <GolfTroop /> : ""}
          {modalData.page === "LeadmagnetFunnel" ? <LeadmagnetFunnel /> : ""}
          {modalData.page === "REFacebookAdFunnel" ? (
            <REFacebookAdFunnel />
          ) : (
            ""
          )}
          {modalData.page === "WhiteRabbitExpress" ? (
            <WhiteRabbitExpress />
          ) : (
            ""
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
