import React, { Component } from 'react';
import heroImage from '../img/hero.png';
class Home extends Component{

    render(){
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <h1 className="text-sm-center">Welcome Home</h1>
                    </div>
                    <div className="col-lg-6 offset-xl-1 mt-5">
                        <img className="animate-hero" src={heroImage} alt="hero-image"/>
                    </div>
                </div>
            </div>
        )
    }

}

export  default Home;