import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

function UpcomingWebinar() {
  return (
    <div className="p-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-500 ">Featured Webinar</h2>
        <p className="text-5xl font-bold mt-2">
          {" "}
          Enhance Your Musical Journey{" "}
        </p>

        <div className="mt-10"></div>
        <div>
          {" "}
          <HoverEffect items={projects} />
        </div>
        <div className="text-center mt-10 ">
        <Link
          href={"/courses"}
          className="border border-teal-500 px-4 py-2 rounded-full"
        >
          See all courses
        </Link>
      </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;

export const projects = [
  {
    title: "Classical Piano Techniques",
    description:
      "A deep dive into the classical piano techniques that have shaped the greatest musicians of all time.",
    link: "https://www.pianote.com/blog/classical-piano-techniques",
  },
  {
    title: "Mastering Jazz Improvisation",
    description:
      "Learn how to improvise like a jazz pro with tips and tricks from top jazz musicians.",
    link: "https://www.learnjazzstandards.com/blog/jazz-improvisation",
  },
  {
    title: "Music Theory Essentials",
    description:
      "An essential guide to understanding music theory and how it applies to composition and performance.",
    link: "https://www.musictheory.net/lessons",
  },
  {
    title: "Vocal Training for Beginners",
    description:
      "A beginner's course for aspiring vocalists to develop their voice and singing techniques.",
    link: "https://www.30daysinger.com/",
  },
  {
    title: "Advanced Guitar Techniques",
    description:
      "Take your guitar skills to the next level with advanced techniques taught by professional guitarists.",
    link: "https://www.justinguitar.com/guitar-lessons/advanced-guitar-techniques",
  },
  {
    title: "Songwriting Workshop",
    description:
      "A creative workshop for songwriters looking to hone their craft and write memorable songs.",
    link: "https://www.songwritingacademy.com/",
  },
];