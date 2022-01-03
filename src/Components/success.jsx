import React from "react";
import successimg from './../Assets/success.jpg';
import './../styles/styles.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearVehicleStore,clearPlanetStore } from "../Reducers/reducer";

const Success = ()=>{
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const resetAll = ()=>{
        dispatch(clearPlanetStore());
        dispatch(clearVehicleStore());
        navigate('/')
    }
    return(
        <div className="successPage">
            <div className="resultBox">
                <div className="imagecontainer">
                    <img src={successimg} alt="successImage" width="100%" height="100%"></img>
                </div>
                <div className="resultcontainer">
                        <div className="resultText">
                            Success! Congratulations. You found a planet.
                        </div>
                        <div>Planet : Donlon</div>
                        <div>Time Taken : 200</div>
                        <div className="startAgainBtn" onClick={()=>{resetAll()}}>Start Again</div>
                </div>
            </div>
            
        </div>
    )
}

export default Success;