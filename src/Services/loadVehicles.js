export const fetchVehicles = async ()=>{
    const data = await fetch("https://findfalcone.herokuapp.com/vehicles").then(res=>res.json()).then(data=>data).catch((err)=>{console.log(err)});
    return data;
}