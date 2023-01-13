import { render } from "@testing-library/react";
import ImageContainer from "../Components/ImageContainer";

describe("Image Container", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });
  test("shows an error message when isError is true", () => {
    const { getByText } = render(
      <ImageContainer isError={true} errorMessage="Test Error" />
    );
    expect(getByText("Test Error")).toBeInTheDocument();
  });

  test("shows a loading spinner when isLoading is true", () => {
    const { getByTestId } = render(<ImageContainer isLoading={true} />);
    expect(getByTestId("circular-progress")).toBeInTheDocument();
  });

  test("shows the correct image when hasImage and imageUrl are true", () => {
    const { getByAltText } = render(
      <ImageContainer
        hasImage={true}
        imageUrl="https://example.com/image.jpg"
        userPrompt="Test Image"
      />
    );
    expect(getByAltText("Test Image")).toBeInTheDocument();
  });

  test("calls setImageLoaded with true when the image is loaded", () => {
    const setImageLoaded = jest.fn();
    const { container } = render(
      <ImageContainer
        hasImage={true}
        imageUrl="https://example.com/image.jpg"
        userPrompt="Test Image"
        setImageLoaded={setImageLoaded}
      />
    );
    const image = container.querySelector("img");
    const event = new Event("load");
    image.dispatchEvent(event);
    expect(setImageLoaded).toHaveBeenCalledWith(true);
  });
});
