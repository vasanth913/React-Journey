import { fireEvent, render , screen} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { Header } from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => 
     Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
     })
);

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn()
        };
      })
    });
  });
it("should load restaurant Menu Component", async()=> {
    await act(async()=> {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
                <Cart />
              </Provider>
            </BrowserRouter> 
        )
    });

    const accordianHeader = screen.getByText("CHICKEN ROLLS (3)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    expect(screen.getByText("🛒0 items")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", {name: "ADD +"});

    for(let i=0; i<2; i++){
        fireEvent.click(addBtns[i]);
    }

    expect(screen.getByText("🛒2 items")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);
});

describe('to check clear cart', () => {
    it('should render empty cart on click of cart button', async () => {
        await act ( async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));

        const clearBtn = screen.getByRole("button", {name: 'Clear'});

        fireEvent.click(clearBtn);
    
        expect(screen.getByText("🛒0 items")).toBeInTheDocument();
    
        expect(screen.getByText('Cart is empty. Add Items to the cart')).toBeInTheDocument();

    });
});