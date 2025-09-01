import React from "react";
import Image from "next/image";

const KarryPay_Logo = () => {
  return (
    <div className="flex gap-[.5]  font-manrope font-[600] items-center">
      <Image
        src="/images/karrypay-logo.png"
        alt="KarryPay Logo"
        width={40.19}
        height={40.19}
      />
      <span className="text-lg text-current-logo font-[600]">KarryPay</span>
    </div>
  );
};

export default KarryPay_Logo;
