"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeUp({
  children,
  delay = 0,
  duration = 1,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
}
