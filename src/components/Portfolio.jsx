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
import Template from "../posts/000-TEMPLATE";
import PowerForPride from "../posts/Power-For-Pride";

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
    <div name="work" className="container lg:w-[1300px] mx-auto lg:py-16">
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
          {modalData.page === "000-TEMPLATE" ? <Template /> : ""}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
