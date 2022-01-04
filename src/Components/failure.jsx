import React from "react";
import errorimg from './../Assets/error.jpg';
import './../styles/styles.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { clearVehicleStore,clearPlanetStore } from "../Reducers/reducer";
import { useSelector } from "react-redux";

const Failure = ()=>{

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const statePlanet = useSelector(state=>state.getPlanets);

    //clears planet and vehicle store
    const resetAll = ()=>{
        dispatch(clearPlanetStore());
        dispatch(clearVehicleStore());
        navigate('/')
    }

    return(
        <div className="successPage">
            <div className="resultBox">
                <div className="imagecontainer">
                    <img src={errorimg} alt="successImage" width="100%" height="100%"></img>
                </div>
                <div className="resultcontainer">
                        <div className="resultText">
                            Awww....! Don't Cry. Falcone is not there.
                        </div>
                        <div data-testid="resultTime">Time Taken : {statePlanet.tot_time}</div>
                        <div className="startAgainBtn" onClick={()=>{resetAll()}}>Start Again</div>
                </div>
            </div>
            
        </div>
    )
}

export default Failure;