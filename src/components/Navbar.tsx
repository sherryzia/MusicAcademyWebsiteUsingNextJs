"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if user is scrolling up or down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up on unmount
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-300",
        isVisible ? "translate-y-10" : "-translate-y-full", // Translate based on visibility
        className
      )}
    >
      <Menu setActive={setActive}>
      <Link href="/" className="text-white" scroll={false}>Home</Link>
        
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="https://www.avid.com/resource-center/music-theory" target="_blank">Basic Music Theory</HoveredLink>
            <HoveredLink href="https://farabius.net/online/advanced-composition" target="_blank">Advanced Composition</HoveredLink>
            <HoveredLink href="https://lyricstudio.net/" target="_blank">Song Writing</HoveredLink>
            <HoveredLink href="https://blog.landr.com/music-production/" target="_blank">Music Production</HoveredLink>
          </div>
        </MenuItem>
        
        <Link href="/contact" className="text-white">Contact Us</Link>
      </Menu>
    </div>
  );
}

export default Navbar;
