"use client";
import { useState, useEffect } from "react";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate background color based on scroll position
  const backgroundColor = scrollY > 50 ? "#AAA7F6" : "transparent";
  const boxShadow = scrollY > 50 ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: backgroundColor,
        boxShadow: boxShadow,
      }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Plane className="h-8 w-8 text-[#3730A3]" />
            <span className="text-2xl font-bold text-[#3730A3]">EzFlights</span>
          </div>
        </Link>
        <nav className="lg: mr-12">
          <ul className="flex space-x-6 cursor-pointer ">
            <li>
              <Link href="/#flights" className="text-indigo-500  hover:text-indigo-700 transition-colors">
                Flights
                <div className=" max-w-0 group-hover:max-w-full group-hover:z-10 transition-all duration-500 h-0.5 bg-sky-600 "></div>
              </Link>
            </li>
            <li>
              <Link href="/" className="text-indigo-500  hover:text-indigo-700 transition-color">
                <span>
                  Hotels
                  <sup className=" ml-1 rounded-sm bg-white px-1 text-indigo-600">soon</sup>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-indigo-500  hover:text-indigo-700 transition-color">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
