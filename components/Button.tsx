import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, href, onClick }) => {
  const baseClasses = clsx(
    "rounded-3xl transition-all duration-300",
    "bg-[var(--color-lightbtn)] dark:bg-[var(--color-darkbtn)]",
    className
  );

  // ✅ If href is provided, render a Next.js Link (client-side navigation)
  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {text}
      </Link>
    );
  }

  // ✅ Otherwise, render a normal button
  return (
    <button onClick={onClick} className={baseClasses}>
      {text}
    </button>
  );
};

export default Button;
