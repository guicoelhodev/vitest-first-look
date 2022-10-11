import React from "react";
import { describe, expect, it } from "vitest";
import { screen, render } from "../../../utils/test-utlis";
import { CounterComponent } from "..";

describe("Counter component test", () => {
  it("should initialize with title", () => {
    // render(<CounterComponent/>,)

    // expect(screen.getByText('title')).toBeInTheDocument()
    it("should render the input", () => {
      render(<CounterComponent />);
      expect(screen.getByText("fgfgfgddfg")).toBeInTheDocument();
    });
  });
});
