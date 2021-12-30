const Planets = {planets : [],dropdownValue :[]};
const vehicle = {};

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
    return state;
}

export const getVehicles = (state=vehicle,actions)=>{
    if(actions.type==="getVehicle"){
        // console.log(actions.payload);
        return {...state,vehicle:actions.payload};
        // return vehicle;
    }
    return state;
}
