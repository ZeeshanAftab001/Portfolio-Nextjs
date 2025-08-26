import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/GridBackground'
import { TextGenerateEffect } from './ui/text-generate-effect'

function Hero() {
    return (
        <section id='home'>
            <div className="pb-30 pt-40 overflow-hidden">
                {/* Spotlights */}
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 w-full" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="purple" />
                <Spotlight className="rotation-180 top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
                <Spotlight className="top-28 h-[80vh] w-[50vh]" fill="white" />

                {/* Content */}
                <div className="z-0 top-0 left-0">
                    <GridBackgroundDemo />


                </div>
                <div className='relative z-10 flex flex-col -mt-10 justify-center items-center '>
                    <h2 className='text-3xl text-center text-fade-in'>
                        Creating the dreams of yours.
                    </h2>

                    <div className='md:w-[70%]' >
                        <TextGenerateEffect className='p-3 text-[48px] md:text-[72px]  text-center font-extrabold'
                            words='Transforming Concepts into User Experiences' />
                    </div>
                    <p className='text-xl text-center text-fade-in'>
                        Hi!I&apos;m Mudassir,a UI/UX Designer based in Islamabad.
                    </p>
                    <a href='#projects' className='cursor-pointer mt-10 text-fade-in'>
                        <button className="p-[3px] relative ">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2  bg-transparent rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                See My Work
                            </div>
                        </button>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero
