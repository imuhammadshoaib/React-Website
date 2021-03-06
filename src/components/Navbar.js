import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component{

    render(){
        return(
            <>
            <div class="container ">
                <div class="m-0">
                    <nav className="navbar navbar-expand-lg navbar-light p-0 pt-3 pb-3">
                        <NavLink className="navbar-brand" exact to="/">Portfolio</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>    
            </div>
            </>
        )
    }

}

export default Navbar;