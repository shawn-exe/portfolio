"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    icon: React.ElementType;
    socialLink: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="flex items-center gap-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            className="relative"
            key={item.id}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              marginLeft: hoveredIndex === item.id ? "1rem" : "-1rem",
              marginRight: hoveredIndex === item.id ? "1rem" : "-1rem",
              scale: hoveredIndex === item.id ? 1.1 : 1,
              zIndex: hoveredIndex === item.id ? 10 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <div
              onClick={() => handleClick(item.socialLink)}
              className="cursor-pointer rounded-full p-3 bg-white/10 backdrop-blur-sm  transition duration-500"
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
