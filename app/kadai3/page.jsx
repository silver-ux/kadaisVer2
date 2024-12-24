import React from 'react'
import { Main } from './components/section/Main';
import { Heading } from './components/section/Heading';
import { RecipeImg } from './components/section/RecipeImg';
import { ToRecipeList } from './components/section/ToRecipeList';
import { SnsList } from './components/section/SnsList';
import { Footer } from './components/section/Footer';

const page = () => {
    return (
        <>
            <Main />
            <Heading />
            <RecipeImg />
            <ToRecipeList />
            <SnsList />
            <Footer />
        </>
    )
}

export default page;