import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "./SearchBar";

test("renders search input and button", () => {
  act(() => {
    render(<SearchBar onSearch={() => {}} />);
  });
  const inputElement = screen.getByPlaceholderText(/Enter city name/i); // Ensure the placeholder text matches the component
  const buttonElement = screen.getByText(/search/i);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("calls onSearch with input value when button is clicked", () => {
  const handleSearch = jest.fn();
  act(() => {
    render(<SearchBar onSearch={handleSearch} />);
  });
  const inputElement = screen.getByPlaceholderText(/Enter city name/i); // Ensure the placeholder text matches the component
  const buttonElement = screen.getByText(/search/i);
  fireEvent.change(inputElement, { target: { value: "Maputo" } });
  fireEvent.click(buttonElement);
  expect(handleSearch).toHaveBeenCalledWith("Maputo");
});
