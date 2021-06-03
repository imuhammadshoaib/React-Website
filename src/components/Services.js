import React, { Component } from 'react';
import sData from './sData';
import Card from './Card';
class Services extends Component{

    render(){
        return(
           
            <div className="container">
                 <h1 className="text-center">Our Services</h1>
            <div class="row">
               
            {
                sData.map((value , index)=>{
                    return <Card key={index}
                        sImageSrc = {value.imgSrc}
                        stitle = {value.title}
                        sdesc = {value.desc}
                        slink = {value.link}
                    />
                })
                
            }
            </div>
            </div>
        )
    }

}

export  default Services;