import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load button inside contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    
    });
    
    test("Should load button inside contact component by text submit", () => {
        render(<Contact />);
    
        const buttonText = screen.getByText("Submit");
    
        //Assertion
        expect(buttonText).toBeInTheDocument();
    
    });
    
    describe("Testing input element in contact Page", () => {

        it("Should load button inside contact component by placeholder text", () => {
            render(<Contact />);
        
            const inputName = screen.getByPlaceholderText("name");
        
            //Assertion
            expect(inputName).toBeInTheDocument();
        
        });
        
        it("Should load 2 input boxes on the contact component", () => {
        
            render(<Contact />)
        
            //Querying
            const inputBoxes = screen.getAllByRole("textbox"); // When there is multiple elements we need to use getAllbyRole
        
            //console.log('inputBoxes',inputBoxes ); //It returns a react JS element
        
            expect(inputBoxes.length).toBe(2);
            expect(inputBoxes.length).not.toBe(3);
        });

    });
    
});
