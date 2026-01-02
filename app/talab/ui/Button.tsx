import React from 'react'

export default function Button({ children, theme }: { children: React.ReactNode, theme?: "dark" | "light" }) {
  return (
    <button className={`relative cursor-pointer flex w-fit rounded-2xl p-3 px-5 overflow-hidden outline outline-[#b2b2b2] ${theme === "light" ? "bg-white text-black" : "bg-linear-to-b from-[#504f4f] to-[#000000] text-white"}`}>
      <div className="absolute w-full h-4 -top-[50%] blur-3xl rounded-full bg-white"/>
        {children}
    </button>
  )
}