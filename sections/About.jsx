"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Lavish" textStyles="text-center"></TypingText>
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        {/* A luxury  */}a{" "}
        <span className="font-extrabold text-white">Lavish </span>gift can serve
        as a tangible reminder of your love and affection, making it a cherished
        keepsake for years to come. Additionally,{" "}
        <span className="font-extrabold text-white">luxury gifts </span>
        often come with a sense of{" "}
        <span className="font-extrabold text-white">exclusivity </span> and
        rarity, making them all the more and special
        <span className="font-extrabold text-white">meaningful</span>
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
