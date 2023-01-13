import { render, fireEvent } from "@testing-library/react";
import { InputBox } from "../Components/InputBox";

describe("Input Box", () => {
  test("renders the correct label", () => {
    const { getByText } = render(
      <InputBox label="Test Label" setAttribute={() => {}} />
    );
    expect(getByText("Test Label")).toBeInTheDocument();
  });

  test("renders with the correct placeholder text", () => {
    const { getByPlaceholderText } = render(<InputBox />);
    const textarea = getByPlaceholderText(
      /An astronaut riding a horse in a photorealistic style/i
    );
    expect(textarea).toBeInTheDocument();
  });

  test("updates the attribute correctly when text is entered", () => {
    const setAttribute = jest.fn();
    const { getByPlaceholderText } = render(
      <InputBox label="Test Label" setAttribute={setAttribute} />
    );
    const input = getByPlaceholderText(
      "An astronaut riding a horse in a photorealistic style"
    );
    fireEvent.change(input, { target: { value: "Test Input" } });
    expect(setAttribute).toHaveBeenCalledWith("Test Input");
  });
});
