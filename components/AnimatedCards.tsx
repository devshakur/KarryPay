"use client";
import { motion } from "framer-motion";
import Card from "./Cards";
import Card2 from "./Cards2";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.3, ease: "easeOut" },
  }),
};

export default function AnimatedCards() {
  const cards = [
    {
      component: Card,
      props: {
        image: "/images/Frame003.png",
        alt: "scanner",
        title: "QuickSend",
        imageHeight: 162,
        description:
          "Send money to friends and family in seconds without need of your own phone.",
      },
    },
    {
      component: Card2,
      props: {
        image: "/images/Frame004.png",
        alt: "Instant transfer image",
        title: "Instant Transfers",
        imageHeight: 210,
        description: "Transfer across banks instantly — no delays, no worries.",
      },
    },
    {
      component: Card,
      props: {
        image: "/images/Frame005.png",
        alt: "Karrysave image",
        title: "KarrySave",
        imageHeight: 162,
        description: "Save smartly and grow your money with ease.",
      },
    },
    {
      component: Card2,
      props: {
        image: "/images/Frame007.png",
        alt: "Karrypay virtual card",
        title: "KarryCards",
        imageHeight: 192,
        description: "Get virtual cards for safe, easy payments.",
      },
    },
    {
      component: Card2,
      props: {
        image: "/images/Frame006.png",
        alt: "utilities payment image",
        title: "Bills Payments",
        imageHeight: 172,
        description:
          "Pay airtime, data, electricity, and more — all in one tap.",
      },
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center">
      {/* Row 1 → 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl items-stretch">
        {cards.slice(0, 2).map(({ component: Component, props }, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i}
            className="flex justify-center"
          >
            <Component {...props} />
          </motion.div>
        ))}
      </div>

      {/* Row 2 → 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl items-stretch">
        {cards.slice(2).map(({ component: Component, props }, i) => (
          <motion.div
            key={i + 2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={i + 2}
            className="flex justify-center"
          >
            <Component {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
