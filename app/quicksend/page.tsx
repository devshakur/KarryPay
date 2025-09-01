"use client";
import QuickHeader from "@/components/QuickHeader";
import React from "react";
import Image from "next/image";
import { Layers2 } from "lucide-react";
import Button from "@/components/Button";
import { useTheme } from "next-themes";
const Page = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col">
      <QuickHeader />

      {/* ✅ Background Wrapper */}
      <div className="flex-1 flex  items-start justify-center">
        {/* Background image with overlay */}
        <div
          className="mt-10 h-[600px] w-[569px] rounded-2xl overflow-hidden relative shadow-lg flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/attire-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          {/* ✅ Form Card */}
          <div className="relative z-10 bg-white font-manrope rounded-xl shadow-lg w-[95%] max-w-[565px] p-6">
            {/* Header */}
            <header className="flex items-center justify-center font-manrope">
              <Image
                src="/images/Karrypay-logo.png"
                alt="QuickSend Icon"
                width={40}
                height={40}
                className=""
              />
              <h1 className="text-2xl font-[500] text-[#374151] text-center">
                QuickSend
              </h1>
            </header>
            <div className="">
              <p className="text-[#2E358F] flex py-2 pl-3 gap-1 rounded-lg bg-[#F5F6FD] font-[500] text-[12px] my-4">
                <Layers2 />
                Transfer up to ₦50,000 using any device. Just verify with your
                face or fingerprint, and youre done.
              </p>
            </div>

            {/* Form */}
            <form
              className={`space-y-4 ${
                theme == "dark" ? "text-black" : "text-gray-800"
              }`}
            >
              {/* Recipient account */}
              <label htmlFor="recipient-account" className="sr-only">
                Recipient Account Number
              </label>
              <input
                type="text"
                placeholder="Recipient Account Number"
                className="w-full font-current-text  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none"
              />

              {/* Bank name dropdown */}
              <select className="w-full font-current-text  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none">
                <option>Select Bank</option>
                <option>First Bank</option>
                <option>GTBank</option>
                <option>Zenith Bank</option>
              </select>

              {/* Account name */}
              <input
                type="text"
                placeholder="Account Name"
                className="w-full  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none"
              />

              {/* Amount + Currency */}
              <div className="flex gap-2">
                <select className="w-[100px]  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none">
                  <option>NGN</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
                <input
                  type="number"
                  placeholder="Amount"
                  className="flex-1  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none"
                />
              </div>

              {/* Description */}
              <textarea
                placeholder="Write short description"
                className="w-full  bg-[#F3F4F6] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-gray-100 outline-none"
                rows={3}
              />

              {/* Button */}
              <Button text="QuickSend" className="w-full py-2.5 text-white" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
