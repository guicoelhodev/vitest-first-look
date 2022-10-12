import { describe } from "vitest";
import { ListName } from "..";
import { render, screen } from "../../../utils/test-utlis";

describe("validate listName component", () => {
  it("should return message if listName is empty", () => {
    render(<ListName />);

    expect(screen.getByTitle("emptyAdvice")).toBeInTheDocument();
  });
});
