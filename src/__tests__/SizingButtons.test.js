import { render, fireEvent } from "@testing-library/react";
import SizingButtons from "../Components/SizingButtons";

describe("SizingButtons", () => {
  test('renders three buttons with text "Small", "Medium", "Large"', () => {
    const { getByText } = render(<SizingButtons />);
    const smallButton = getByText("Small");
    const mediumButton = getByText("Medium");
    const largeButton = getByText("Large");
    expect(smallButton).toBeInTheDocument();
    expect(mediumButton).toBeInTheDocument();
    expect(largeButton).toBeInTheDocument();
  });

  test("setSize function is called with correct value when button is clicked", () => {
    const setSize = jest.fn();
    const { getByText } = render(<SizingButtons setSize={setSize} />);
    const smallButton = getByText("Small");
    const mediumButton = getByText("Medium");
    const largeButton = getByText("Large");
    fireEvent.click(smallButton);
    expect(setSize).toHaveBeenCalledWith("256x256");
    fireEvent.click(mediumButton);
    expect(setSize).toHaveBeenCalledWith("512x512");
    fireEvent.click(largeButton);
    expect(setSize).toHaveBeenCalledWith("1024x1024");
  });
});
