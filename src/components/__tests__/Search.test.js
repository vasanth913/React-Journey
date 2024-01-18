import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Body from "../Body"
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render body component and search functionality", async() => {
   await act(async()=> {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
      );
   })
   
   const cardsBeforeSearch = screen.getAllByTestId("resCard");

   //cards before search

   expect(cardsBeforeSearch.length).toBe(9);

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, {target: {value: "kfc"}});

   expect(searchInput).toHaveValue("kfc");

   //fireEvent.submit(screen.getByTestId("searchInput"));

   await waitFor(() => {
        const cardsAfterSearch = screen.getAllByTestId("resCard");
            
        expect(cardsAfterSearch.length).toBe(9),{timeout: 1000 };
    })

   // expect(searchInputBtn).toBeTruthy();
 
});

it("should render top rated restaurant", async() => {
    await act(async()=> {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
          );
       });
    
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(9);

    const  topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurant"});

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(4);

});