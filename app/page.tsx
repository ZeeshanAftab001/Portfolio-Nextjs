import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {BentoGridDemo} from "../components/Grid"
import { HeroParallaxDemo } from "@/components/HeroParallexDemo";
import Project from "@/components/Project";
import { MacbookScrollDemo } from "@/components/MacBook";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
   <main className="relative bg-color flex flex-col p-5 sm:p-10 overflow-hidden">
    <div className="flex justify-center items-center ">
      <Navbar />
    </div>
    <div className="-mb-10">
        <Hero />
    </div>   
    <div>
      <BentoGridDemo/>
    </div> 
    <div className="hidden md:block my-10 mt-20">
      <HeroParallaxDemo />
    </div>
    <div className="block sm:hidden -mt-40">
      <MacbookScrollDemo />
    </div>
    <div className="p-10">
      <Project />
    </div>
    <div>
      <Testimonials />
    </div>
    <div>
      <Pricing />
    </div>
   </main>
  );
}
