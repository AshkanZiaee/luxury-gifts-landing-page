"use client";

import { motion } from "framer-motion";

import styles from "../styles";

import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 w-[100vw] absolute left-0" />
        <div className="flex items-center justify-between flex-wrap gap-4 mt-[1rem]">
          <h4 className="font-extrabold text-[24px] text-white ">Lavish</h4>
          <p className="font-normal text-[14px] text-white opacity-50 text-center ">
            Copyright © 2023 Lavish. All rights reserved.
          </p>
          {/* <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
