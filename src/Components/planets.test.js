import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Planets from "./Planets";
import {store} from './../Store/store';

describe("testing planets component",()=>{
    beforeEach(async ()=>{
        await render(<Provider store={store}><Planets/></Provider>);
    });

    test("input dropdown should be displayed on planet card",()=>{
        const planetDropDown = screen.getAllByTitle('choose planet');
        expect(planetDropDown.length).toBe(4);
    })

    test("Choose Vehicle button should be displayed",()=>{
        const chooseVehicleBtns = screen.getAllByText("Choose Vehicle");
        expect(chooseVehicleBtns.length).toBe(4);
    })
})