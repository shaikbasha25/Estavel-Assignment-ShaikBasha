"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useInView } from "react-intersection-observer";

const products = [
  {
    id: 1,
    name: "Italian Marble",
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd",
    category: "Marble",
  },
  {
    id: 2,
    name: "Black Galaxy Granite",
    image: "https://images.unsplash.com/photo-1597427666634-2c71f4118cea",
    category: "Granite",
  },
  {
    id: 3,
    name: "Onyx Stone",
    image: "https://images.unsplash.com/photo-1597427666199-0f49c3356dd0",
    category: "Natural Stone",
  },
  {
    id: 4,
    name: "Travertine",
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd",
    category: "Natural Stone",
  },
];

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeIn("up")}
              custom={index}
            >
              <Link href={`/products/${product.id}`}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <h3 className="text-lg font-semibold mt-1">{product.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}