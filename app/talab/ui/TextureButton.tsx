'use client'

import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa'

export default function TextureButton() {
  return (
    <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    className='bg-[url("/bg.png")] bg-cover bg-center bg-no-repeat w-fit rounded-2xl p-1 ring-1 ring-white shadow-xl shadow-black/20 cursor-pointer group scale-75 md:scale-100'>
        <div className='rounded-xl bg-white/95 p-1 pl-4 flex items-center gap-5'>
            <span className='font-medium text-[#666]'>Get Started</span>

            <div className='rounded-lg grid place-items-center bg-linear-to-b from-zinc-500 to-black p-2 text-white ring-1 ring-white shadow-xl shadow-black/30 group-hover:ml-5 transition-all duration-300'>
                <FaArrowRight/>
            </div>
        </div>
    </motion.button>
  )
}