import Link from 'next/link'
import React from 'react'

export const SnsList = () => {
    return (
        <div className='py-5 text-center'>
            <Link href={"https://www.instagram.com/"} className='anchor-underline'>Instagram</Link>
            <Link href={"https://x.com/?lang=ja"} className='mx-5 anchor-underline'>Twitter</Link>
            <Link href={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Dja_JP"} className='anchor-underline'>Facebook</Link>
        </div >
    )
}
