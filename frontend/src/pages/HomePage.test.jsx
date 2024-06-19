import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./HomePage";

test("renders HomePage with SearchBar", () => {
  act(() => {
    render(<HomePage isAuthenticated={true} />);
  });
  const inputElement = screen.getByPlaceholderText(/Enter city name/i); // Ensure this matches the component
  expect(inputElement).toBeInTheDocument();
});
