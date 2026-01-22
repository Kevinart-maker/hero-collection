import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Instrument_Serif } from 'next/font/google'
import logo from '../assets/salon_logo.png'
import Image from 'next/image'

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export default function Footer() {
  return (
    <div className='border-t border-white/10 py-20 px-4 md:px-10 lg:px-40  text-sm flex flex-col justify-between'>
        <div className='flex flex-col lg:flex-row gap-10 justify-between'>
            <div className='flex flex-col gap-4'>
               <div className='flex items-center gap-2'>
                    <Image src={logo} alt='' className="w-14" />
                    <h1 className={` ${instrumentSerif.className} italic text-[2rem] `}>salon</h1>
                </div>
                <p className='opacity-65'>128  Winston st, Upper West Side, Manhattan, New York, NY 05120</p>
                <div className='flex gap-2 text-xl opacity-65'>
                    <FaInstagram/>
                    <FaWhatsapp/>
                </div>
            </div>
    
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold'>Menu</h1>
                <p className='opacity-65'>Services</p>
                <p className='opacity-65'>Location</p>
                <p className='opacity-65'>Contact</p>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold'>Operational</h1>
                <p className='opacity-65'>Monday - Saturday: 9am - 8pm</p>
                <p className='opacity-65'>Sunday: 12pm - 8pm</p>
                <button className='bg-white text-[#032512] px-7 py-1.5 rounded-xl cursor-pointer w-fit xl:w-full'>Book Now</button>
            </div>
        </div>

        <div className='mt-20 opacity-65'>
            <p>© {new Date().getFullYear()} salon. All rights reserved.</p>
        </div>
    </div>
  )
}