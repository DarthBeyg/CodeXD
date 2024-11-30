"use client";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-100/50 to-white py-20 relative">
      <div className="absolute inset-0 bg-[url('/frost-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-cyan-950">Ready to Get Started?</h2>
          <p className="text-cyan-800 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
