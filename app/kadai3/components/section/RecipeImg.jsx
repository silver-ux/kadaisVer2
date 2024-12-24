import React from 'react'
import rp1 from '@/public/img3/recipe1.jpg';
import rp2 from '@/public/img3/recipe2.jpg';
import rp3 from '@/public/img3/recipe3.jpg';
import Image from 'next/image';

export const RecipeImg = () => {

    const images = [rp1, rp2, rp3];
    return (
        <div className='834:flex'>
            {images.map((image, index) => (
                <Image
                    key={image + index}
                    src={image} alt='recipes'
                    style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
            ))}
        </div>
    )
}
