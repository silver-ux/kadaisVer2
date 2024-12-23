'use client';
import React from 'react'
import { Title } from '../Title'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '@/public/img1/bicycle1.jpg'
import img2 from '@/public/img1/bicycle2.jpg'
import img3 from '@/public/img1/bicycle3.jpg'
import { motion } from 'motion/react'
import { ToTopBtn } from '@/app/components/ToTopBtn';


export const Bicycle = () => {

    const bicycles = [{
        id: "1",
        image: img1,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }, {
        id: "2",
        image: img2,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }, {
        id: "3",
        image: img3,
        title: "タイトルタイトル",
        text: "テキストテキストテキスト",
    }]

    return (
        <div className='pt-[100px]' id='bicycle'>
            <Title>Bicycle</Title>
            <div className='container-layout flex flex-col sm:flex-row justify-between pt-[60px] pb-24 text-center'>
                {bicycles.map((bicycle, index) => (
                    <Link key={bicycle.id} href="https://www.youtube.com/" className='group block' rel="noopener noreferrer" target="_blank">
                        <motion.div
                            initial={{ translateY: 30, opacity: 0 }}
                            whileInView={{ translateY: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.25 * index, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        >
                            <div className='w-full overflow-hidden rounded-xl 600:w-[263px]'>
                                <Image
                                    src={bicycle.image}
                                    alt='bicycle image'
                                    width={640}
                                    height={424}
                                    style={{ height: "auto" }}
                                    className='group-hover:scale-110 transition-all rounded-xl'
                                />
                            </div>
                            <h3 className='font-bold my-2.5'>{bicycle.title}</h3>
                            <p className='text-[14.4px] mb-8'>{bicycle.text}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
            <ToTopBtn />
        </div >
    )
}
