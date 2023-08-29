import Header from '@/components/Header'
import Stats from '@/components/Stats'
import React from 'react'

export default function page() {
    return (
        <div className="h-screen">
            <Header />
            <div className='h-[70vh]'>
                <Stats />
            </div>
        </div>
    )
}
