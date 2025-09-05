import React from "react";
import QuickHeader from "@/components/QuickHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <QuickHeader />

      {/* ✅ Background Wrapper */}
      <div className="flex-1 flex items-start justify-center">
        {/* Background image with overlay */}
        <div
          className="mt-10 h-[580px] w-[569px] rounded-2xl overflow-hidden relative shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/attire-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 bg-white font-manrope rounded-xl shadow-lg w-[95%] max-w-[565px] p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
