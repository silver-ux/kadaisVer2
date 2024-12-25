import React from 'react'
import { Main } from './components/section/Main';
import { Heading } from './components/section/Heading';
import { RecipeImg } from './components/section/RecipeImg';
import { ToRecipeList } from './components/section/ToRecipeList';
import { SnsList } from './components/section/SnsList';
import { Footer } from './components/section/Footer';
import { ToTopBtn } from '../components/ToTopBtn';

const page = () => {
    return (
        <div>
            <Main />
            <Heading />
            <RecipeImg />
            <ToRecipeList />
            <ToTopBtn />
            <SnsList />
            <Footer />
        </div>
    )
}

export default page;