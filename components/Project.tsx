"use client";
import React, { useState } from "react";
import { Card } from "./ui/ard-hover-effect";




export default function Project() {

    const projects = [
        {
            id: 1,
            title: "Cinematic Travel Edit",
            des: "A cinematic travel video edit with smooth transitions.",
            category: "Video Editing",
            videoUrl: "https://www.youtube.com/embed/1w8Z0UOXVaY",
        },
        {
            id: 2,
            title: "Mobile App UI Design",
            des: "A clean and modern UI design for a finance app.",
            category: "UI/UX",
            videoUrl: "https://www.youtube.com/embed/Z1RJmh_OqeA",
        },
        {
            id: 3,
            title: "Poster Design",
            des: "A creative poster design for a music festival.",
            category: "Graphic Designing",
            videoUrl: "https://www.youtube.com/embed/QFaFIcGhPoM",
        },
        {
            id: 4,
            title: "Portfolio Website",
            des: "A modern and responsive portfolio website.",
            category: "UI/UX",
            videoUrl: "https://www.youtube.com/embed/GDa8kZLNhJ4",
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState("Graphic Designing");

    const categories = ["All", "Video Editing", "UI/UX", "Graphic Designing"];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    return (
        <section id="projects">

            <h1 className="text-center text-fade-in text-3xl sm:text-5xl font-extrabold mb-6">
                My <span className="text-purple-500">Projects</span>
            </h1>

            {/* Category buttons */}
            <div className="flex justify-center relative gap-4 mb-10 flex-col sm:flex-row  card-content ">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={()=>{setSelectedCategory(cat)
                            console.log(cat)
                        }}
                        className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${selectedCategory === cat
                                ? "bg-purple-600 text-white"
                                : "bg-white text-black hover:bg-purple-400"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProjects.map((item) => (
                    <Card key={item.id} className="p-4 shadow-lg rounded-2xl">
                        <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">{item.des}</p>
                        <div className="overflow-hidden rounded-xl">
                            <iframe
                                className="w-full aspect-video rounded-xl"
                                src={item.videoUrl}
                                title={item.title}
                                
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
