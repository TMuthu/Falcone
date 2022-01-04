import React from 'react';
import './../styles/animStyles.css';
import searching from './../Assets/searching.gif';

const VehicleAnim = ()=>{
    return(
        <div className="animContainer">
            <div><img src={searching} width="400px" height="300px" data-testid = "searchLoaderImg"></img></div>
        </div>
    )
}
export default VehicleAnim;