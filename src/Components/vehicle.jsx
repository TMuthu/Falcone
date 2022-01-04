import React from "react";
import './../styles/styles.css';
import { storeSelectedVehicle,updateVehicle, mapVehicleToPlanet } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';

const Vehicle = ()=>{

    const dispatch = useDispatch();

    const state = useSelector(state=>state.getVehicles);
    const planetState = useSelector(state=>state.getPlanets); 

    // console.log(state);

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
            dispatch(mapVehicleToPlanet());
            vehicleContainer.style.display = "none";
        }  
        else{
            alert("Require More Milege");
        }
       
    }
    const closeVehicleWindow = ()=>{
        dispatch(updateVehicle("cancelUpdate"));
        vehicleContainer.style.display = "none";
    }
    
    return(
        <div className="vehicleContainer" data-testid="vehicleContainer">
            <div>
                <div className="vehicleCardContainer">
                    {state.vehicle === undefined ? <div>Loading</div> : state.vehicle.map((e)=>{
                    return(
                        <div className="vehicleCard" key={e.name}>
                        <div className="avatar">
                            <p data-testid="vehicleAvatar">{e.name}</p>
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
            <div className="planetDetails">
                <div className="selectedPlanet">Selected Planet: {state.selectedPlanet}</div>
                <div className="distance">Distance to travel: {state.distanceToTravel}</div>
                <div className="cancelVehicleBtn" onClick={()=>{closeVehicleWindow()}}>Cancel</div>
            </div>
        </div>
    )
}

export default  Vehicle;

