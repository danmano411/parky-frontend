'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react'
import axios from 'axios';

import { AdminSidebar } from '../src/components/adminsidebar';

import { useSearchParams } from 'next/navigation';
import { StudentList, ActiveData } from '../src/components/adminportal';

const AdminPortal = () => {
    
    const [studentData, setStudentData] = useState<userData[]>();

    const [progress, setProgress] = useState<"fetch" | "loading" | "loaded" | "error">("fetch")
    const progressRef = useRef(progress)
    useEffect(() => {
        progressRef.current = progress;
    }, [progress])

    const [activeData, setActiveData] = useState<userData>();

    const urlParams = useSearchParams();

    useEffect(() => {
        setTimeout(() => {
            if (progressRef.current==='fetch'){
                setProgress('loading');
            }
        }, 1000)

        setTimeout(() => {
            if (progressRef.current !== 'loaded'){
                setProgress('error')
            }
        }, 10000)

        axios.get(`${process.env.NEXT_PUBLIC_BASE_PATH}/data/student-data.json`)
        .then(response => {
            setStudentData(response.data)
            setProgress("loaded");
        })
        .catch(error => {
            console.log("Error: ", error)
            setProgress("error")
        })
    }, [])

    useEffect(() => {
        if (!studentData) return;

        const userID = urlParams.get('userID');
        if (userID) {
            const found = studentData.find((d: userData) => d.id === userID);
            if (found) setActiveData(found);
        }

        const pageParam = urlParams.get("type")
        if (pageParam) {
            if (pageParam === "insurance")
                setPage(2)
            else if (pageParam === "registration1")
                setPage(3)
            else if (pageParam === "registration2")
                setPage(4)
            else setPage(1)
        }
    }, [studentData, urlParams])

    const [page, setPage] = useState(1);

    return (
        <AdminSidebar index={2}>
            <main className='flex-grow h-screen flex flex-row justify-between items-end p-5 gap-5'>
                <div className='w-2/3 border-2 rounded-lg shadow-md h-[90%] overflow-hidden'>
                    <ActiveData activeData={activeData} page={page} setPage={setPage}/>
                </div>
                <div className='w-1/3 border-2 rounded-lg shadow-md h-[90%] flex flex-col justify-start items-center overflow-hidden'>
                    <StudentList progress={progress} setActiveData={setActiveData} studentData={studentData} setPage={setPage}/>                
                </div>
            </main>
        </AdminSidebar>
    )
}

const AdminPortalPage = () => (
    <Suspense>
        <AdminPortal />
    </Suspense>
)

export default AdminPortalPage