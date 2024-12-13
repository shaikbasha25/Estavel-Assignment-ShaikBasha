"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Truck, ThumbsUp, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-picked stones from the finest quarries worldwide",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Safe and timely delivery across India",
  },
  {
    icon: ThumbsUp,
    title: "Expert Guidance",
    description: "Professional consultation for the perfect stone selection",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Committed to exceeding your expectations",
  },
];

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 px-4">
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
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up")}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experience excellence in natural stone solutions with our premium services
          </motion.p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              custom={index}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}