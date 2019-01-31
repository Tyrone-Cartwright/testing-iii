// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

afterEach(cleanup);
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

// Button Events
describe("Contols button tests", () => {
  it("renders closed gate clicked", () => {
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
  });

  it("renders lock gate clicked", () => {
    const { getByText } = render(<Controls />);

    getByText(/lock gate/i);
  });

  it("renders open gate clicked", () => {
    const { getByText } = render(<Controls closed={true} />);

    getByText(/open gate/i);
  });

  it("renders unlock gate clicked", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    getByText(/unlock gate/i);
  });

  it("renders lock button to be disabled", () => {
    const { getByText } = render(<Controls />);

    const lockBtn = getByText(/lock gate/i);
    expect(lockBtn).toBeDisabled();
  });

  it("renders close button to be disabled", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);

    const cBtn = getByText(/open gate/i);
    expect(cBtn).toBeDisabled();
  });
});

// describe("Contols button tests", () => {
//   it("renders unlocked when locked gate button clicked", () => {
//     const { getByText } = render(<Controls />);

//     const button = getByText(/lock gate/i);

//     fireEvent.click(button);

//     getByText(/open gate/i);
//   });
// });
