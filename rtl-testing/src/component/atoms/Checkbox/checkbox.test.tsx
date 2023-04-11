import { render, screen } from "@testing-library/react";
import { Checkbox } from "../../atoms/Checkbox/checkbox";

test("renders checkbox with label", () => {
  render(<Checkbox />);
  const checkboxElement = screen.getByLabelText("My Checkbox");
  expect(checkboxElement).toBeInTheDocument();
});
