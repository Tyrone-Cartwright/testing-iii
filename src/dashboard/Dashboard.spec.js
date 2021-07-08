// Test away
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";
// import Controls from "../controls/Controls";
afterEach(cleanup);
describe("Display and Controls", () => {
  it("should render <Display />", () => {
    const { getByTestId } = render(<Dashboard />);
    const display = getByTestId(/display/i);
    expect(display).toBeInTheDocument();
  });

  it("should render <Controls />", () => {
    const { getByTestId } = render(<Dashboard />);
    const controls = getByTestId(/controls/i);
    expect(controls).toBeInTheDocument();
  });
});
