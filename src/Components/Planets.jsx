import React from 'react';
import './../styles/styles.css';
import Planetcard from './Planetcard';
import { useSelector } from 'react-redux';

const Planets = ()=>{
    const state = useSelector(state=>state.getPlanets);
    return(
        <div className="planetscontainer">
            <Planetcard/>
            <Planetcard/>
            <Planetcard/>
            <Planetcard/>  
            <div style={{padding:"30px"}}>Total Time : {state.tot_time}</div> 
        </div>
    )
}

export default Planets;