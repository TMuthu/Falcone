import React from 'react';
import './../styles/styles.css';
import Planetcard from './Planetcard';
import { getPlanets, planetAction } from './../Reducers/reducer';
import { useSelector } from 'react-redux';

const Planets = ()=>{

    return(
        <div className="planetscontainer">
            <Planetcard/>
            <Planetcard/>
            <Planetcard/>
            <Planetcard/>   
        </div>
    )
}

export default Planets;