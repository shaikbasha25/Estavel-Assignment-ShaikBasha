"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  index: number;
}

export function ProductCard({ id, name, image, category, description, index }: ProductCardProps) {
  return (
    <motion.div
      variants={fadeIn("up")}
      custom={index}
    >
      <Link href={`/products/${id}`}>
        <Card className="hover:shadow-lg transition-shadow group">
          <CardContent className="p-0">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-sm text-gray-500">{category}</span>
              <h3 className="text-lg font-semibold mt-1">{name}</h3>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}