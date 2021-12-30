import { useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import Planets from './Components/Planets';
import Vehicle from './Components/vehicle';
import VehicleAnim from './Components/vehicleAnim';
import { fetchPlanets } from './Services/loadPlanets';
import { fetchVehicles } from './Services/loadVehicles';
import { planetAction,vehicleAction } from './Reducers/reducer';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  //fetching planets and vehicles details
  useEffect(async ()=>{
     const planets = await fetchPlanets();
     dispatch(planetAction(planets));

     const vehicles = await fetchVehicles();
     dispatch(vehicleAction(vehicles));

  },[])

  return (
    
      <div className="App">
          <Header headertitle="Finding Falcone"/>
          <Planets/>
          <VehicleAnim/>  
          <Vehicle /> 
      </div>
    
  );
}

export default App;
