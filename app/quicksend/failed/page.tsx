"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("cameraStopped") === "1") {
      // Stop all active video streams
      if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        navigator.mediaDevices.enumerateDevices().then((devices) => {
          devices.forEach((device) => {
            if (device.kind === "videoinput") {
              // Try to stop all video tracks
              navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                  stream.getTracks().forEach((track) => track.stop());
                })
                .catch(() => {});
            }
          });
        });
      }
    }
  }, [searchParams]);
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="h-16 w-16 text-center flex items-center justify-center rounded-full bg-[#FEE2E2]">
          <Image
            src="/images/failed.png"
            alt="success"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-manrope font-[500] text-[#111827]">
          Transfer Failed
        </h3>
        <p className=" text-md font-marope text-[#111827] font-[500] mt-1">
          Something went wrong while processing your transfer. Please try again
          or check your network connection.
        </p>
      </div>

      <div className="w-full mt-12 mb-4 px-1 gap-4 flex">
        <button className="w-1/2 bg-[#F3F4F6] text-[#111827] p-4  rounded-[30px] font-[500]">
          Contact support
        </button>
        <button className="w-1/2 bg-[#2E358F] cursor-pointer text-white p-4  rounded-[30px] font-[500]">
          Try again
        </button>
      </div>
    </div>
  );
};

export default Page;
