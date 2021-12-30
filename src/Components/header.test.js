import {render, screen} from '@testing-library/react';
import Header from './header';

test("should render without an error",()=>{
    render(<Header headertitle="Finding Falcone"/>)
    const headerText = screen.getByTestId("headertest");
    expect(headerText).toBeVisible();
})