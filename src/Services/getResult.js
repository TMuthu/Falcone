const getResult = (inputObject)=>{
    console.log(inputObject);
    const result = fetch("https://findfalcone.herokuapp.com/find",{method:'POST',headers:{"Accept":"application/json","Content-Type":"application/json"},body:inputObject}).then(res=>res.json()).then(res=>res);
    return result;
}

export default getResult;