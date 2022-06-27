import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Collapsible from "./index.js";

describe("Collapsible tests", () => {
  test("Should show a description", () => {
    render(<Collapsible resourceLinks={[{link: "Test Link", description: "Test description", contributor: "Test contributor"}]}/>);

    const description = screen.getByText(/Test description/);
    expect(description).toBeInTheDocument();
  });
  test("Should show a contributor", () => {
    render(<Collapsible resourceLinks={[{link: "Test Link", description: "Test description", contributor: "Test contributor"}]}/>);

    const contributor = screen.getByText(/Test contributor/);
    expect(contributor).toBeInTheDocument();
  });
});