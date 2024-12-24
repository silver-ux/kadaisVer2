import React from 'react'
import { Header } from './components/section/Header';
import { Main } from './components/section/Main';
import { About } from './components/section/About';
import { Bicycle } from './components/section/Bicycle';
import { Footer } from './components/section/Footer';

const page = () => {
    return (
        <div className='font-[Meiryo]'>
            <Header />
            <Main />
            <About />
            <Bicycle />
            <Footer />
        </div>
    )
}

export default page;
