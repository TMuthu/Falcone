import React from "react";
import './../styles/styles.css';
import { storeSelectedVehicle } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';

const Vehicle = ()=>{

    const dispatch = useDispatch();

    const state = useSelector(state=>state.getVehicles);
    const planetState = useSelector(state=>state.getPlanets); 

    console.log(state);

    const vehicleContainer = document.querySelector('.vehicleContainer');

    const getPlanetMilege = (planet)=>{
        // console.log(planet);
        for(var i=0;i<planetState.planets.length;i++){
            if(planet === planetState.planets[i].name){
                return planetState.planets[i].distance;
            }
        }
    }

    const chooseFunc = (vehicleName,vehicleMaxDistance,total_no)=>{
        
        const planet = state.selectedPlanet;
        const planetMilege = getPlanetMilege(planet);

        if(total_no === 0){
            alert("This vechicle is not available");
        }
        else if(planetMilege <= vehicleMaxDistance){
            dispatch(storeSelectedVehicle(vehicleName));
            vehicleContainer.style.display = "none";
        }  
        else{
            alert("Require More Milege");
        }

        // console.log(planetMilege);
        // console.log(vehicleName);
        
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
                        <div onClick={()=>{chooseFunc(e.name,e.max_distance,e.total_no)}}>Choose</div>
                    </div>  
                </div>)
                })}
            </div>
        </div>
    )
}

export default  Vehicle;

