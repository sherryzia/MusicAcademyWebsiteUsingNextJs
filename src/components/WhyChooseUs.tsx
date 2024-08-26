"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Interactive Lessons",
      description:
        "Engage in dynamic, interactive lessons with our expert instructors. Whether you're a beginner or an advanced musician, our platform offers personalized lessons that adapt to your skill level and learning pace. Collaborate with your peers and instructors in real-time to enhance your musical journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Interactive Lessons
        </div>
      ),
    },
    {
      title: "Instant Feedback",
      description:
        "Receive instant feedback on your performances and exercises. Our platform provides real-time assessments to help you understand your strengths and areas for improvement. Say goodbye to delayed feedback and embrace a learning environment where you can continuously refine your skills.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
          Feedback
        </div>
      ),
    },
    {
      title: "Comprehensive Resources",
      description:
        "Access a wide range of musical resources at your fingertips. From sheet music and instructional videos to practice exercises and play-along tracks, our platform provides everything you need to advance your skills. Stay motivated and inspired with our extensive library of educational materials.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
          Comprehensive Resources
        </div>
      ),
    },
    {
      title: "Flexible Scheduling",
      description:
        "Learn on your own terms with our flexible scheduling options. Whether you prefer to study early in the morning or late at night, our platform allows you to schedule lessons and practice sessions according to your availability. Enjoy a personalized learning experience that fits your lifestyle.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
          Flexible Scheduling
        </div>
      ),
    },
  ];
  
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs