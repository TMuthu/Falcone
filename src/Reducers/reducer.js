const Planets = {planets : [],dropdownValue :[],tot_time:0};
const vehicles = {vehicle : [],dupVehicle : [],updateVehicle : "",PlanettoVehicle : [],selectedPlanet : "",distanceToTravel:0, selectedVehicle : "", mapPlanetVehicle : {}};
const result = {finalResult:{}};

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

export const storeSelectedplanet = ((planet,d)=>({
    type : "storeSelectedPlanet",
    distance : d,
    payload : planet,
}))

export const storeSelectedVehicle = ((vehicle)=>({
    type : "storeSelectedVehicle",
    payload : vehicle,
}))

export const clearSelectedVehicle = (()=>({
    type : "clearSelectedVehicle",
}))

export const mapVehicleToPlanet = (()=>({
    type : "VehicleToPlanet", 
}))

export const updateVehicle = ((prevVehicle)=>({
    type : "updateVehicle",
    payload : prevVehicle,
}))

export const clearPlanetVehicle = ((planetName)=>({
    type : "clearSelectedPlanetVehicle",
    payload : planetName,
}))

export const setTotalTime = ((tot_time)=>({
    type : "setTime",
    payload : tot_time,
}))

export const storeResult = ((res)=>({
    type : "storeResult",
    payload : res,
}))

export const clearPlanetStore = (()=>({
    type : "planetReset",
}))

export const clearVehicleStore = (()=>({
    type : "vehicleReset",
}))


export const getPlanets = (state=Planets,actions)=>{
    //storing planets and initial dropdown values
    if(actions.type==="getPlanets"){
        let temp = [];
        for(let i=0;i<actions.payload.length;i++){
            temp.push(actions.payload[i].name);
        }
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
    if(actions.type==="setTime"){
        return{...state,tot_time:actions.payload};
    }
    if(actions.type==="planetReset"){
        let temp = [];
        for(let i=0;i<state.planets.length;i++){
            temp.push(state.planets[i].name);
        }
        return {...state,dropdownValue:temp,tot_time:0};
    }
    return state;
}

export const getVehicles = (state=vehicles,actions)=>{
    if(actions.type==="getVehicle"){
        return {...state,vehicle:actions.payload,dupVehicle:actions.payload};
    }
    if(actions.type==="storeSelectedPlanet"){
        return {...state,selectedPlanet:actions.payload,distanceToTravel:actions.distance};
    }
    if(actions.type==="clearSelectedVehicle"){
        return{...state,selectedVehicle:""};
    }
    if(actions.type==="storeSelectedVehicle"){
        return{...state,selectedVehicle:actions.payload};   
    }
    if(actions.type==="VehicleToPlanet"){
        let temp = [];
        let temp1 = {...state.mapPlanetVehicle};
        for(let i=0;i<state.vehicle.length;i++){
            if(state.vehicle[i].name === state.selectedVehicle){
                state.vehicle[i].total_no = state.vehicle[i].total_no - 1;
            }
            temp.push(state.vehicle[i]);
        }
        temp1[state.selectedPlanet] = state.selectedVehicle;
        return {...state,vehicle:temp, mapPlanetVehicle : temp1};
    }
    if(actions.type==="updateVehicle"){
        let temp = [];
        let uv = "";
        if(actions.payload === "cancelUpdate"){
            for(let i=0;i<state.vehicle.length;i++){
                if(state.vehicle[i].name === state.updateVehicle){
                    state.vehicle[i].total_no = state.vehicle[i].total_no - 1;
                }
                temp.push(state.vehicle[i]);
            }
            uv = "updateCencelled";
        }
        else{
            for(let i=0;i<state.vehicle.length;i++){
                if(state.vehicle[i].name === actions.payload){
                    uv = actions.payload;
                    state.vehicle[i].total_no = state.vehicle[i].total_no + 1;
                }
                temp.push(state.vehicle[i]);
            }
        }
        
        return {...state,vehicle:temp,updateVehicle:uv};
    }
    if(actions.type==="clearSelectedPlanetVehicle"){
        let temp = {...state.mapPlanetVehicle};
        delete temp[actions.payload];
        return{...state,selectedPlanet:"",selectedVehicle:"",mapPlanetVehicle:temp}
    }

    if(actions.type==="vehicleReset"){
        // console.log("reset called");
        // console.log(state.dupVehicle);
        return {...state,vehicle : state.dupVehicle,PlanettoVehicle : [],selectedPlanet : "",distanceToTravel:0, selectedVehicle : "", mapPlanetVehicle : {}};
    }

    return state;
}

export const getResults = (state=result,actions)=>{
    if(actions.type==="storeResult"){
        return {...state,finalResult:actions.payload};
    }
    return state;
}
