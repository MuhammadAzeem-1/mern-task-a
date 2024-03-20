import React from "react";
import { render, screen } from "@testing-library/react";
import Auth from "../component/Auth.jsx";
import App from "../App.js";


describe("Test Suit for Auth component", () => {
  // Test 1
  test("should render Auth component", () => {
    render(<App />);
    const test = screen.getByText("/abc/")
    expect(test).toBeInTheDocument();
  });
});
