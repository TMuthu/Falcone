import React from 'react';
import './../styles/animStyles.css';
import motorcycle from './../Assets/motorcycle.png';

const VehicleAnim = ()=>{
    return(
        <div className="animContainer">
            <div><img src={motorcycle} width="30px" height="30px"></img></div>
        </div>
    )
}
export default VehicleAnim;