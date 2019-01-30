// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("Locked", () => {
  it("should locke gate", () => {
    const { getByTestId } = render(<Dashboard />);
  });
});
