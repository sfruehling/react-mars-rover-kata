import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App", () => {
  it("renders successfully (smoke test)", () => {
    render(<App />);
  });
});
