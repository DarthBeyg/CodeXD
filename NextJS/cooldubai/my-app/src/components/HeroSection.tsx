"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-cyan-950">
            Your Comfort, <br/>
            Our Priority
          </h1>
          <p className="text-xl text-cyan-800">
            Professional AC solutions just outside Dubai. Sales, installation, and maintenance services.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started
          </motion.button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src="/hero-ac.svg"
            alt="AC Service Illustration"
            width={600}
            height={400}
            className="w-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
