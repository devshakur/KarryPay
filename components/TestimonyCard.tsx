"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Quote } from "lucide-react";

interface TestimonyCardProps {
  text: string;
  name: string;
  title: string;
  image: string;
}

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  text,
  name,
  title,
  image,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-[95%] md:min-h-[379px] max-w-[584px] text-start p-6 mx-3 rounded-3xl transition-colors flex flex-col justify-between
        ${theme === "dark" ? "bg-[#2A2A2A]" : "bg-[#F9FAFB]"}`}
    >
      {/* Top Section: Quotes + Text */}
      <div>
        {/* Opening Quote */}
        <div className="w-full flex justify-start">
          <Quote className="w-8 h-8 mb-4" />
        </div>

        {/* Testimony Text */}
        <p className="text-sm leading-relaxed">{text}</p>

        {/* Closing Quote */}
        <div className="w-full flex justify-end">
          <Quote className="w-8 h-8 mt-4" />
        </div>
      </div>

      {/* Bottom Section: Image + Name + Title */}
      <div className="mt-6 flex items-center">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-2 text-left flex flex-col">
          <p className="font-semibold text-base">{name}</p>
          <p className="text-sm text-gray-500 text-[14px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
