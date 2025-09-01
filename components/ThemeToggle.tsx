"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ✅ Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-8 h-8 rounded-full flex items-center justify-center
                 bg-[var(--color-lightbtn)] dark:bg-[var(--color-darkbtn)]
                 transition-colors shadow-lg overflow-hidden"
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 180 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* ☀️ Sun half */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-yellow-400 shadow-inner shadow-yellow-600" />
      </div>

      {/* 🌙 Moon half */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-100" />
      </div>

      {/* Divider line */}
      <div className="absolute w-1 h-full bg-white/40 dark:bg-black/30 rotate-0" />
    </motion.button>
  );
}
