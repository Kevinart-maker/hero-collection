'use client'

import Image from 'next/image'
import barberWebsite from '../assets/barber-website.png'
import clipper from '../assets/clipper.jpg'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionImage = motion(Image)

export default function Images() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const imageY = useTransform(scrollYProgress, [0, 1], [-70, 70])
    const divY = useTransform(scrollYProgress, [0, 1], [70, -70])

    return (
        <div className="w-full relative" ref={ref}>
            <MotionImage 
                src={barberWebsite} 
                width={1000} 
                height={1000} 
                alt="barber-website" 
                className='w-full h-auto opacity-10' 
                style={{ y: imageY }}
            />
            <div className='absolute inset-0 mask-[linear-gradient(to_bottom,transparent,#041507_100%)]' />
            <motion.div 
                className='w-[90%]  xl:h-[80vh] z-10 rounded-2xl outline outline-[#0c5431] border-3 border-[#041507] bg-white absolute bottom-10 md:-bottom-10 left-1/2 overflow-hidden' 
                style={{ y: divY, x: "-50%" }}
            >
                <Image src={clipper} width={1000} height={1000} alt="barber-website" className='w-full h-auto' />
            </motion.div>
        </div>
    )
}