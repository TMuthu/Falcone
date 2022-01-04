import React from "react";
import './../styles/styles.css';
import loadToken from "../Services/loadToken";
import getResult from "../Services/getResult";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { storeResult } from "../Reducers/reducer";
import { useNavigate } from "react-router-dom";

const Search = ()=>{

    const dispatch = useDispatch();
    const state = useSelector(state=>state.getVehicles);
    let navigate = useNavigate();
    
    const searchJpg = document.querySelector('.animContainer');
    const Search = async ()=>{
        //fetch token and results
        if(Object.keys(state.mapPlanetVehicle).length !== 4){
            alert("Please Select all four planets to search");
        }
        else{
            searchJpg.style.display = "flex";
            let planets = [];
            let vehicles = [];
            for(let i in state.mapPlanetVehicle){
                planets.push(i);
                vehicles.push(state.mapPlanetVehicle[i]);
            }
            const tokenResponse = await loadToken();
            const input = {token:tokenResponse.token,"planet_names":planets,"vehicle_names":vehicles};
            setTimeout(async ()=>{
                const result = await getResult(JSON.stringify(input));
                dispatch(storeResult(result));
            },5000);
            setTimeout(()=>{
                navigate('/result');
            },7000);
        }  
    }
    return(
        <div className="searchContainer">
            <div className="searchBtn" onClick={()=>{Search()}}>Start Search</div>
        </div>
    )
}

export default Search;