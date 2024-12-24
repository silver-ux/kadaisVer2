import React from 'react'
import { Main } from './components/section/Main';
import { Heading } from './components/section/Heading';
import { RecipeImg } from './components/section/RecipeImg';

const page = () => {
    return (
        <>
            <Main />
            <Heading />
            <RecipeImg />
        </>
    )
}

export default page;