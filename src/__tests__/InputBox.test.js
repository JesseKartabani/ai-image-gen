import { render, fireEvent } from "@testing-library/react";
import { InputBox } from "../Components/InputBox";

describe("InputBox", () => {
  test("renders with the correct placeholder text", () => {
    const { getByPlaceholderText } = render(<InputBox />);
    const textarea = getByPlaceholderText(
      /An astronaut riding a horse in a photorealistic style/i
    );
    expect(textarea).toBeInTheDocument();
  });
});
