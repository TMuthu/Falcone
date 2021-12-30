import React from "react";
import './../styles/styles.css';
import { vehicleAction,updatedropdownValue } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';

const Vehicle = ()=>{

    const state = useSelector(state=>state.getVehicles);

    const vehicleContainer = document.querySelector('.vehicleContainer');

    const chooseFunc = ()=>{
        vehicleContainer.style.display = "none";
    }
    

    return(
        <div className="vehicleContainer">
            <div className="vehicleCardContainer">
                {state.vehicle === undefined ? <div>Loading</div> : state.vehicle.map((e)=>{
                return(
                    <div className="vehicleCard" key={e.name}>
                    <div className="avatar">
                        <p>{e.name}</p>
                    </div>
                    <div className="vehicleDetails">
                        <div>Max Distance : {e.max_distance}</div>
                        <div>Speed : {e.speed}</div>
                        <div>Total No : {e.total_no}</div>
                    </div>
                    <div className="vehicleChoose">
                        <div onClick={()=>{chooseFunc()}}>Choose</div>
                    </div>  
                </div>)
                })}
            </div>
        </div>
    )
}

export default  Vehicle;

