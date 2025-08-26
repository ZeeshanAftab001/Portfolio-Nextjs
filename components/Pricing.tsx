import React from 'react'
import { BackgroundGradient } from "../components/ui/background-gradient";
import { CometCard } from './ui/comet-card';
import { TiTick } from "react-icons/ti";

function Pricing() {
    return (
        <section id="pricing">

            <h1 className="text-center text-fade-in text-3xl sm:text-5xl font-extrabold mb-6">
                My <span className="text-purple-500">Pricing</span>
            </h1>
            <div className='flex flex-col sm:flex-row justify-center  items-center sm:justify-around mt-6'>
                <CometCard>
                    <div className='flex flex-col h-[400px] w-[300px] border rounded-3xl p-6'>
                        <h3 className='m-6'>Starter</h3>
                        <h1 className='font-bold m-6 text-6xl'>12$<span className='text-xl '>/month</span></h1>

                        <a href='#contact' className="px-8 py-2  bg-white text-black 
                        text-sm text-center rounded-md font-semibold hover:bg-grey-600 hover:shadow-lg">
                            Get Started Now
                        </a>

                        <p>
                            <ul className='flex flex-col gap-2 p-3'>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                            </ul>
                        </p>
                    </div>
                </CometCard>
                <CometCard>
                    <div className='flex mt-8 flex-col h-[400px] w-[300px] border rounded-3xl p-6'>
                        <h3 className='m-6'>Express</h3>
                        <h1 className='font-bold m-6 text-6xl'>20$<span className='text-xl '>/month</span></h1>

                        <a href='#contact' className="px-8 py-2  bg-white text-black 
                        text-sm  text-center rounded-md font-semibold hover:bg-grey-600 hover:shadow-lg">
                            Get Started Now
                        </a>

                        <p>
                            <ul className='flex flex-col gap-2 p-3'>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                            </ul>
                        </p>
                    </div>
                </CometCard>
                <CometCard>
                    <div className='flex flex-col mt-8 h-[400px] w-[300px] border rounded-3xl p-6'>
                        <h3 className='m-6'>Business</h3>
                        <h1 className='font-bold m-6 text-6xl'>40$<span className='text-xl '>/month</span></h1>

                        <a href='#contact' className="px-8 py-2  bg-white text-black 
                        text-sm  text-center rounded-md font-semibold hover:bg-grey-600 hover:shadow-lg">
                            Get Started Now
                        </a>

                        <p>
                            <ul className='flex flex-col gap-2 p-3'>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                                <li className='flex flex-row'>
                                    <TiTick className='h-5 w-5' /> Verified Google Badge
                                </li>
                            </ul>
                        </p>
                    </div>
                </CometCard>
            </div>

        </section>
    )
}

export default Pricing