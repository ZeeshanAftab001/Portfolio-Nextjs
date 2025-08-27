import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { MacbookScrollDemo } from "@/components/MacBook";
import Testimonials from "@/components/Testimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const items=[{
  image: "https://imgs.search.brave.com/mye-qt8aWQEHI2CsyxiES9cFha6q7iTgSOMwTK2h63U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL2ZpbG1v/cmEvYXJ0aWNsZS1p/bWFnZXMvZmlsbW9y/YS10ZW1wbGF0ZXMt/MTQuSlBH",
    name: "Video Editing",
    description: "Go to Video Editing",
    href:"video-editing"

},
{
  image: "https://imgs.search.brave.com/Qi1--5cNRAPuJLf_pITjfnsa1z7wjSjZNGKr32zqMYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjUx/NTA1LmpwZw",
    name: "Graphics Design",
    description: "Go to Graphics Design",
    href:"graphic-design"

},
{
  image: "https://imgs.search.brave.com/H96KZboOo34IEW5BeSP-ZKwoo1QuCgs-T6JTocopRiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTM5/ODQxOS5qcGc",
    name: "AI Automation",
    description: "Go to AI Automation",
    href:"ai"

}]
export default function Home() {
  return (
   <main className="relative bg-color flex flex-col p-5 sm:p-10 overflow-hidden">
    <div className="flex justify-center items-center ">
      <Navbar />
    </div>
    <div className="-mb-10">
        <Hero />
    </div>   
    <InfiniteMovingCards items={items}/>
    <div className="block sm:hidden -mt-56">
      <MacbookScrollDemo />
    </div>
    <div className="-mt-2">
      <Project />
    </div>
    <div>
      <Testimonials />
    </div>
   </main>
  );
}
