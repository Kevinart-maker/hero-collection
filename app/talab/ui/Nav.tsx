import React from 'react'
import { motion } from 'motion/react'
import { menuSlide } from '../lib/animation/nav-anim'
import Curve from './Curve'

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
        variants={menuSlide as any}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed top-0 right-0 w-full md:w-[60%] h-full bg-linear-to-b from-[#2d2d2d] to-[#000000] text-white md:text-5xl text-2xl z-50 flex flex-col gap-10 list-none p-10 justify-center"
    >
        <Curve/>
      {children}
    </motion.div>
  )
}