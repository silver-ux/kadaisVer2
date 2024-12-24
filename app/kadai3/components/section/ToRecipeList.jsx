import Link from 'next/link'
import React from 'react'

export const ToRecipeList = () => {
    return (
        <div className='py-[60px] text-center'>
            <Link href={"https://cookpad.com/jp"} rel="noopener noreferrer" target="_blank" className='recipe-list'>レシピ一覧を見る</Link>
        </div>
    )
}
