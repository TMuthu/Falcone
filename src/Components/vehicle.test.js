import {render, screen, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from './../Store/store';
import Vehicle from './vehicle';

describe("Testing PlanetCard Component",()=>{
    beforeEach(()=>{
        store.getState().getVehicles.vehicle = [{"name":"Space pod","total_no":2,"max_distance":200,"speed":2}];
        store.getState().getVehicles.selectedPlanet = "Donlon";
        store.getState().getVehicles.distanceToTravel = "100";
        render(<Provider store={store}><Vehicle/></Provider>)
    })
    test("vehicleCard should be displayed",()=>{
        const vehicleCard = screen.getByTestId("vehicleContainer");
        expect(vehicleCard).toBeVisible();
    })
    test("Vehicle avatar should be displayed",()=>{
        const vehicleAvatar = screen.getByTestId("vehicleAvatar");
        expect(vehicleAvatar.innerHTML).toBe("Space pod");
    })
    test("Vehicle Distance Detail should be available",()=>{
        const vehicleName = screen.getByText("Max Distance : 200")
        expect(vehicleName).toBeVisible();
    })
    test("Vehicle speed Detail should be available",()=>{
        const vehicleSpeed = screen.getByText("Speed : 2")
        expect(vehicleSpeed).toBeVisible();
    })
    test("Vehicle availability Detail should be available",()=>{
        const vehicleNo = screen.getByText("Total No : 2")
        expect(vehicleNo).toBeVisible();
    })
    test("Choose button should be available",()=>{
        const chooseBtn = screen.getByText("Choose")
        expect(chooseBtn).toBeVisible();
    })
    test("Selected Planet details should be displayed",()=>{
        const selectedPlanet = screen.getByText("Selected Planet: Donlon");
        expect(selectedPlanet).toBeVisible();
    })
    test("Selected planet distance should be displayed",()=>{
        const distance = screen.getByText("Distance to travel: 100");
        expect(distance).toBeVisible();
    })
    test("Cancel button should be displayed",()=>{
        const cancelBtn = screen.getByText("Cancel");
        expect(cancelBtn).toBeVisible();
    })
})