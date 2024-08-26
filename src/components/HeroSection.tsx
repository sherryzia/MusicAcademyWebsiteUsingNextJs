import Link from "next/link";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden">
      <div className="p-4 relative z-10 w-full text-center text-white mx-9">
        <h1 className=" mt-28 text-7xl font-bold">Master the art of Music</h1>
        <p className="text-2xl mt-4 mx-9">
        Inspiring paragraph describing the world of music education. Learn how to master the art of music through various courses and professional guidance, designed for both beginners and advanced musicians.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
