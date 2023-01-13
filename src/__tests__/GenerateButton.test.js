import { render, fireEvent } from "@testing-library/react";
import GenerateButton from "../Components/GenerateButton";

describe("Generate Button", () => {
  test('renders the button with the text "Generate"', () => {
    const { getByText } = render(<GenerateButton />);
    const button = getByText("Generate");
    expect(button).toBeInTheDocument();
  });

  test("the button is disabled when isLoading prop is true", () => {
    const { getByText } = render(<GenerateButton isLoading={true} />);
    const button = getByText("Generate");
    expect(button).toBeDisabled();
  });

  test("the button is not disabled when isLoading prop is false", () => {
    const { getByText } = render(<GenerateButton isLoading={false} />);
    const button = getByText("Generate");
    expect(button).not.toBeDisabled();
  });

  test("handleImageGeneration function is called when button is clicked", () => {
    const handleImageGeneration = jest.fn();
    const { getByText } = render(
      <GenerateButton handleImageGeneration={handleImageGeneration} />
    );
    const button = getByText("Generate");
    fireEvent.click(button);
    expect(handleImageGeneration).toHaveBeenCalled();
  });
});
