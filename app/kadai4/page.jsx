import Image from 'next/image'
import React from 'react'
import pic from '@/public/img4/recipe.jpg';
import { Right } from './components/Right';
import { ToRecipeList } from '../kadai3/components/section/ToRecipeList';
import { ToTopBtn } from '../components/ToTopBtn';
import { SnsList } from '../kadai3/components/section/SnsList';
import { Footer } from '../kadai3/components/section/Footer';

const page = () => {
    return (
        <>
            <div className='834:flex h-[700px]'>
                <Image
                    src={pic}
                    alt='cooking picture'
                    priority={true}
                    className='h-full 834:w-[50%] object-cover'
                />
                <Right />
            </div>
            <div className='h-full'>
                <ToRecipeList />
                <ToTopBtn />
                <SnsList />
            </div>
            <Footer />
        </>
    )
}

export default page;