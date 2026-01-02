'use client'

import Typewriter from 'typewriter-effect'
import TextureButton from '../ui/TextureButton'
import LogoSlider from './LogoSlider'

export default function Hero() {
    return (
        <main className='flex flex-col items-center justify-center h-[90vh] relative overflow-hidden'>
            <div className='z-10 h-full pt-20 p-5 flex flex-col items-center justify-center gap-4 text-center '>
                <p className='bg-white p-1 text-[0.65rem] md:text-xs px-3 outline outline-[#c9c9c9] rounded-full flex items-center gap-1'>Built for Students in London <span><strong>🇬🇧</strong></span></p>
                <h1 className='text-3xl md:text-6xl font-medium relative leading-[0.9] -tracking-[0.06em]'>
                    <span className='text-[#888888] inline'>Your personal AI student <br /> guide for&nbsp;
                        <Typewriter
                            component="span"
                            options={{
                                strings: ['student life', 'finding housing', 'navigating transport', 'discovering events'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'inline bg-linear-to-b from-[#939393] to-[#000000] bg-clip-text text-transparent',
                                cursorClassName: 'bg-linear-to-b from-[#939393] to-[#000000] bg-clip-text text-transparent rounded-full'
                            }}
                        />
                    </span>
                </h1>
                <p className='text-[#111111] md:w-[52%] text-xs md:text-sm'>
                    From finding housing and navigating transport to discovering events, your AI concierge helps you settle faster and enjoy London like a local.
                </p>

                <TextureButton />
            </div>

            <span className='absolute z-0 w-[100vh] h-[100vh] -bottom-[90%] -left-30 bg-[#d6d6d6] border border-white/50 rounded-t-full rounded-br-full'></span>
            <span className='absolute z-0 w-[100vh] h-[100vh] -bottom-[50%] -right-[12%] bg-[#d6d6d6] border border-white/50 rounded-t-full rounded-br-full'></span>
            <span className='absolute z-0 w-[100vh] h-[100vh] -bottom-[100%] right-[20%] bg-[#d6d6d6] border border-white/50 rounded-t-full rounded-br-full'></span>

            <div className="h-full w-full flex items-end justify-center z-30">
                <LogoSlider />
            </div>
            
        </main>
    )
}