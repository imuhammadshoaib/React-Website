import React, { Component } from 'react';
import Common from './Common';
import heroImage from '../img/hero.png';
class About extends Component{

    render(){
        return(
            <Common
                name="About Us"
                imgSrc={heroImage}
                visit="/services"
                btnName="About Us"
            />
        )
    }

}

export  default About;