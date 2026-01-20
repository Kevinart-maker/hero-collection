import Image from "next/image"
import logo from '../assets/salon_logo.png'
import { Instrument_Serif } from 'next/font/google'
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { scrollY } = useScroll()

    const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"])
    const textColor = useTransform(scrollY, [0, 50], ["#ffffff", "#032512"])
    const width = useTransform(scrollY, [0, 50], ["100%", "60%"])
    const top = useTransform(scrollY, [0, 50], ["0px", "20px"])
    const borderRadius = useTransform(scrollY, [0, 50], ["0px", "24px"])
    const paddingTop = useTransform(scrollY, [0, 50], ["40px", "12px"])
    const paddingBottom = useTransform(scrollY, [0, 50], ["20px", "12px"])
    const paddingInline = useTransform(scrollY, [0, 50], ["160px", "20px"])

    const buttonBg = useTransform(scrollY, [0, 50], ["#ffffff", "#032512"])
    const buttonText = useTransform(scrollY, [0, 50], ["#032512", "#ffffff"])

    return (
        <motion.div
            style={{
                backgroundColor,
                width,
                top,
                borderRadius,
                color: textColor,
                paddingTop,
                paddingBottom,
                paddingLeft: paddingInline,
                paddingRight: paddingInline,
            }}
            className='fixed left-0 right-0 mx-auto z-50 xl:flex justify-between items-center text-sm hidden'
        >
            <div className='flex items-center gap-2'>
                <Image src={logo} alt='' className="w-7" />
                <h1 className={` ${instrumentSerif.className} italic text-[1.2rem] `}>salon</h1>
            </div>
            
            <ul className='flex gap-5 items-center'>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Our location</li>
                <li className='cursor-pointer'>Contact us</li>
            </ul>

            <motion.div
                style={{ backgroundColor: buttonBg, color: buttonText }}
                className='px-6 py-1.5 rounded-xl cursor-pointer'
            >
                Book Now
            </motion.div>
        </motion.div>
    )
}