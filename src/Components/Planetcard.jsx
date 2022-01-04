import React from 'react';
import './../styles/styles.css';
import { storeSelectedplanet,updatedropdownValue,clearSelectedVehicle,storeSelectedVehicle, clearPlanetVehicle, setTotalTime,updateVehicle } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';
var selectedVehicleReference;

const Planetcard = ()=>{

    var ddvalues = [];
    var tot_time = 0;
    const dispatch = useDispatch();
    const state = useSelector(state=>state.getPlanets); 
    const vehicleState = useSelector(state=>state.getVehicles); 
    
    //calculating the total time from the values from reducer
    if(Object.keys(vehicleState.mapPlanetVehicle).length !== 0 ){
    
        let distance;
        let speed;
        let planetDistance = {};
        let vehicleSpeed = {};
        for(let i=0;i<state.planets.length;i++){
            planetDistance[state.planets[i].name] = state.planets[i].distance;
        } 
        for(let j=0;j<vehicleState.vehicle.length;j++){
            vehicleSpeed[vehicleState.vehicle[j].name] = vehicleState.vehicle[j].speed;
        }

        for(let planet in vehicleState.mapPlanetVehicle){
             distance = planetDistance[planet];
             speed = vehicleSpeed[vehicleState.mapPlanetVehicle[planet]];
             tot_time+=(distance/speed);
        }
        if(state.tot_time !== tot_time){
            dispatch(setTotalTime(tot_time));
        }
        
    }
    else{
        if(state.tot_time !== tot_time){
            dispatch(setTotalTime(0));
        }
    }
    
    const vehicleContainer = document.querySelector('.vehicleContainer');
    //displaying selected vehicle on planet card
    if(selectedVehicleReference!==undefined){
        selectedVehicleReference.innerHTML = vehicleState.selectedVehicle;
    }

    //Creates a array of planet values with selected values
    const getSelectedText = (e=0)=>{
        
        if(e===0){
            //This part will execute when this function called from clearText() method.
            const planetInputs = document.querySelectorAll('.planetinput');
            ddvalues = [planetInputs[0].value, planetInputs[1].value, planetInputs[2].value, planetInputs[3].value]
            dispatch(updatedropdownValue(ddvalues))
        }
        else if(e.target.value === "" || e.target.value==="Donlon" || e.target.value==="Enchai"||e.target.value==="Sapir"|| e.target.value==="Jebing" || e.target.value==="Lerbin"||e.target.value==="Pingasor"){
            if(e.target.value !== ""){
                e.target.nextElementSibling.nextElementSibling.style.display = "block";
            }
            else{
                e.target.nextElementSibling.nextElementSibling.style.display = "none";
                clearSelectedPlanetVehicle(vehicleState.selectedPlanet);
                e.target.parentNode.nextElementSibling.innerHTML = "Choose Vehicle";
                dispatch(updateVehicle(e.target.parentNode.nextElementSibling.nextElementSibling.innerHTML));
                e.target.parentNode.nextElementSibling.nextElementSibling.innerHTML = "";
            }
            const planetInputs = document.querySelectorAll('.planetinput');
            ddvalues = [planetInputs[0].value, planetInputs[1].value, planetInputs[2].value, planetInputs[3].value]
            dispatch(updatedropdownValue(ddvalues))
        } 

    }
    //Cleares a planet name after clicking on clearSelection button
    const clearSelectedPlanetVehicle = (planetName)=>{
        dispatch(clearPlanetVehicle(planetName));
    }

    //clear a value present in planet dropdown
    const clearText = (e)=>{
        if(e.target.classList.contains("clear")){
            e.stopPropagation();
            e.target.style.display = "none";
            clearSelectedPlanetVehicle(e.target.previousElementSibling.previousElementSibling.value);
            e.target.previousElementSibling.previousElementSibling.value = "";      
            getSelectedText();
            e.target.parentNode.nextElementSibling.innerHTML = "Choose Vehicle";
            dispatch(updateVehicle(e.target.parentNode.nextElementSibling.nextElementSibling.innerHTML));
            e.target.parentNode.nextElementSibling.nextElementSibling.innerHTML = " ";
        } 
    }

    //choose vehicle for selected planet
    const chooseVehicle = (e)=>{
        let distance;
        for(var i=0;i<state.planets.length;i++){
            if(state.planets[i].name === e.target.previousElementSibling.childNodes[0].value){
                distance = state.planets[i].distance;
                break;
            }
        }
        if(e.target.previousElementSibling.childNodes[0].value === ""){
            alert("Please Select Planet");
        }
        else{
            if(e.target.innerHTML === "Choose Another"){
                dispatch(storeSelectedplanet(e.target.previousElementSibling.childNodes[0].value,distance));
                dispatch(updateVehicle(e.target.nextElementSibling.innerHTML));
                selectedVehicleReference = e.target.nextElementSibling;
                vehicleContainer.style.display = "flex";
                e.target.innerHTML = "Choose Another";
                dispatch(storeSelectedVehicle(e.target.nextElementSibling.innerHTML));
                
            }
            else{
                dispatch(storeSelectedplanet(e.target.previousElementSibling.childNodes[0].value,distance));
                selectedVehicleReference = e.target.nextElementSibling;
                vehicleContainer.style.display = "flex";
                e.target.innerHTML = "Choose Another";
                dispatch(clearSelectedVehicle());
            }
        } 
    }

    return( 
        <div>
        <div className='planetcard' data-testid="planetCard">
           <div className="dropdown">
                <input title="choose planet" className="planetinput" type="text" name="planets" list="planetslist" placeholder="Choose Planet" onChange={(e)=>{getSelectedText(e)}}/>
                    <datalist id="planetslist">
                        {state.dropdownValue.map((e)=>{
                            return(
                            <option value={e} key={e} data-testid="planetValues">{e}</option> )
                        })}
                    </datalist> 
                <span className="clear" onClick={(e)=>{clearText(e)}} title="Clear Selection"> 
                x
                </span>
           </div>
           <div className="vehicle" id="vehContainer" onClick={(e)=>{chooseVehicle(e)}}>Choose Vehicle</div>
           <div className="choosedVehicle"></div>
        </div>
        
        </div>
    )
}

export default Planetcard;