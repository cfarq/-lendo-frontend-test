import { render, screen } from "@testing-library/react";

import { Page } from "./Page";

describe("Page", () => {
  it("renders the component with children", () => {
    render(<Page>Test</Page>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
