import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Common extends Component{

    render(){
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <h1 className="text-sm-center">{this.props.name}</h1>
                        <Link to={this.props.visit}>{this.props.button}</Link>
                    </div>  
                    <div className="col-lg-6 offset-xl-1 mt-5">
                        <img className="animate-hero" src={this.props.imgSrc} alt="hero-image"/>
                    </div>
                </div>
            </div>
        )
    }

}

export  default Common;