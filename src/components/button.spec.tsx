
import { findByText, render } from "@testing-library/react";
import Button from "./Button";

describe("Testing App Component", () => {
  it.skip("should render", async () => {
    const { findByText } = render(<Button>Text</Button>);

    const textInput = await findByText("Text");

    expect(textInput).toBeTruthy();
  });
});
