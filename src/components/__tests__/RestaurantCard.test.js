import { render,screen } from "@testing-library/react";
import RestaurantCard, {withOpenLabel} from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with props Data", () => {
    render(
        <RestaurantCard  resData={MOCK_DATA}/>
    )

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

});

it("should render restaurant card component with withOpenLabel", () => { 
    const Component = withOpenLabel(RestaurantCard);
        render(<Component resData={MOCK_DATA} />);
        const label = screen.getByText("Open");
        expect(label).toBeInTheDocument();
});