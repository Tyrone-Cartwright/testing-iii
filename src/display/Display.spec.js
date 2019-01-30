// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Display tests", () => {
  describe("displaying labels", () => {
    it("renders labels for  Unlock", () => {
      const { getByText } = render(<Display />);

      getByText("Unlocked");
    });
  });

  describe("displaying labels", () => {
    it("renders labels for Locked", () => {
      const { getByText } = render(<Display locked={true} closed={true} />);

      getByText("Locked");
    });
  });

  describe("displaying labels", () => {
    it("renders labels for Open", () => {
      const { getByText } = render(<Display />);

      getByText("Open");
    });
  });

  describe("displaying labels", () => {
    it("renders labels for Closed", () => {
      const { getByText } = render(<Display closed={true} />);

      getByText("Closed");
    });
  });
});

// Displaying Red or Green class
describe("Display red and green class", () => {
  it("renders a red-led class when locked or closed", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    const locked = getByText(/locked/i);
    expect(locked).toHaveClass("red-led");
  });

  it("renders a green-led class when unlocked or open", () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const unlock = getByText(/unlocked/i);
    expect(unlock).toHaveClass("green-led");
  });
});
