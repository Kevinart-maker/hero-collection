'use client'

import { motion } from 'motion/react'
import { FaApple, FaGoogle, FaSpotify, FaAmazon, FaMicrosoft, FaAirbnb, FaUber, FaLyft } from 'react-icons/fa'

const logos = [
    { Icon: FaApple, name: 'Apple' },
    { Icon: FaGoogle, name: 'Google' },
    { Icon: FaSpotify, name: 'Spotify' },
    { Icon: FaAmazon, name: 'Amazon' },
    { Icon: FaMicrosoft, name: 'Microsoft' },
    { Icon: FaAirbnb, name: 'Airbnb' },
    { Icon: FaUber, name: 'Uber' },
    { Icon: FaLyft, name: 'Lyft' },
]

export default function LogoSlider() {
    return (
        <div className="relative flex flex-col items-center justify-center py-10 overflow-hidden md:w-[60%]">
            <p className="mb-8 text-xs md:text-sm font-medium text-neutral-500 tracking-tighter">Trusted by the UK's leading companies</p>

            <div className="pointer-events-none absolute inset-y-0 -left-12 w-20 md:w-52 bg-[#d6d6d6] z-10 blur-xl"></div>
            <div className="pointer-events-none absolute inset-y-0 -right-12 w-20 md:w-52 bg-[#d6d6d6] z-10 blur-xl"></div>

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex shrink-0 gap-20 px-200"
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 hover:text-black transition-all duration-300 cursor-pointer">
                            <logo.Icon className="text-lg md:text-4xl" />
                            <span className="text-lg md:text-xl font-medium">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
