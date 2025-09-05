"use client";
import Button from "@/components/Button";
import KarryPay_Logo from "@/components/KarryPay_Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { AppleIcon, CirclePlay } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import MotionImage from "@/components/Animation/MotionImage";

import AnimatedCards from "@/components/AnimatedCards";
import TestimonyCarousel from "@/components/TestimonyCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className="font-manrope w-full overflow-hidden">
      <header className="w-full p-4 flex items-center justify-between shadow-sm">
        {/* Left Section */}
        <div className="flex gap-2 items-center">
          <KarryPay_Logo />
        </div>

        {/* Right Section */}
        <div
          className={`flex items-center gap-2 ${
            theme === "dark" ? "text-[#FFFFFF]" : "text-[#111827]"
          } flex-shrink-0`}
        >
          <p className="hidden md:block  text-[14px] font-[600]">
            KarryPay for Business
          </p>

          <Button
            href="/quicksend"
            className="px-6 py-2 text-[16px] font-[500] rounded-3xl"
            text="QuickSend"
          />

          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:p-6 xl:p-12  2xl:p-16">
          <div className="flex flex-col md:ml-5">
            <h3 className="font-otomanopee text-[28px] sm:text-[44px] md:text-[30px] lg:text-[39px] xl:text-[44px] font-current-text text-start mt-5 px-3 font-[700]">
              Africa’s First <span className="text-[#2E358F]">Biometric</span>{" "}
              Payment System
            </h3>
            <div>
              <p className="font-manrope font-[500] text-[14px] md:text-[16px] xl:text-[18px]  font-current-text text-start mt-2  px-3">
                KarryPay lets you send, receive, and pay without even owning the
                device you’re using.
              </p>
            </div>
            <div className="p-3 mt-4 text-white flex  flex-col lg:flex-row gap-3">
              <Button
                className="w-full lg:w-1/3 px-2 py-3 lg:py-4 rounded-4xl"
                text="Get Started"
              />

              <button
                className={`w-full font-manrope lg:w-1/2 flex items-center justify-center gap-2 py-3 px-4 mt-3 
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
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src={
                theme === "dark"
                  ? "/images/Frame001-dark.svg"
                  : "/images/Frame001.svg"
              }
              alt="Description of image"
              className="rounded-3xl w-full sm:w-[600px] md:w-[320px] lg:w-[350px] xl:w-[380px]  2xl:w-[320px] 2xl:-mt-12 h-auto"
              width={500}
              height={100}
            />
          </div>
        </section>
        <section className="w-full flex justify-center items-center mt-8">
          <div
            className={`w-[95%] rounded-3xl py-5 grid grid-cols-1 justify-center items-center  md:grid-cols-2 gap-3 lg:p-6 xl:p-12  2xl:p-16 ${
              theme === "dark"
                ? "bg-[#333333] text-[#FFFFFF]"
                : "bg-[#F3F4F6] text-[#111827]"
            }
                  hover: transition-all duration-500`}
          >
            <div className="mt-4 p-3">
              <h4 className="font-[500] text-[20px] sm:text-[44px] md:text-[30px] lg:text-[39px] xl:text-[44px]">
                Your Money. Smarter, Faster.
              </h4>
              <p className="mt-2 font-[500] text-[14px]">
                KarryPay helps you send, receive, and manage money instantly
                with zero hassle — secure, seamless, and built for everyone.
              </p>
              <div className="mt-4">
                <Button className="w-50 py-3 px-4" text="Create Account" />
              </div>
            </div>
            <div className="mt-5 flex justify-center items-center">
              <MotionImage
                src={`${
                  theme === "dark"
                    ? "/images/Frame002-black.svg"
                    : "/images/Frame002.svg"
                }`}
                alt="Dashboard Snippet"
                className="rounded-3xl w-[400px] md:w-[320px] lg:w-[350px] xl:w-[380px]  2xl:w-[390px] 2xl:-mt-12 h-auto"
                width={400}
                height={300}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="mt-10 p-3 text-center">
            <h4 className="font-[600] text-[20px] lg:text-[39px] ">
              Everything You Need, All in One App
            </h4>
            <h6 className="mt-2 font-[500] text-[14px] lg:text-[16px] lg:-mt-1">
              Fast, simple, and secure tools built to power your financial
              lifestyle.
            </h6>
          </div>
          <div className="flex justify-center flex-col gap-3 items-center">
            <AnimatedCards />
          </div>
        </section>
        <section className="w-full mt-10 grid grid-cols-1 md:grid-cols-2  gap-3 lg:p-6 xl:p-12  2xl:p-16">
          <div className="mt-4 p-3 md:p-4 sm:text-center md:text-start">
            <h4 className="font-[500] text-[20px] sm:text-[28px] md:text-[30px]  xl:text-[32px]">
              Merchant Accounts Made for Growth
            </h4>
            <p className="mt-2 font-[500] text-[14px] md:text-[16px] xl:text-[18px]">
              Unlock powerful tools tailored for African businesses. Accept
              payments, track sales, and grow your brand with ease — all in one
              place.
            </p>
            <div className="mt-4">
              <Button
                className="w-60 py-3 px-4"
                text="Open a Merchant Account"
              />
            </div>
          </div>
          <div className=" w-full flex justify-center items-center -mt-6 xl:-mt-12">
            <MotionImage
              src="/images/Frame008.svg"
              alt="a map"
              className="sm:w-[420px] md:w-[360px] lg:w-[350px] xl:w-[380px]  2xl:w-[390px]"
              width={320}
              height={395}
            />
          </div>
        </section>
        <section>
          <div className="mt-10 p-3 text-center">
            <h4 className="font-[600] text-[20px]">What Our Users Say</h4>
            <h6 className="mt-2 font-[500] text-[14px]">
              Don’t just take our word for it — see how people are enjoying
              Karry.
            </h6>
          </div>
          <div className="w-full flex justify-center items-center">
            <TestimonyCarousel />
          </div>
        </section>
        <section className="w-full flex justify-center items-center">
          <div className="mt-2 p-3 text-center w-[95%] rounded-3xl py-5 grid grid-cols-1 justify-center items-center  md:grid-cols-2 gap-3 lg:p-6 xl:p-12  2xl:p-16">
            <div className="flex flex-col">
              <h4 className="font-[500] text-[20px]">Download Our App</h4>
              <p className="mt-2 font-[500] text-[14px] lg:text-[16px] xl:text-[18px]">
                Experience instant transfers, seamless payments, and secure
                savings, all in one app.
              </p>
              <div className="mt-4">
                <button
                  className={`w-full sm:w-[60%] md:w-[80%] xl:w-[60%] sm:ml-30 md:ml-0 xl:ml-25 font-manrope  flex items-center justify-center gap-2 py-3 px-4 mt-4 
                 rounded-3xl ${
                   theme === "dark"
                     ? "bg-[#2E358F] text-[#FFFFFF]"
                     : "bg-[#7c82E0] text-[#111827]"
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
            </div>
            <div className="mt-1">
              <MotionImage
                src="/images/Frame009.png"
                alt="a map"
                width={600}
                height={304}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
