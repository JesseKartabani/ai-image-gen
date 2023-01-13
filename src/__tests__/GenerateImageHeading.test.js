import { render } from "@testing-library/react";
import GenerateImageHeading from "../Components/GenerateImageHeading";

describe("GenerateImageHeading", () => {
  test('renders the heading with the text "Describe An Image"', () => {
    const { getByText } = render(<GenerateImageHeading />);
    const heading = getByText("Describe An Image");
    expect(heading).toBeInTheDocument();
  });
});
