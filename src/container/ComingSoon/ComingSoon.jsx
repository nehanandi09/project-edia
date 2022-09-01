import React from "react";
import "./ComingSoon.scss";

import { ReactComponent as WhiteLogo } from "../../assets/whiteEdia.svg";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaTiktok } from "react-icons/fa";

import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="app__container">
      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__logo"
      >
        <div>
          <WhiteLogo className="logo" />
        </div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{
            delay: 1,
          }}
          className="app__comingSoon"
        >
          <h1>Coming Soon...</h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{
            delay: 1.25,
          }}
          className="media__icons"
        >
          <a
            href="https://www.instagram.com/ediastudios/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              transition={{
                duration: 0.25,
              }}
            >
              <BsInstagram className="media__icons-icon" />
            </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/company/edia-studios/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              transition={{
                duration: 0.25,
              }}
            >
              <FaLinkedin className="media__icons-icon" />
            </motion.div>
          </a>
          <a
            href="https://www.tiktok.com/@ediastudios?_t=8VKLxH43MYf&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              transition={{
                duration: 0.25,
              }}
            >
              <FaTiktok className="media__icons-icon" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
