import Link from 'next/link'
import React from 'react'

export default function AboutTeam({data}) {
  return (
    <div className='w-full min-h-96 bg-[#b18673] text-center'>
      <h2 className='font-medium text-[#3e2b24] text-7xl tracking-wider'>{data.title}</h2>
      <h2 className='mx-auto w-4xl py-14 text-[#3e2b24] text-2xl tracking-wider'>{data.desc}</h2>
      <Link href='#' className='py-4 px-16 text-2xl bg-[#3e2b24] text-[#b18673] border-2 border-transparent hover:bg-[#b18673] hover:border-[#3e2b24] hover:text-[#3e2b24]'>{data.but}</Link>
    </div>
  )
}
