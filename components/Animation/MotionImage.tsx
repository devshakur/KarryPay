"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MotionImage({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: false }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx("rounded-3xl", className)}
        priority
      />
    </motion.div>
  );
}
