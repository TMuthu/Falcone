import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Result from "./result";
import { MemoryRouter } from 'react-router';

import {store} from './../Store/store';


describe("Testing Result component elements",()=>{
    beforeEach(async ()=>{
        await render(<MemoryRouter><Provider store={store}><Result/></Provider></MemoryRouter>);
    });
    test("Failure component should be displayed",()=>{
        const failureText = screen.getByText("Awww....! Don't Cry. Falcone is not there.");
        expect(failureText).toBeInTheDocument();
    })
})

describe("Testing Result component elements",()=>{
    beforeEach(async ()=>{
        store.getState().getResults.finalResult['status'] = "success";
        await render(<MemoryRouter><Provider store={store}><Result/></Provider></MemoryRouter>);
    });
    test("Success component should be displayed",()=>{
        const successText = screen.getByText("Success! Congratulations. You found a Falcone.");
        expect(successText).toBeInTheDocument();
    })
})

