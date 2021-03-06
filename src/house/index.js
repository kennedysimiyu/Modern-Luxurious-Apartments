import React, { Component } from 'react';
import "./house.css";
import house1 from '../img/house-1.png'; 

class house extends Component {
    state = {}
    render() {
        const house = this.props.house;
        return (
            <div>
                <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
                </div>
                <div className="row">
                <h3 className="col-md-12">{house.address}</h3>
                </div>
                <div className="row">
                <div className="col-md-7">
                    <img className="house1" src={house1} alt="House"/>
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    </div>
                </div>
            </div>
         )
    }
}

export default house;