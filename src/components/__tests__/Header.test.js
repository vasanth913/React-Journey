import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Header } from '../Header';
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing Header Component", () => {
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
    it("should display the login button", () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
      
        )

        const loginButton = screen.getByRole("button", {name: 'Login'});

        expect(loginButton).toBeInTheDocument();
    })

    it("should render header Component with a Cart Items 0", () => {
      render(
          <Provider store={appStore}>
              <BrowserRouter>
                  <Header />
              </BrowserRouter>
          </Provider>
    
      )

      const cartItems = screen.getByText("🛒0 items");

      expect(cartItems).toBeInTheDocument();
  });

  it("should render header Component with a Items", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
  
    )

    //to match Regex
    const cartItems = screen.getByText(/items/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should change login to logout button on Click", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
  
    )

    const loginButton = screen.getByRole("button", {name: 'Login'});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: 'Logout'});

    expect(logoutButton).toBeInTheDocument();
  });

})