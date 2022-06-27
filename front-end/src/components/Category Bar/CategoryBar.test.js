import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryBar from "./index.js";

describe("CategoryBar tests", () => {
  test("should show a category button", () => {
    render(
      <CategoryBar
        categories={["React"]}
        activeCategory={"React"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByRole("button");
    expect(categoryButton).toBeInTheDocument();
  });

  test("button should have correct text content", () => {
    render(
      <CategoryBar
        categories={["Array Methods"]}
        activeCategory={"React"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByRole("button");
    expect(categoryButton).toHaveTextContent("Array Methods");
  });

  test("button should have correct active class", () => {
    render(
      <CategoryBar
        categories={["Array Methods", "React", "General"]}
        activeCategory={"General"}
        handleToggle={jest.fn()}
      />
    );

    const categoryButton = screen.getByText("General");
    expect(categoryButton).toHaveClass("category-btn active");
  });

  test("a function is called when button is clicked", () => {
    const testFunction = jest.fn();

    render(
      <CategoryBar
        categories={["General"]}
        activeCategory={"General"}
        handleToggle={testFunction}
      />
    );

    const categoryButton = screen.getByRole("button");
    fireEvent.click(categoryButton);

    expect(testFunction).toHaveBeenCalled();
  });
});
