import React from 'react'
import Navbar from './layout/Navbar'
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});
export default function TalabLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${instrumentSans.className} bg-[#d6d6d6] min-h-screen`}>
            <Navbar />
            {children}
        </div>
    )
}