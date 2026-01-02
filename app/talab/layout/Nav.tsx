'use client'

import { motion } from 'motion/react'
import { useRef, useState } from 'react'

const items = ['Product', 'Pricing', 'Docs']

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [pill, setPill] = useState({ x: 0, width: 0, opacity: 0 })

    return (
        <nav
            ref={containerRef}
            className="relative xl:flex w-fit rounded-full p-2 overflow-hidden bg-[#d6d6d6] hidden"
        >
            <motion.div
                className="absolute left-0 top-2 bottom-2 rounded-full bg-black"
                animate={pill}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />

            {items.map((item) => (
                <button
                    key={item}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget

                        setPill({
                            x: el.offsetLeft,
                            width: el.offsetWidth,
                            opacity: 1,
                        })
                    }}
                    onMouseLeave={() =>
                        setPill((p) => ({ ...p, opacity: 0 }))
                    }
                    className="relative z-10 px-4 py-2 w-fit flex items-center justify-center text-white mix-blend-difference "
                >
                    {item}
                </button>
            ))}
        </nav>
    )
}