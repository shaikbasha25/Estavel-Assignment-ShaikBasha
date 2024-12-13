"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import { FEATURED_PRODUCTS } from "@/lib/constants/products";
import { ProductCard } from "./product-card";

export function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn("up")}
            className="text-3xl font-bold mb-4"
          >
            Featured Products
          </motion.h2>
          <motion.p
            variants={fadeIn("up")}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our collection of premium natural stones sourced from the finest quarries worldwide
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}