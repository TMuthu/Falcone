import React from "react";
import successimg from './../Assets/success.jpg';
import './../styles/styles.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { clearVehicleStore,clearPlanetStore } from "../Reducers/reducer";

const Success = ()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const resetAll = ()=>{
        dispatch(clearPlanetStore());
        dispatch(clearVehicleStore());
        navigate('/')
    }
    const statePlanet = useSelector(state=>state.getPlanets);
    const stateResult = useSelector(state=>state.getResults);
    return(
        <div className="successPage">
            <div className="resultBox">
                <div className="imagecontainer">
                    <img src={successimg} alt="successImage" width="100%" height="100%"></img>
                </div>
                <div className="resultcontainer">
                        <div className="resultText">
                            Success! Congratulations. You found a Falcone.
                        </div>
                        <div>Planet : {stateResult.finalResult.planet_name}</div>
                        <div>Time Taken : {statePlanet.tot_time}</div>
                        <div className="startAgainBtn" onClick={()=>{resetAll()}}>Start Again</div>
                </div>
            </div>
            
        </div>
    )
}

export default Success;