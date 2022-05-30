import '../../App.css'
import HeroSection from '../HeroSection'
import React from 'react';
import Cards from '../Cards';
import PlayVideo from '../PlayVideo';

function Home() {
    return (
        <>
        <HeroSection />
        <PlayVideo />
        <Cards />
        </>
    )
}

export default Home;