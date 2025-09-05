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
      <header className="flex items-center justify-center font-manrope">
        <Image
          src="/images/karrypay-logo.png"
          alt="QuickSend Icon"
          width={40}
          height={40}
          className=""
        />
        <h1 className="text-2xl font-[500] text-[#374151] text-center">
          Biometric verification
        </h1>
      </header>
      <main className="w-full flex justify-center flex-col gap-3 items-center">
        <div
          className="mt-10 h-[250px] w-[250px] rounded-full overflow-hidden relative  flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/fingerprint.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
        </div>
        <div className="mt-6 text-center">
          <div className="text-gray-600 text-2xl font-bold">0%</div>
          <div className="text-lg font-manrope text-[#111827] font-semibold">
            Verifying
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
