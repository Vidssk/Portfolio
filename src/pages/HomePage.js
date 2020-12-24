import React from 'react';
import Hero from '../Components/Hero.js';
import Carousel from '../Components/Carousel.js'
function HomePage(props){
    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
        <Carousel/>
        </div>
        );

}

export default HomePage;