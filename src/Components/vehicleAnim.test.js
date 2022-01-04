import { render,screen } from "@testing-library/react";
import VehicleAnim from './vehicleAnim';

test("testing searching loading animation",()=>{
    render(<VehicleAnim/>);
    const SearchPage = screen.getByTestId("searchLoaderImg");
    expect(SearchPage).toBeInTheDocument();
})