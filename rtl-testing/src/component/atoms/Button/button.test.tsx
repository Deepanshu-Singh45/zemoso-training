import { render, screen } from "@testing-library/react";
import { Button } from "../../atoms/Button/button";

test("renders checkbox with label", () => {
  render(<Button />);
  const checkboxElement = screen.getByRole("button");
  expect(checkboxElement).toBeInTheDocument();
});
