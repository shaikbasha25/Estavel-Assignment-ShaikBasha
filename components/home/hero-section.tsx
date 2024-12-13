"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import { STONE_IMAGES } from "@/lib/constants/images";

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={STONE_IMAGES.HERO_BG}
          alt="Natural Stone Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="relative z-10 text-center text-white px-4"
      >
        <motion.h1
          variants={fadeIn("up")}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Discover the Beauty of Natural Stones
        </motion.h1>
        <motion.p
          variants={fadeIn("up")}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Premium quality marble, granite, and natural stones for your dream spaces
        </motion.p>
        <motion.div
          variants={fadeIn("up")}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            View Products <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Get a Quote
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}