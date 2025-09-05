"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CIRCLE_SIZE = 310;
const STROKE_WIDTH = 8;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Page = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Access user camera
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
          setScanning(true); // Start scanning automatically when camera is ready
        })
        .catch((err) => {
          // Handle error (camera denied)
        });
    }
    // Cleanup: stop camera on unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // Simulate face scanning and verification progress
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (scanning && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 500);
    }
    return () => clearInterval(timer);
    router.push("/quicksend/success");
  }, [scanning, progress]);

  useEffect(() => {
    if (progress === 100) {
      // Stop camera before redirecting
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
      setTimeout(() => {
        router.push("/quicksend/success?cameraStopped=1");
      }, 200);
    }
  }, [progress]);

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
      <main className="w-full flex flex-col items-center mt-6 mb-4">
        <div
          className="relative flex items-center justify-center"
          style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
        >
          {/* Progress border using SVG */}
          <svg
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
            className="absolute top-0 left-0"
          >
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              stroke="#e5e7eb"
              strokeWidth={STROKE_WIDTH}
              fill="none"
            />
            <circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              stroke="#22c55e"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={
                CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE
              }
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.5s linear",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          <div
            className={`w-[310px] h-[310px] rounded-full overflow-hidden bg-black flex items-center justify-center relative
            ${
              progress === 100
                ? "border-4 border-[#22c55e]"
                : "border-0 border-transparent"
            }
          `}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <div className="text-green-600 text-xl font-bold">{progress}%</div>
          <div className="text-lg font-manrope text-[#111827] font-semibold">
            Verifying
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
