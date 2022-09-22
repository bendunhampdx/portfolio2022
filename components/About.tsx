import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='/images/ben3.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-65 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#ftab0a]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni animi
          rerum reiciendis officia porro voluptatibus eum enim aliquid dolor
          esse repudiandae vitae cum ipsa repellat, obcaecati accusantium quidem
          quis repellendus libero, ab possimus eius consequatur illum assumenda?
          Aut fugit at maiores, sequi modi dolorem adipisci voluptatum laborum
          labore ipsum quos, laudantium, cum veritatis nulla. Deleniti harum
          quaerat sequi atque dicta, et voluptates perspiciatis, ad sint odio
          qui quo autem obcaecati laborum aliquid. Vel dolorem architecto
          accusamus itaque magni rem, libero atque praesentium alias, est, harum
          ipsam earum dolorum tempore nisi? Molestias quisquam esse explicabo
          enim, voluptate nobis neque modi reprehenderit.
        </p>
      </div>
    </motion.div>
  );
}
