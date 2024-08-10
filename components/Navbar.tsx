'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '@/public/sparta-logo.png'

const Navbar = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  return (
    <div className='fixed w-[100%] h-[15vh] z-10'>
      <div className='flex justify-between items-center bg-[#fdc127]'>
      <div className='pl-3 md:block hidden'>
          <Image
            src={Logo}
            width={30}
            className=' min-h-full'
            alt='logo'
          />
        </div>
        <div className='flex'>
          <button onClick={()=> scrolltoHash('profil')} className=" p-4">Profile</button>
          <button onClick={()=> scrolltoHash('pencapaian')} className=" p-4">Pencapaian</button>
          <button onClick={()=> scrolltoHash('projek')} className=" p-4">projek</button>
          <button onClick={()=> scrolltoHash('kemampuan')} className=" p-4">Kemampuan</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar