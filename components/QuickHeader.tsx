"use client";
import React from "react";
import KarryPay_Logo from "./KarryPay_Logo";
import { useTheme } from "next-themes";
import { AppleIcon, CirclePlay } from "lucide-react";

const QuickHeader = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full p-4 flex items-center justify-between shadow-sm">
      <KarryPay_Logo />
      <button
        className={`w-[220px] font-manrope md:w-[260px] flex items-center justify-center gap-3 py-3 px-4 mt-2
                 rounded-3xl ${
                   theme === "dark"
                     ? "bg-[#333333] text-[#FFFFFF]"
                     : "bg-[#F3F4F6] text-[#111827]"
                 }
                  hover:scale-105 transition-all duration-500`}
      >
        <AppleIcon className="w-5 h-5" />

        {/* Divider */}
        <span className="h-5 w-px bg-[#D1D5DB] dark:bg-gray-600"></span>

        <CirclePlay className="w-5 h-5" />
        <span className="font-medium">Download App</span>
      </button>
    </div>
  );
};

export default QuickHeader;
