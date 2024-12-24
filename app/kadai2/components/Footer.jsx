import { ToTopBtn } from '@/app/components/ToTopBtn'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='container-layout py-5'>
            <ToTopBtn />
            <p className='pt-8'><small>&copy; 2020 PHOTO BOOK</small></p>
        </footer >
    )
}
