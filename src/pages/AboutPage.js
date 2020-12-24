import React from 'react';
import Hero from '../Components/Hero.js';
import Content from '../Components/Content';
function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hi there, my name is Santiago Hernandez.  I'm a Software Developer with e</p>
            </Content>
        </div>
    )

}

export default AboutPage;