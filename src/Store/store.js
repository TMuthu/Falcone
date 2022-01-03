import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { getPlanets, getVehicles,getResults } from '../Reducers/reducer';

const storeComb = combineReducers({getPlanets,getVehicles,getResults});

export const store = createStore(storeComb,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

