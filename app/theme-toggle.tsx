"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5 text-cyan-300" />
        ) : (
          <Sun className="h-5 w-5 text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
