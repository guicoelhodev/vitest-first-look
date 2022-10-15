import { describe } from "vitest";
import { ListName } from "..";
import { fireEvent, render, screen } from "../../../utils/test-utlis";

describe("validate listName component", () => {
  it("should return message if listName is empty", () => {
    const component = render(<ListName />);
    expect(component.getByLabelText("emptyAdvice")).toBeInTheDocument();
  });

  it("should type a new Name into input", () => {
    const component = render(<ListName />);
    const inputName = component.getByLabelText("input-name");

    fireEvent.change(inputName, { target: { value: "Rafaela" } });
    expect(inputName).toHaveValue("Rafaela");
  });

  it("should be empty input value when add button is clicked", () => {
    const component = render(<ListName />);
    const inputName = component.getByLabelText("input-name");
    const addButton = component.getByLabelText("button-addName");

    fireEvent.change(inputName, { target: { value: "Rafaela" } });
    fireEvent.click(addButton);

    expect(inputName).toHaveValue("");
  });

  it("should be show the current Name into ul list", () => {
    const component = render(<ListName />);
    const inputName = component.getByLabelText("input-name");
    const addButton = component.getByLabelText("button-addName");

    fireEvent.change(inputName, { target: { value: "Rafaela" } });
    fireEvent.click(addButton);

    expect(component.getByText("Rafaela")).toBeInTheDocument();
  });
});
