
import { findByText, render } from "@testing-library/react";
import App from ".";

describe("Testing App Component", () => {
  it("should render", async () => {
    const { findByText } = render(<App />);

    const textInput = await findByText("Text");

    expect(textInput).toBeTruthy();
  });
});
