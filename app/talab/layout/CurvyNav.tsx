'use client'

import { motion } from 'motion/react'
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from '../ui/Nav';
import { slide } from '../lib/animation/nav-anim';
import Button from '../ui/Button';

interface NavItem {
  title: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    title: 'Product',
    link: '#'
  },
  {
    title: 'Pricing',
    link: '#about'
  },
  {
    title: 'Docs',
    link: '#services'
  },
]

export default function CurvyNav() {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className='block xl:hidden'>

      <div
      onClick={() => setIsOpen(!isOpen)}
      className='cursor-pointer flex flex-col items-center justify-center gap-1 relative z-100'
      >
        <span className={`w-3 h-px transition-all duration-300 ease-in-out bg-linear-to-b from-[#504f4f] to-[#000000] ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-4.5 h-px transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-[0.2px] rotate-45 bg-white' : 'bg-linear-to-b from-[#504f4f] to-[#000000]'}`}></span>
        <span className={`w-4.5 h-px transition-all duration-300 ease-in-out ${isOpen ? '-translate-y-1 -rotate-45 bg-white' : 'bg-linear-to-b from-[#504f4f] to-[#000000]'}`}></span>
      </div>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <Nav>
            <div className='flex flex-col gap-10 justify-between'>
              {navItems.map((item, index) => (
                <motion.div 
                custom={index}
                variants={slide as any}
                initial="initial"
                animate="enter"
                exit="exit"
                className='cursor-pointer relative group'
                whileHover={{
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 500, damping: 20 },
                }}
                key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </motion.div>
              ))}

              <div className='flex items-center gap-2 text-sm'>
                <Button theme="light">Sign In</Button>
                <Button>Sign Up</Button>
              </div>
            </div>
          </Nav>
        )}
      </AnimatePresence>
    </div>
  )
}