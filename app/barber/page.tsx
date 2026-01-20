'use client'
import Hero from "./layout/Hero"
import { Instrument_Sans } from "next/font/google"
import Images from "./layout/Images"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import MobileNav from "./layout/MobileNav"

const instrumentSans = Instrument_Sans({ subsets: ['latin'] })

export default function page() {
  return (
    <div
    className={`${instrumentSans.className} text-white relative z-0 h-auto overflow-hidden bg-[radial-gradient(125%_125%_at_50%_90%,#061C11_100%,#10271C_100%)]`}
    >
    <div aria-hidden className="absolute inset-0 h-full pointer-events-none -z-10 bg-repeat"
        style={{ 
        backgroundImage: 'url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMTAiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+\")', 
        opacity: 0.1, 
        }} 
    /> 
        <Navbar />
        <MobileNav />
        <Hero />
        <Images />
        <div className='h-[50vh]'/>
        <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md mask-[linear-gradient(to_bottom,transparent,white_100%)] w-full h-[20vh] z-1000"/>

        <Footer />
    </div>
  )
}