import Image from 'next/image'
import React from 'react'
import mv from '@/public/img3/mainvisual.jpg';

export const Main = () => {
    return (
        <div>
            <Image
                src={mv}
                alt='mainvisual'
                width={1920}
                height={1080}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
        </div>
    )
}
