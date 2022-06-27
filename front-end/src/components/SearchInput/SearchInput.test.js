import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "./index.js";

describe("SearchInput tests", () => {
  test("should get search input button by class", () => {
    render(<SearchInput/>);

    const searchButton = screen.getByRole('button', {name: "Search"});
    expect(searchButton).toBeInTheDocument();
  });

  

});