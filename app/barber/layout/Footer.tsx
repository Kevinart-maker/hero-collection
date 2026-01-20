import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='h-[50vh] border-t border-white/10 p-20 px-80 text-sm flex flex-col justify-between'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-lg'>salon.</h1>
                <div className='flex gap-2 text-xl'>
                    <FaInstagram/>
                    <FaWhatsapp/>
                </div>
            </div>
    
            <div className='flex flex-col gap-4'>
                <h1 className='font-medium'>Help</h1>
                <p>Contact</p>
                <p>FAQ</p>
            </div>
        </div>

        <div>
            <p>© {new Date().getFullYear()} salon. All rights reserved.</p>
        </div>
    </div>
  )
}