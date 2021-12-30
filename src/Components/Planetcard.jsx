import React from 'react';
import './../styles/styles.css';
import { vehicleAction,updatedropdownValue } from '../Reducers/reducer';
import { useSelector,useDispatch } from 'react-redux';

const Planetcard = ()=>{

    var ddvalues = [];
    
    const dispatch = useDispatch();
    const state = useSelector(state=>state.getPlanets);  

    const vehicleContainer = document.querySelector('.vehicleContainer');
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

    const clearText = (e)=>{
        if(e.target.classList.contains("clear")){
            e.stopPropagation();
            e.target.style.display = "none";
            e.target.previousElementSibling.previousElementSibling.value = "";      
            getSelectedText();
        } 
    }

    const chooseVehicle = ()=>{
        const planetInputs = document.querySelector('.planetinput');
        console.log(planetInputs.value)
        vehicleContainer.style.display = "flex";
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
           <div className="vehicle" id="vehContainer" onClick={()=>{chooseVehicle()}}>Choose Vehicle</div>
           <div className="choosedVehicle"></div>
        </div>
    )
}

export default Planetcard;