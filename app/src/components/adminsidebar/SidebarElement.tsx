'use client';

import Link from 'next/link';
import React from 'react'

interface SidebarElementProps {
    icon: any
    label: string
    path: string
    active: boolean
    disabled?: boolean
}

const SidebarElement:React.FC<SidebarElementProps> = ({
    icon,
    label,
    path,
    active,
    disabled = false
}) => {
  if (disabled) {
    return (
      <div className='w-full border-2 py-3 px-2 rounded-md shadow-md flex flex-col justify-between items-center gap-2 bg-white
        border-neutral-200 text-neutral-300 cursor-not-allowed select-none'>
          {icon}
          <h1 className='font-semibold text-center text-sm'>{label}</h1>
      </div>
    )
  }

  return (
    <Link href={path} className={`w-full border-2 py-3 px-2 rounded-md shadow-md flex flex-col justify-between items-center gap-2 bg-white
      hover:bg-neutral-50 active:bg-neutral-100 transition duration-75 ${active ? 'text-black border-green-300' : 'text-neutral-500'}`}
    >
        {icon}
        <h1 className='font-semibold text-center text-sm'>{label}</h1>
    </Link>
  )
}

export default SidebarElement