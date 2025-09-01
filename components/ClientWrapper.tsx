"use client";

import { useEffect, useState } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-black">
        <span className="text-lg font-semibold text-gray-600 dark:text-gray-300 animate-pulse">
          Loading...
        </span>
      </div>
    );
  }

  return <>{children}</>;
}
