"use client";
import { motion } from "framer-motion";

const features = [
  { title: "24/7 Support", description: "Round-the-clock customer service" },
  { title: "Certified Experts", description: "Highly trained professional technicians" },
  { title: "Best Prices", description: "Competitive rates in the market" },
];

export const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-blue-50 via-transparent to-cyan-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-cyan-950">Why Choose Us</h2>
        <p className="text-cyan-800">Experience the best in AC services with our expert team</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-cyan-900">{feature.title}</h3>
            <p className="text-cyan-700">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
