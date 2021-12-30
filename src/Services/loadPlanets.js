
export const fetchPlanets = async ()=>{
    const data = await fetch("https://findfalcone.herokuapp.com/planets").then(res=>res.json()).then(data=>data).catch((err)=>{console.log(err)});
    return data;
}

