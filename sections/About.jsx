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
        {/* A luxury  */}
        <span className="font-extrabold text-white">Lavish </span> specializes
        in creating the perfect gift through a{" "}
        <span className="font-extrabold text-white">
          luxurious private websites
        </span>{" "}
        embeded with the{" "}
        <span className="font-extrabold text-white">memories</span> of you, and
        your partner together, Upon accessing the exclusive website link
        provided to your significant other, they will be greeted with opulent{" "}
        <span className="font-extrabold text-white">animations </span>
        and a selection of{" "}
        <span className="font-extrabold text-white">choices </span>
        pertaining to your collective memories, presented in a{" "}
        <span className="font-extrabold text-white">gamified format.</span> Each
        astute choice made will lead them to the subsequent level, culminating
        in an{" "}
        <span className="font-extrabold text-white">ultimate message </span> at
        the culmination of the maze
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
