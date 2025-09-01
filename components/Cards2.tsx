"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

const Card2: React.FC<CardProps> = ({
  image,
  title,
  alt,
  description,
  imageHeight,
  imageWidth = 285,
  className = "",
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-[90%] min-h-[260px] sm:min-h-[280px] lg:min-h-[300px] xl:min-h-[280px] 
                  max-w-[584px] text-center p-3 rounded-3xl transition-colors flex flex-col 
                  ${
                    theme === "dark" ? "bg-[#2A2A2A]" : "bg-[#F9FAFB]"
                  } ${className}`}
    >
      {/* Image */}
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={alt}
          className="rounded-md"
          width={imageWidth}
          height={imageHeight}
        />
      </div>

      {/* Text */}
      <div className="text-start px-4 flex-1">
        <h4 className="font-[600] text-[20px]">{title}</h4>
        <h6 className="mt-1 font-medium text-[14px]">{description}</h6>
      </div>
    </div>
  );
};

export default Card2;
