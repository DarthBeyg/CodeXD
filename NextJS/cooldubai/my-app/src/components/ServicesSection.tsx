"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { title: "AC Sales", icon: "/sale-icon.svg" },
  { title: "Installation", icon: "/install-icon.svg" },
  { title: "Maintenance", icon: "/maintenance-icon.svg" },
  { title: "AC Buyback", icon: "/buyback-icon.svg" },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-100/50 to-white relative">
      <div className="absolute inset-0 bg-[url('/cool-pattern.svg')] opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-cyan-950"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 group hover:bg-gradient-to-b hover:from-white hover:to-cyan-50"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-2 text-cyan-900">{service.title}</h3>
              <p className="text-cyan-700">Professional {service.title.toLowerCase()} services with expert technicians.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
