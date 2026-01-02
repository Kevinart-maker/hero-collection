import React from 'react'
import Nav from './Nav'
import Button from '../ui/Button'
import CurvyNav from './CurvyNav'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full border-b border-white p-3 px-5 md:px-15">
        <h1 className="text-3xl font-semibold">Verifique</h1>
        <Nav/>

        <div className='xl:flex items-center gap-5 hidden'>
            <Button theme="light">Sign In</Button>
            <Button>Sign Up</Button>
        </div>

        <CurvyNav/>
    </nav>
  )
}