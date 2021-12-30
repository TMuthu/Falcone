const Planets = {planets : [],dropdownValue :[]};
const vehicles = {vehicle : [],PlanettoVehicle : [],selectedPlanet : "", selectedVehicle : "", mapPlanetVehicle : {}};

export const planetAction = ((data)=>({
    type:"getPlanets",
    payload:data,
}))

export const updatedropdownValue = ((e)=>({
    type:"Changevalue",
    valueText : e,
}))

export const vehicleAction = ((data)=>({
    type:"getVehicle",
    payload:data,
}))

export const storeSelectedplanet = ((planet)=>({
    type : "storeSelectedPlanet",
    payload : planet,
}))

export const storeSelectedVehicle = ((vehicle)=>({
    type : "storeSelectedVehicle",
    payload : vehicle,
}))

export const clearPlanetVehicle = ((planetName)=>({
    type : "clearSelectedPlanetVehicle",
    payload : planetName,
}))

export const getPlanets = (state=Planets,actions)=>{
    //storing planets and initial dropdown values
    if(actions.type==="getPlanets"){
        let temp = [];
        for(let i=0;i<actions.payload.length;i++){
            temp.push(actions.payload[i].name);
        }
        console.log(actions.payload);
        return {...state,planets:actions.payload,dropdownValue:temp};
    }
    //updating dropdown after selection
    else if(actions.type==="Changevalue"){
        let temp = [];
        for(let i=0;i<state.planets.length;i++){
            let flag = true;
            for(let j=0;j<actions.valueText.length;j++){
                if(state.planets[i].name === actions.valueText[j]){
                    flag = false;
                    break;
                }
            }
            if(flag){
                temp.push(state.planets[i].name);
            }
        }
        return {...state,dropdownValue:temp}
    }
    return state;
}

export const getVehicles = (state=vehicles,actions)=>{
    if(actions.type==="getVehicle"){
        // console.log(actions.payload);
        return {...state,vehicle:actions.payload};
        // return vehicle;
    }
    if(actions.type==="storeSelectedPlanet"){
        return {...state,selectedPlanet:actions.payload};
    }
    if(actions.type==="storeSelectedVehicle"){
        let temp = [];
        let temp1 = {...state.mapPlanetVehicle};
        for(let i=0;i<state.vehicle.length;i++){
            if(state.vehicle[i].name === actions.payload){
                console.log("Inside");
                state.vehicle[i].total_no = state.vehicle[i].total_no - 1;
            }
            temp.push(state.vehicle[i]);
        }
        temp1[state.selectedPlanet] = actions.payload;
        return {...state,vehicle:temp,selectedVehicle:actions.payload,mapPlanetVehicle : temp1};
    }

    if(actions.type==="clearSelectedPlanetVehicle"){
        let temp = {...state.mapPlanetVehicle};
        delete temp[actions.payload];
        return{...state,selectedPlanet:"",selectedVehicle:"",mapPlanetVehicle:temp}
    }
    
    return state;
}
