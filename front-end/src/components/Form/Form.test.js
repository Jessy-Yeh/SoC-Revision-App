import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./index.js";

describe("Form tests", () => {
  test("should get submit input button by class", () => {
    render(<Form categories={["React"]}/>);

    const submitButton = screen.getByRole('button', {name: "Submit"});
    expect(submitButton).toBeInTheDocument();
  });
});