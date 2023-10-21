"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const Page3 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="w-full bg-image-3 bg-cover bg-center py-24 h-screen text-center font-color font-bell progress-bar">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={item}>
          <p>In the Name of Allah Subhaanahu wa ta’ala</p>
          <p>the most beneficient and the most merciful,</p>
          <p>we are pleased to share joy at the wedding us</p>
        </motion.div>
        <motion.div variants={item} className="font-extrabold text-4xl">
          <p>Sendy Ayu</p>
          <p>Aulia, S.H.</p>
        </motion.div>
        <motion.div variants={item} className=" leading-5 text-sm">
          <p>Daughter of</p>
          <p>Mr. Radisun Gatot Prianto</p>
          <p>Mrs. Yanti Ardiani</p>
        </motion.div>
        <motion.div variants={item} className=" text-9xl font-extrabold">
          <p>&</p>
        </motion.div>
        <motion.div variants={item} className="font-extrabold text-4xl">
          <p>Rifqi Ahmad</p>
          <p>Naufal, S.Ds.</p>
        </motion.div>
        <motion.div variants={item} className="leading-5 text-sm">
          <p>Son of</p>
          <p>Mr. Ismail Marzuki</p>
          <p>Mrs. Eka Windiya</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
