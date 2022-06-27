import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormReturn from "./index.js";

describe("FormReturn tests", () => {
  test("Should show a description", () => {
    render(<FormReturn FormReturnData={[{link: "Test Link", description: "Test description", contributor: "Test contributor"}]}/>);

    const description = screen.getByText(/Test description/);
    expect(description).toBeInTheDocument();
  });
  test("Should show a contributor", () => {
    render(<FormReturn FormReturnData={[{link: "Test Link", description: "Test description", contributor: "Test contributor"}]}/>);

    const contributor = screen.getByText(/Test contributor/);
    expect(contributor).toBeInTheDocument();
  });
});