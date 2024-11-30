"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Villa Owner",
    text: "Best AC service I've ever experienced! They installed my new system quickly and efficiently. The team was professional and courteous.",
    rating: 5
  },
  {
    name: "Sarah Khan",
    role: "Business Owner",
    text: "Their maintenance service is outstanding. They've been maintaining our office AC systems for years, and we've never had any issues.",
    rating: 5
  },
  {
    name: "Mohammed Ali",
    role: "Property Manager",
    text: "Excellent buyback program! They gave me a great deal on my old units when I upgraded to new ones. Very satisfied with their service.",
    rating: 5
  },
  {
    name: "Fatima Rahman",
    role: "Homeowner",
    text: "The team is very knowledgeable and professional. They helped me choose the perfect AC system for my home. Highly recommended!",
    rating: 5
  },
  {
    name: "Omar Sheikh",
    role: "Restaurant Owner",
    text: "Their 24/7 support is amazing! They responded quickly when our AC had issues and fixed it right away. Great service!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white relative">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-5"></div>
      <div className="relative">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-cyan-950"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative h-[400px] overflow-hidden">
          <div 
            className={`flex gap-10 absolute animate-scroll ${isPaused ? 'animate-pause' : ''}`}
            style={{ width: "200%" }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-[380px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-cyan-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-cyan-900">{testimonial.name}</h3>
                    <p className="text-cyan-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-cyan-700 mb-4">{testimonial.text}</p>
                <div className="flex text-cyan-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
            {/* Duplicate set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-[380px] flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-cyan-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-cyan-900">{testimonial.name}</h3>
                    <p className="text-cyan-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-cyan-700 mb-4">{testimonial.text}</p>
                <div className="flex text-cyan-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
