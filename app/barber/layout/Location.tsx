import Image from 'next/image'
import map from '../assets/map.jpg'
import { Instrument_Serif } from 'next/font/google'

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400' })

export default function Location() {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-20 items-center lg:items-stretch justify-center px-4 md:px-10 lg:px-40 mt-20 lg:mt-50'>
            <div className='flex flex-col gap-10 justify-between h-auto lg:h-full py-2'>
                <div className='flex flex-col gap-2 w-full'>
                    <span className='flex items-center gap-2 font-semibold text-xs opacity-65'>
                        <img src="/loc.svg" alt="" className='w-4' />
                        <span>LOCATION</span>
                    </span>
                    <h1 className={` text-5xl lg:text-8xl -tracking-[0.06m] ${instrumentSerif.className} `}>SERVICE BEYOND <br /> EXPECTATION</h1>
                    <p className='opacity-65 text-sm lg:text-base'>Our barbershop is the territory created purely for men who appreciate premium quality, time and flawless look. We’ll help you to look stylish and confident in the most discreet way.</p>
                </div>

                <div className='flex flex-col gap-2 opacity-65'>
                    <p>128  Winston st, Upper West Side, Manhattan, New York, NY 05120</p>
                    <p>+1 234 567 890</p>

                    <p>
                        Monday - Saturday: 9am - 8pm <br />
                        Sunday: 12pm - 8pm
                    </p>
                </div>
            </div>

            <div className='overflow-hidden flex items-center justify-center w-full lg:w-auto max-w-100 rounded-2xl'>
                <Image src={map} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}