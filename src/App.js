import { useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import Planets from './Components/Planets';
import Vehicle from './Components/vehicle';
import VehicleAnim from './Components/vehicleAnim';
import Search from './Components/search';
import Success from './Components/success';
import Failure from './Components/failure';
import Result from './Components/result';
import { fetchPlanets } from './Services/loadPlanets';
import { fetchVehicles } from './Services/loadVehicles';
import { planetAction,vehicleAction } from './Reducers/reducer';
import { useDispatch } from 'react-redux';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

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
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<div><Header headertitle="Finding Falcone"/><Planets/><Vehicle/><Search/><VehicleAnim/>  </div>}/> 
          <Route path="/result" element={<div><Header headertitle="Finding Falcone"/><Result/></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
