import React from 'react';
import './../styles/animStyles.css';
import searching from './../Assets/searching.gif';

const VehicleAnim = ()=>{
    return(
        <div className="animContainer">
            <div className="searchingText">Searching...</div>
            <div><img src={searching} width="400px" height="300vh"></img></div>
        </div>
    )
}
export default VehicleAnim;