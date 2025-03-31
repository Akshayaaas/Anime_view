"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { glowVariants } from "./motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <header className="bg-hero bg-center bg-cover bg-no-repeat py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16 relative min-h-[600px] md:min-h-[650px] lg:min-h-[500px] flex flex-col lg:flex-row">
        {/* Text content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 z-10">
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={76}
            className="object-contain"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[120%] max-w-full lg:max-w-lg">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
       
        {/* Image with absolute positioning */}
        <div className="lg:flex-1 w-full lg:w-1/2 absolute right-0 bottom-0 lg:relative h-[300px] md:h-[350px] lg:h-[450px]">
          <motion.div
            className="relative w-full h-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05
            }}
          >        
            <Image 
              src="/anime.png" 
              alt="anime" 
              fill 
              className="object-contain" 
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
}

export default Hero;
