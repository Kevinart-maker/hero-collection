'use client'

import { Instrument_Serif } from 'next/font/google'
import Typewriter from 'typewriter-effect'

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export default function Hero() {
    return (
        <main className='flex flex-col items-center justify-center h-[90vh] relative overflow-hidden'>
            <div className='z-10 h-full pt-20 p-5 flex flex-col items-center justify-center gap-7 text-center text-white'>
                <h1 className={`text-3xl md:text-8xl ${instrumentSerif.className} font-extralight relative leading-[0.9] -tracking-[0.06m]`}>
                    <span className='text-white inline'>The Barber That Gets <br /> Your Hair Done&nbsp;
                        <Typewriter
                            component="span"
                            options={{
                                strings: ['Right', 'Properly', 'Clean'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'inline',
                                cursorClassName: 'rounded-full'
                            }}
                        />
                    </span>
                </h1>
                <p className='md:w-[52%] text-lg opacity-65'>
                    We focus on clean cuts, consistency, and your style. It&apos;s about getting it right, not just getting it done.
                </p>

                <div className='flex flex-col gap-4 items-center'>
                    <button className='bg-white text-[#032512] px-7 py-1.5 rounded-xl cursor-pointer'>Book Now</button>
                    <span className='text-[0.6rem] opacity-50'>Book an appointment with us.</span>
                </div>

            </div>
            
        </main>
    )
}