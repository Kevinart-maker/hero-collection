'use client'

import Image from 'next/image'
import barb from '../assets/bard.jpg'
import { Instrument_Serif } from 'next/font/google'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

const services = [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
]

const testimonials = [
    {
        quote: "I really love these barbers, they literally changed my life. I look so so good with this haircut. The barbers are so skilled and friendly, I never regret coming here!",
        bg: "John Lewis"
    },
    {
        quote: "Best experience I've ever had at a barbershop. The attention to detail is unmatched and the atmosphere is incredibly relaxing.",
        bg: "Michael Chen"
    },
    {
        quote: "Top notch service! Found my go-to spot in the city. Professional, clean, and exacty what I asked for every time.",
        bg: "David Smith"
    }
]

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export default function Services() {
    const [currentInitial, setCurrentInitial] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentInitial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setCurrentInitial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0
        })
    }

    return (
        <div className='flex flex-col gap-14 items-center justify-center px-4 md:px-10 lg:px-40 mt-20 lg:mt-50'>
            <motion.header
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className='flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20'
            >
                <div className='overflow-hidden flex items-center justify-center w-full lg:w-auto max-w-100 h-[40vh] lg:h-[60vh] rounded-2xl'>
                    <Image src={barb} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <span className='flex items-center gap-2 font-semibold text-xs opacity-65'>
                        <img src="/serv.svg" alt="" className='w-4' />
                        <span>SERVICES</span>
                    </span>
                    <h1 className={` text-5xl lg:text-8xl -tracking-[0.06m] ${instrumentSerif.className} `}>DISCOVER <br /> OUR WORKS</h1>
                    <p className='opacity-65 text-sm lg:text-base'>Our team of experienced barbers is dedicated to their craft. We stay updated with the latest techniques and styles to ensure you get best service possible.</p>
                </div>
            </motion.header>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className='overflow-x-auto pb-5 flex gap-5 w-full snap-x'
            >
                {services.map((service, index) => (
                    <div key={index} className='rounded-2xl bg-white min-w-70 lg:min-w-80 h-[40vh] lg:h-[50vh] flex items-center justify-center text-[#032512] text-2xl font-serif snap-center shrink-0'>
                        <h2>{service.name}</h2>
                    </div>
                ))}
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full'
            >
                <div className='bg-white rounded-2xl p-6 lg:p-8 text-black flex flex-col h-auto min-h-75 lg:h-75 justify-between w-full lg:w-1/2 overflow-hidden'>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentInitial}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="h-full flex flex-col justify-between"
                        >
                            <p className="text-lg lg:text-xl leading-relaxed">“{testimonials[currentInitial].quote}”</p>
                            <span className='italic font-semibold block mt-4'>{testimonials[currentInitial].bg}</span>
                        </motion.div>
                    </AnimatePresence>

                    <div className='w-full flex items-center justify-end mt-4'>
                        <span className='flex items-center gap-5'>
                            <button onClick={prevTestimonial} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                                <FaArrowLeft />
                            </button>
                            <button onClick={nextTestimonial} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                                <FaArrowRight />
                            </button>
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-5 w-full lg:w-1/2'>
                    <h1 className={` ${instrumentSerif.className} w-full text-4xl lg:text-5xl -tracking-[0.06m] `}>Our Prices</h1>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between border-b border-white/20 pb-2'>
                            <span>Haircut</span>
                            <span>$40</span>
                        </div>
                        <div className='flex items-center justify-between border-b border-white/20 pb-2'>
                            <span>Shave</span>
                            <span>$35</span>
                        </div>
                        <div className='flex items-center justify-between border-b border-white/20 pb-2'>
                            <span>Haircut + Shave</span>
                            <span>$70</span>
                        </div>
                        <div className='flex items-center justify-between border-b border-white/20 pb-2'>
                            <span>Beard Trim</span>
                            <span>$45</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}