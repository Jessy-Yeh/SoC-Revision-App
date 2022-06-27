import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./index.js";

describe("FormReturn tests", () => {
  test("Should show a category", () => {
    render(<Result category="Test category" description="Test description" snippet="Test snippet"/>);

    const category = screen.getByText("Test category");
    expect(category).toBeInTheDocument();
  });
  test("Should show a description", () => {
    render(<Result category="Test category" description="Test description" snippet="Test snippet"/>);

    const description = screen.getByText("Test description");
    expect(description).toBeInTheDocument();
  });
  test("Should show a contributor", () => {
    render(<Result category="Test category" description="Test description" snippet="Test snippet"/>);

    const snippet = screen.getByText("Test snippet");
    expect(snippet).toBeInTheDocument();
  });
});