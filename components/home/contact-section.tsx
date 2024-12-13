"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "@/lib/animations";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
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
            Contact Us
          </motion.h2>
          <motion.p
            variants={fadeIn("up")}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Get in touch with us for expert consultation and quotes
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={slideIn("left")}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" className="h-32" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="space-y-4"
          >
            {[
              { icon: Phone, title: "Phone", content: "+91 1234567890" },
              { icon: Mail, title: "Email", content: "info@stonepedia.in" },
              { icon: MapPin, title: "Address", content: "123 Stone Street, Mumbai, India" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("right")}
              >
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}