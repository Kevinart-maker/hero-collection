import Image from "next/image"
import logo from '../assets/salon_logo.png'
import { Instrument_Serif } from 'next/font/google'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            layout
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
                closed: {
                    borderRadius: "1rem",
                    top: "10px",
                    left: "10px",
                    right: "10px",
                    width: "calc(100% - 20px)",
                    height: "60px",
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                },
                open: {
                    borderRadius: "0px",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    width: "100%",
                    height: "350px", // Adjust based on content
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                }
            }}
            className="xl:hidden fixed z-50 bg-white text-[#032512] overflow-hidden shadow-lg border border-gray-100">
            <div className="w-full h-[60px] flex justify-between items-center px-3">
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='' className="w-8" />
                    <h1 className={` ${instrumentSerif.className} italic text-[1.3rem] text-[#032512]`}>salon</h1>
                </div>

                <div
                    className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer bg-[#ebeeed] border border-[#d9dedc] p-2 rounded-[0.5rem]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
                        className="w-5 h-[2px] rounded-full bg-[#032512] block"
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }}
                        className="w-5 h-[2px] rounded-full bg-[#032512] block"
                    />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="w-full flex flex-col gap-6 px-6 pb-6 pt-2"
                    >
                        <ul className="w-full flex flex-col gap-4 text-lg font-medium">
                            <li className="cursor-pointer border-b border-gray-100 pb-2">Services</li>
                            <li className="cursor-pointer border-b border-gray-100 pb-2">Our location</li>
                            <li className="cursor-pointer border-b border-gray-100 pb-2">Contact us</li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-[#032512] text-white font-medium text-sm cursor-pointer hover:opacity-90 transition-opacity">
                            Book Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}