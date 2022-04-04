import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app with career path finder landing", () => {
  render(<App />);
  const linkElement = screen.getByText(/career path finder/i);
  expect(linkElement).toBeInTheDocument();
});
