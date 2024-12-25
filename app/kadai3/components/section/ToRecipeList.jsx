import Link from 'next/link'
import React from 'react'

export const ToRecipeList = () => {
    return (
        <div className='py-[60px] text-center '>
            <Link href={"https://cookpad.com/jp"} rel="noopener noreferrer" target="_blank" className='transition-all hover:bg-red-300 hover:scale-105 active:scale-95 border border-[#2B2A27] py-[21px] px-[60px] inline-block'>レシピ一覧を見る</Link>
        </div>
    )
}
