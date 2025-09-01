"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TestimonyCard from "./TestimonyCard";

const testimonies = [
  {
    text: "Since I started using KarryPay, receiving payments from my customers has been seamless. I don’t worry about delays anymore — the instant transfers have completely changed the way I run my small tailoring business.",
    name: "Mr Victor Okafor",
    title: "Founder of Digital Agency",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "As a student, I used to struggle with tracking my daily expenses. With KarryCards and bills payment, I can now pay for my internet, electricity, and even subscriptions without stress. It’s safe, reliable, and always works — even when my bank app is down.",
    name: "Ada Johnson",
    title: "Fashion Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "KarryPay gave my online store a big boost. With the merchant account, I can accept payments from anywhere in Africa. The dashboard helps me track every sale, and I can withdraw instantly. Honestly, it’s the best business partner I could ask for.!",
    name: "Tunde Ade",
    title: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    text: "Bills payment is now just one click away. Super convenient! KarryPay has made savings effortless. I love the KarrySave feature, it helps me put money aside without even realizing it!",
    name: "Chidera Umeh",
    title: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: "Using KarryPay has made managing money stress-free. Transfers are instant and I never worry about delays.",
    name: "Zainab Musa",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const TestimonyCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3, // md: ≥768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4, // lg: ≥1024px
            spaceBetween: 24,
          },
        }}
        className="w-full"
      >
        {testimonies.map((t, index) => (
          <SwiperSlide key={index}>
            <TestimonyCard
              text={t.text}
              name={t.name}
              title={t.title}
              image={t.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonyCarousel;
