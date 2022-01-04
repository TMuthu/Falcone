import {render, screen, fireEvent} from '@testing-library/react';
import Failure from './failure';
import { Router } from "react-router";
import { Provider } from "react-redux";
import {store} from './../Store/store';
import { MemoryRouter } from 'react-router';

describe("Testing Success Component",()=>{
    beforeEach(()=>{
        store.getState().getPlanets.tot_time  = "100";
        render(<MemoryRouter><Provider store={store}><Failure/></Provider></MemoryRouter>);
    })
    test("Failure Msg Should be visible",()=>{
        const successMsg = screen.getByText("Awww....! Don't Cry. Falcone is not there.");
        expect(successMsg).toBeInTheDocument();
    })
    test("Result Total Time should be displayed",()=>{
        const result_time = screen.getByTestId("resultTime");
        expect(result_time.innerHTML).toBe("Time Taken : 100");
    })
    test("Start Again Button Should be displayed",()=>{
        const startAgain = screen.getByText("Start Again");
        expect(startAgain).toBeVisible();
    })
    test("Clicking Start Again should reset store",()=>{
        const startAgain = screen.getByText("Start Again");
        fireEvent.click(startAgain);
        expect(store.getState().getPlanets.tot_time).toBe(0);
    })
})