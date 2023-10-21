"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook

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
    <div className="relative w-full bg-image-2 bg-cover bg-center h-screen text-center font-color font-bell">
      <motion.div variants={container} initial="hidden" animate="show" ref={ref} className="h-full flex flex-col justify-center items-center">
        <motion.div variants={item} className="absolute top-4 text-center">
          <p>THE WEDDING OF </p>
        </motion.div>
        <motion.div variants={item} className="text-7xl font-extrabold mt-[30rem]">
          <h1 className="">AYU</h1>
          <h1 className="text-2xl">&#183;&#183;&#183; & &#183;&#183;&#183;</h1>
          <h1 className="">RIFQI</h1>
        </motion.div>
        <motion.div variants={item} className=" text-sm font-extrabold mt-8">
          <p>Sunday, 19 November 2023</p>
        </motion.div>
        {/* <div className="image-center mt-8">
          <Image src="/chevron.svg" alt="Your SVG Image" width={30} height={30} className={`animate-bounce ${inView ? "text-red-700" : ""}`} />
        </div> */}
      </motion.div>
    </div>
  );
};
