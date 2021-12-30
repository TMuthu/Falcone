import React from 'react';
import './../styles/styles.css';
import { storeSelectedplanet,updatedropdownValue, clearPlanetVehicle } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';
var selectedVehicleReference;

const Planetcard = ()=>{

    var ddvalues = [];
    
    
    const dispatch = useDispatch();
    const state = useSelector(state=>state.getPlanets); 
    const vehicleState = useSelector(state=>state.getVehicles); 
    // console.log(vehicleState.selectedPlanet);
    const vehicleContainer = document.querySelector('.vehicleContainer');
    if(selectedVehicleReference!==undefined){
        selectedVehicleReference.innerHTML = vehicleState.selectedVehicle;
    }
    // console.log(selectedVehicleReference);

    const getSelectedText = (e=0)=>{
        
        if(e===0){
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
            }
            const planetInputs = document.querySelectorAll('.planetinput');
            ddvalues = [planetInputs[0].value, planetInputs[1].value, planetInputs[2].value, planetInputs[3].value]
            dispatch(updatedropdownValue(ddvalues))
        } 

    }
    const clearSelectedPlanetVehicle = (planetName)=>{
        console.log(planetName);
        dispatch(clearPlanetVehicle(planetName));
    }
    const clearText = (e)=>{
        if(e.target.classList.contains("clear")){
            e.stopPropagation();
            e.target.style.display = "none";
            clearSelectedPlanetVehicle(e.target.previousElementSibling.previousElementSibling.value);
            e.target.previousElementSibling.previousElementSibling.value = "";      
            getSelectedText();
            e.target.parentNode.nextElementSibling.innerHTML = "Choose Vehicle";
            e.target.parentNode.nextElementSibling.nextElementSibling.innerHTML = " ";
        } 
    }

    const chooseVehicle = (e)=>{
        const planetInputs = document.querySelector('.planetinput');
        dispatch(storeSelectedplanet(e.target.previousElementSibling.childNodes[0].value));
        selectedVehicleReference = e.target.nextElementSibling;
        vehicleContainer.style.display = "flex";
        e.target.innerHTML = "Choose Another";
    }

    return( 
        <div className='planetcard'>
           <div className="dropdown">
                <input title="choose planet" className="planetinput" type="text" name="planets" list="planetslist" placeholder="Choose Planet" onChange={(e)=>{getSelectedText(e)}}/>
                    <datalist id="planetslist">
                        {state.dropdownValue.map((e)=>{
                            return(
                            <option value={e} key={e}>{e}</option> )
                        })}
                    </datalist> 
                <span className="clear" onClick={(e)=>{clearText(e)}} title="Clear Selection">
                    x
                </span>
           </div>
           <div className="vehicle" id="vehContainer" onClick={(e)=>{chooseVehicle(e)}}>Choose Vehicle</div>
           <div className="choosedVehicle"></div>
        </div>
    )
}

export default Planetcard;