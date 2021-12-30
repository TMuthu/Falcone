import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { getPlanets, getVehicles } from '../Reducers/reducer';

const storeComb = combineReducers({getPlanets,getVehicles});

export const store = createStore(storeComb);

