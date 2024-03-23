import { motion } from "framer-motion";
import React, { useState } from "react";

export interface TechBadgeProps {
  label: string;
  index: number;
  isHovered: boolean;
}

const TechBadge = ({ label, index, isHovered }: TechBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className=""
      style={{
        padding: "6px 12px",
        backgroundColor: "#8A2BE2",
        color: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#222",
        borderRadius: "4px",
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: ".75em",
        boxShadow: "1px 1px 0 rgba(0,0,0,.25)",
        margin: "2px",
        opacity: 0,
        position: "relative",
        textShadow:
          "-1px -1px 0 #3f3f3f, " +
          "-1px 0 0 #3f3f3f, " +
          "-1px 1px 0 #3f3f3f, " +
          "0 -1px 0 #3f3f3f, " +
          "0 0 0 #3f3f3f, " +
          "0 1px 0 #3f3f3f, " +
          "1px -1px 0 #3f3f3f, " +
          "1px 0 0 #3f3f3f, " +
          "1px 1px 0 #3f3f3f",
      }}
    >
      {label}
    </motion.div>
  );
};

export default TechBadge;
