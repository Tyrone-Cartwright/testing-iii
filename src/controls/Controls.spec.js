// Test away!
import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

describe("Control test", () => {
  it("should render lock or closed gate", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);

    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});

describe("Control test", () => {
  it("should render unlock or open gate", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    getByText(/unlock gate/i);
    getByText(/open gate/i);
  });
});

describe("Control test", () => {
  it("should render unlock or close gate", () => {
    const { getByText } = render(<Controls locked={false} closed={true} />);

    getByText(/open gate/i);
    getByText(/lock gate/i);
  });
});

describe("Control test", () => {
  it("should render lock or open gate", () => {
    const { getByText } = render(<Controls locked={true} closed={false} />);

    getByText(/lock gate/i);
    getByText(/unlock gate/i);
  });
});
