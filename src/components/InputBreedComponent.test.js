import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import InputBreedComponent from "./InputBreedComponent";

jest.useFakeTimers();

describe("InputBreedComponent", () => {
  it("should call onKeySearch after 1000ms of debounce", async () => {
    const onKeySearch = jest.fn();
    render(<InputBreedComponent onKeySearch={onKeySearch} />);
    const input = screen.getByPlaceholderText("Search Breed Name");

    fireEvent.change(input, { target: { value: "poodle" } });

    jest.advanceTimersByTime(1000);

    await waitFor(() => expect(onKeySearch).toHaveBeenCalledWith("poodle"));
  });

  it("should debounce the input change", () => {
    const onKeySearch = jest.fn();
    const { getByPlaceholderText } = render(
      <InputBreedComponent onKeySearch={onKeySearch} />,
    );
    const input = getByPlaceholderText("Search Breed Name");

    fireEvent.change(input, { target: { value: "l" } });

    jest.advanceTimersByTime(500);

    fireEvent.change(input, { target: { value: "la" } });

    jest.advanceTimersByTime(500);

    fireEvent.change(input, { target: { value: "labrador" } });

    act(() => {
      jest.runAllTimers();
    });

    expect(onKeySearch).toHaveBeenCalledWith("labrador");
  });
});
