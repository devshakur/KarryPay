"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const proceedToVerify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/quicksend/verification");
  };

  return (
    <div className=" font-manrope">
      <header className="flex items-center justify-center font-manrope">
        <Image
          src="/images/karrypay-logo.png"
          alt="QuickSend Icon"
          width={40}
          height={40}
          className=""
        />
        <h1 className="text-2xl font-[500] text-[#374151] text-center">
          Summary
        </h1>
      </header>
      <div className="mt-6 mb-4">
        <p className="text-2xl font-[600] text-[#374151] text-center">
          ₦1,000.00
        </p>
      </div>
      <div className="w-full flex justify-between items-center mt-6 mb-4">
        <div className="w-1/2 flex items-start">
          <Image
            src="/images/karrypay-logo.png"
            alt="QuickSend Icon"
            width={40}
            height={40}
            className=""
          />
          <div className="flex flex-col ml-3 items-start">
            <p className="text-[14px] sm:text-[16px] font-[500] text-[#111827] text-center">
              Abdullahi Musa
            </p>
            <p className="text-[16px] font-[500] text-[#111827] text-center">
              Access Bank
            </p>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl text-[#374151]">1475840311</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6 mb-4">
        <div>
          <p className="font-[14px] text-xl text-[#6B7280]">Amount</p>
        </div>
        <div>
          <p className="font-bold text-xl text-[#374151]">₦100.00</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6 mb-4">
        <div>
          <p className="font-[14px] text-xl text-[#6B7280]">Fee</p>
        </div>
        <div>
          <p className="font-bold text-xl text-[#374151]">0.00</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6 mb-4">
        <div className="w-1/2 flex items-start">
          <Image
            src="/images/karrypay-logo.png"
            alt="QuickSend Icon"
            width={40}
            height={40}
            className=""
          />
          <div className="flex flex-col ml-3 items-start">
            <p className="text-[14px] sm:text-[16px] font-[500] mt-3 text-[#6B7280] text-center">
              Wallet Balance
            </p>
          </div>
        </div>
        <div>
          <p className="fonr-bold text-xl text-[#374151]">₦1,580.29</p>
        </div>
      </div>
      <div className="w-full mt-6 mb-4 px-1 gap-4 flex">
        <button className="w-1/2 bg-[#F3F4F6] text-[#111827] p-4  rounded-[30px] font-[500]">
          Back
        </button>
        <button
          onClick={proceedToVerify}
          className="w-1/2 bg-[#2E358F] cursor-pointer text-white p-4  rounded-[30px] font-[500]"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default Page;
