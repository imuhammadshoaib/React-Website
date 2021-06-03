import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Card extends Component{
    render(){
        return(
            <>
            <div className="col-md-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src={this.props.sImageSrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.stitle}</h5>
                        <p className="card-text">{this.props.sdesc}</p>
                        <NavLink to={this.props.slink} className="btn btn-primary">Read More</NavLink>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Card;