import React, { Component } from 'react';
import Common from './Common'
import heroImage from '../img/hero.png';
class Home extends Component{

    render(){
        return(
            <>
            <Common
                name="Welcome to Home"
                imgSrc={heroImage}
                visit="/services"
                btnName="Get Started"
            />
            </>
        )
    }

}

export default Home;