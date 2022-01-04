import { screen, render } from "@testing-library/react";
import { Router } from "react-router";
import { Provider } from "react-redux";
import {store} from './../Store/store';
import Search from "./search";
import { MemoryRouter } from 'react-router';

describe("Testing Search Component Elements",()=>{
    beforeEach(()=>{
        render(<MemoryRouter><Provider store={store}><Search/></Provider></MemoryRouter>);
    })
    test("Search button should be visible",()=>{
        const searchBtn = screen.getAllByText("Start Search");
        expect(searchBtn.length).toBe(1);
    })
})