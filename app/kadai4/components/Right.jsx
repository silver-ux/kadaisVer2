import React from 'react'
import { Desc } from './Desc'
import { Zairyo } from './Zairyo'
import { HowToMake } from './HowToMake'

export const Right = () => {
    return (
        <div className='container-layout pt-[45px] 834:w-[50%]'>
            <Desc />
            <Zairyo />
            <HowToMake />
        </div>
    )
}
