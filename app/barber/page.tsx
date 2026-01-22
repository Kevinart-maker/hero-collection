'use client'

import Hero from "./layout/Hero"
import { Instrument_Sans, Instrument_Serif } from "next/font/google"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import MobileNav from "./layout/MobileNav"
import Services from "./layout/Services"
import Location from "./layout/Location"
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Image from 'next/image'
import barb from './assets/prof.jpg'

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
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


export default function page() {
    return (
        <div
            className={`${instrumentSans.className} text-white relative z-0 h-auto overflow-hidden bg-[radial-gradient(125%_125%_at_50%_90%,#061C11_100%,#10271C_100%)]`}
        >
            <div aria-hidden className="absolute inset-0 h-full pointer-events-none -z-10 bg-repeat"
                style={{
                    backgroundImage: 'url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMTAiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+\")',
                    opacity: 0.1,
                }}
            />
            <Navbar />
            <MobileNav />
            <Hero />
            <Services />
            <Location />
            <motion.header
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className='flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-4 md:px-10 lg:px-40 mt-20 lg:mt-50'
            >
                <div className='overflow-hidden flex items-center justify-center w-full lg:w-auto lg:min-w-100 h-[40vh] lg:h-[60vh] rounded-2xl relative'>
                    <Image src={barb} alt="" className='w-full h-full object-cover' />
                    <div className="absolute left-3 rounded-xl bottom-3 bg-white text-black p-2 flex flex-col gap-0.5 text-xs">
                        <span className="italic font-semibold">Richard o.</span>
                        <span>Master Barber</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <span className='flex items-center gap-2 font-semibold text-xs opacity-65'>
                        <img src="/exp.svg" alt="" className='w-4' />
                        <span>EXPERTS</span>
                    </span>
                    <h1 className={` text-5xl lg:text-8xl -tracking-[0.06m] ${instrumentSerif.className} `}>Meet <br /> Our Experts</h1>
                    <p className='opacity-65 text-sm lg:text-base'>Each member of our team is committed to providing an <strong>exceptional grooming experience,</strong> ensuring you leave our shop looking and feeling your best.</p>
                </div>
            </motion.header>
            <div className='h-[30vh]' />
            <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md w-full h-[10vh] z-1000 mask-[linear-gradient(to_bottom,transparent,black)]" />

            <Footer />
        </div>
    )
}