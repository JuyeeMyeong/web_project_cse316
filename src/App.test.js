// Juyee Myeong juyee.myeong@stonybrook.edu
// Juyeon Nam juyeon.nam@stonybrook.edu

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
