import {render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from './../Store/store';
import Planetcard from './Planetcard';

describe("Testing PlanetCard Component",()=>{
    beforeEach(()=>{
        store.getState().getPlanets.dropdownValue = ["Donlon","Sabir"]
        render(<Provider store={store}><Planetcard/></Provider>)
    })
    test("PlanetCard should be displayed",()=>{
        const planetCard = screen.getByTestId("planetCard");
        expect(planetCard).toBeVisible();
    })
    test("Planets should be available in dropdown",()=>{
        const planetValues = screen.getAllByTestId("planetValues");
        expect(planetValues.length).toBe(2);
    })
    test("Clear Selection should be available",()=>{
        const clearSelectionDiv = screen.getByText("x");
        expect(clearSelectionDiv).toBeVisible();
    })
    test("choose vehicle button should be available",()=>{
        const chooseVehicleBtn = screen.getByText("Choose Vehicle");
        expect(chooseVehicleBtn).toBeVisible();
    })
})