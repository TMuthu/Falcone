const loadToken = async ()=>{
    const token = await fetch('https://findfalcone.herokuapp.com/token',{method:'POST',headers:{'Accept':'application/json'},body:""}).then(res=>res.json()).then(res=>res);
    return token;
}

export default loadToken;