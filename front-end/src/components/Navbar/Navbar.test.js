import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./index.js";

describe("Navbar test", () => {
  test("if the button renders", () => {
    render(<Navbar setActivePage={jest.fn()}/>)

    const homeButton = screen.getByRole('button', {name: "Home"});
    const searchButton = screen.getByRole('button', {name: "Search"});
    expect(searchButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  })

  test("if button calls function on click", () =>  {
    const testFunction = jest.fn()
    render(<Navbar setActivePage={testFunction}/>);

    const searchButton = screen.getByRole('button', {name: "Search"});
    fireEvent.click(searchButton);
    expect(testFunction).toHaveBeenCalled();
  })

  test("if logo image renders", () => {
    render(<Navbar setActivePage={jest.fn()}/>);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  })

});