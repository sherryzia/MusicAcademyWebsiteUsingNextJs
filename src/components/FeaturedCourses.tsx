"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  courseLink: string;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900 text-white">
      <div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-500">Featured Courses</h2>
          <p className="text-5xl font-bold mt-2"> Learn with the best!!! </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <Link href={course.courseLink}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Learn more </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {">"}
                    </span>
                  </button>{" "}
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20 ">
        <Link
          href={"/courses"}
          className="border border-teal-500 px-4 py-2 rounded-full"
        >
          See all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
