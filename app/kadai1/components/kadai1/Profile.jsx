'use client';

import Image from 'next/image'
import React from 'react'
import image from '@/public/img1/about.jpg';
import { motion } from 'motion/react'

export const Profile = () => {
    return (
        <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity:1 }}
            transition={{ duration: 0.7, ease: "easeInOut"}}
            viewport={{ once: true }}
            className='container-layout mt-[60px] 600:mt-[70px] flex flex-col items-center 600:flex-row 600:place-content-center 600:gap-2.5'>

            <Image
                src={image}
                width={100}
                height={100}
                style={{ borderRadius: '50%' }}
                alt='Profile image'
            />

            <div className='w-full pt-2.5 600:w-[50%] 600:ml-[30px]'>
                <h3 className='font-bold'>KAKERU MIYAICHI</h3>
                <p className='pt-2.5 text-[14.4px]'>テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト<br />テキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
        </motion.div>
    )
}
