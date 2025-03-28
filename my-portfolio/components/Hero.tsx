"use client";
import React from "react";
import { useState } from "react";
import { Menu } from "lucide-react"; // Icon for the menu
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      
      {/* Navigation */}
      <nav className="absolute top-5 w-full flex justify-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex bg-gray-900 p-4 px-7 rounded-full backdrop-blur-md space-x-8">
          <img src="/mylogo.png" alt="Logo" className="h-8 w-8 rounded-full" />
          <a href="#" className="text-white font-medium">Education/Qualifications</a>
          <a href="#" className="text-white font-medium">Projects</a>
          <a href="#" className="text-white font-medium">Experience</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button onClick={() => setIsOpen(!isOpen)}>
                <Menu className="h-8 w-8 text-white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 text-white mt-2 w-48 p-2 rounded-md border-0">
              <a href="#" className="block p-2 hover:bg-gray-900">Edu/Qualifications</a>
              <a href="#" className="block p-2 hover:bg-gray-900">Projects</a>
              <a href="#" className="block p-2 hover:bg-gray-900">Experience</a>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-light">Hi, I&apos;m Ali Shahid</h1>

      {/* Features (Stacked on Mobile, Horizontal on Desktop) */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 w-full max-w-4xl items-center">
        <div className="bg-gray-900 p-6 rounded-lg text-center w-full md:w-64">
          <p>ETL processes, database management, and cloud technologies</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center w-full md:w-64">
          <p>Passionate about building scalable data pipelines and optimizing data workflows.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center w-full md:w-64">
          <p>Turn raw data into actionable insights, ensuring efficiency and reliability.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
