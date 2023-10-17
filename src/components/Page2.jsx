"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from 'react-intersection-observer'; // Import the useInView hook

export const Page2 = () => {
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

  const [ref, inView] = useInView({ triggerOnce: true }); // Initialize the useInView hook

  return (
    <div className="max-w-3xl m-auto svg-bg-2 bg-center bg-no-repeat h-screen p-4 text-center font-color font-bell">
      <motion.div variants={container} initial="hidden" animate="show" ref={ref}>
        <motion.div variants={item} className="mt-8 font-semibold">
          <p>THE WEEDDING OF </p>
        </motion.div>
        <motion.div variants={item} className="mt-[26rem] text-7xl font-extrabold">
          <h1 className="">AYU</h1>
          <h1 className="text-2xl">&#183;&#183;&#183; & &#183;&#183;&#183;</h1>
          <h1 className="">RIFQI</h1>
        </motion.div>
        <motion.div variants={item} className="mt-2 text-sm font-extrabold">
          <p>Sunday, 18 November 2023</p>
        </motion.div>
        <div className="image-center mt-2">
          <Image
            src="/chevron.svg"
            alt="Your SVG Image"
            width={30}
            height={30}
            className={`animate-bounce ${inView ? 'text-red-700' : ''}`}
          />
        </div>
      </motion.div>
    </div>
  );
};