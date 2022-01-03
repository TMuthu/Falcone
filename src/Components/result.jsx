import React from "react";
import { useSelector } from "react-redux";
import Success from "./success";
import Failure from "./failure";

import { useEffect } from "react";
import { fetchPlanets } from "../Services/loadPlanets";
import { fetchVehicles } from "../Services/loadVehicles";
import { useDispatch } from "react-redux";
import { vehicleAction,planetAction } from "../Reducers/reducer";

const Result = ()=>{

    const dispatch = useDispatch();
    const state = useSelector(state=>state.getResults)

    useEffect(async ()=>{
        const planets = await fetchPlanets();
        dispatch(planetAction(planets));
   
        const vehicles = await fetchVehicles();
        dispatch(vehicleAction(vehicles));
   
     },[])


    console.log(state);
    return(
        <div>{state.finalResult.status==="success" ? <Success/> : <Failure/>}
        </div>
    )
}

export default Result;