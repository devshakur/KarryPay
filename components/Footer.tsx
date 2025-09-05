import React from "react";
import KarryPay_Logo from "./KarryPay_Logo";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-[100%] mx-auto py-2 px-6
        ${
          theme === "dark"
            ? "bg-[#2A2A2A] text-white"
            : "bg-[#F3F4F6] text-[#111827]"
        }`}
    >
      {/* Main Footer Container */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + Socials */}
        <div>
          <KarryPay_Logo />
          <div className="flex gap-4 mt-4 mb-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>Quicksave</li>
            <li>Karrypay for Business</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: support@karrypay.com</li>
          </ul>
        </div>

        {/* Legals */}
        <div>
          <h4 className="font-semibold mb-3">Legals</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>
              <a
                href="/Karrypay-privacy_policy.pdf"
                download="Privacy-Guide.pdf"
                className="inline-block px-5 py-3 bg-[#2E358F] text-white rounded-3xl text-sm shadow hover:bg-blue-700 transition"
              >
                Download Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold mb-3">Locations</h4>
          <ul className="space-y-2 text-sm">
            <li>24, Ahmadu Bello way, Kano</li>
          </ul>
        </div>
      </div>
      <p
        className={`hidden md:block w-full border mt-4 ${
          theme === "dark" ? "border-[#444444]" : "border-[#e6e9ef]"
        }`}
      ></p>
      <div className="text-center mt-4">
        <p className="text-sm font-[500]">
          © 2025 Karrypay Technologies, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
