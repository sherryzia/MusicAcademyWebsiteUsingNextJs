"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The instructors at this academy have truly changed my musical journey. I never thought I could learn so much in such a short time!",
    name: "Sarah Johnson",
    title: "Aspiring Pianist",
  },
  {
    quote:
      "Thanks to this academy, I found my passion for jazz improvisation. The lessons are top-notch, and the community is incredibly supportive.",
    name: "Mark Daniels",
    title: "Jazz Enthusiast",
  },
  {
    quote:
      "I have taken several courses here, and each one exceeded my expectations. The instructors are highly skilled and always willing to help.",
    name: "Emily Thompson",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "This music academy provided me with the tools I needed to turn my passion for guitar into a professional skillset. Highly recommended!",
    name: "James Lee",
    title: "Guitarist",
  },
  {
    quote:
      "The music theory course gave me the foundation I needed to understand composition. The insights I gained have been invaluable.",
    name: "Olivia Martinez",
    title: "Music Producer",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-slate-950 flex flex-col justify-center ">
      <h2 className="text-6xl font-bold mb-10 text-black dark:text-white text-center ">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default TestimonialCards;
