'use client';

import React from 'react'
import Link from 'next/link'
import Profile from './Profile';
import SidebarElement from './SidebarElement';

import { RiTableView } from "react-icons/ri";
import { MdApproval } from "react-icons/md";
import { LuClipboard } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

import Image from 'next/image';
import MiniLogo from '../../images/ParkyShort.png'

interface AdminSidebarProps {
    children: React.ReactNode
    index: number
}

const AdminSidebar:React.FC<AdminSidebarProps> = ({
    children,
    index
}) => {
  return (
    <div className='max-w-screen min-h-screen flex flex-row relative'>
        <div className='h-screen w-[11%] border-r-green-300 sticky top-0 py-12 border-r-2 flex flex-col justify-start items-center shadow-md gap-16 flex-shrink'>
            <div className='w-full flex flex-col justify-center items-center gap-2'>
                <Profile />
                <div className='text-lg font-semibold w-3/4 text-center'>Mr. Dan Mano</div>
            </div>
            <div className='flex flex-col justify-center gap-8 items-center w-full px-9'>
                <SidebarElement active={index===1} icon={<RiTableView size={40}/>} path='/admintable' label='Student Data'/>
                <SidebarElement active={index===2} icon={<MdApproval size={40}/>} path='/adminportal' label='Approval Portal'/>
                <SidebarElement active={false} disabled icon={<LuClipboard size={40}/>} path='/adminforms' label='Form Editing'/>
                <SidebarElement active={false} disabled icon={<MdOutlineMail size={40}/>} path='/admininbox' label='Inbox'/>
            </div>
            <Link href="/" className='text-xs text-neutral-400 hover:text-neutral-600 transition-colors text-center px-2'>← Return to testing screen</Link>
            <div className='w-full h-72 flex flex-col justify-center items-center relative'>
                <Image alt='MiniLogo' src={MiniLogo} quality={100} priority={true}/>
            </div>
        </div>
        <div className='flex-grow w-[89%]'>
            {children}
        </div>
    </div>
  )
}

export default AdminSidebar