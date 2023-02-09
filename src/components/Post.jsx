import { motion } from "framer-motion";

function PortItem({ post, setModalData, setIsModalOpened }) {
  const tags = post.tags;
  const excerptLength = post.excerpt.length;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="post-box p-5 text-white break-inside"
    >
      <img
        alt={post.company}
        className="float-left m-1 w-9 h-9 rounded-full border-white cursor-pointer"
        src={post.companyImg}
        onClick={() => {
          setModalData(post);
          setIsModalOpened(true);
        }}
      />
      <h4
        className="mb-1 h-[45px] pl-[50px] pt-[9px] cursor-pointer"
        onClick={() => {
          setModalData(post);
          setIsModalOpened(true);
        }}
      >
        {post.company}
      </h4>
      <div
        className={"cursor-pointer " + (excerptLength > 0 ? "shadow-lg" : "")}
        onClick={() => {
          setModalData(post);
          setIsModalOpened(true);
        }}
      >
        <div className={excerptLength < 0 ? "shadow-lg" : ""}>
          {post.itemImg.includes(".mp4") ? (
            <div>
              <video
                className={
                  "cover " +
                  (excerptLength > 0 ? "rounded-t-[7px]" : "rounded-[7px]")
                }
                src={post.itemImg}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                height=""
                width=""
                alt=""
              ></video>
            </div>
          ) : (
            <img
              className={
                excerptLength > 0 ? "rounded-t-[7px]" : "rounded-[7px]"
              }
              alt={post.header}
              src={post.itemImg}
            />
          )}
        </div>

        <div className={excerptLength > 0 ? "excerpt-box" : ""}>
          <h2
            className="text-[25px] mt-[15px] cursor-pointer leading-8"
            onClick={() => {
              setModalData(post);
              setIsModalOpened(true);
            }}
          >
            {post.header}
          </h2>
          <div className="mt-1 flex flex-wrap">
            {tags.map((value, index) => {
              return (
                <span
                  className="mr-2 text-[.8em] text-[#8581a0] after:content-[','] last:after:content-['']"
                  key={index}
                >
                  {value}
                </span>
              );
            })}
          </div>
          <p className="mt-3 text-[14px] text-[#b4afcd]">{post.excerpt}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default PortItem;
