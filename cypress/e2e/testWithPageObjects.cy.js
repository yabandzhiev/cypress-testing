import { navigateTo } from "../support/page_objects/navigationPage";

describe("Test with Page Objects", () => {
  beforeEach("Open application", () => {
    cy.visit("/");
  });

  it("Verify navigations across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datePickerPage();
    navigateTo.smartTablePage();
    navigateTo.toasterPage();
    navigateTo.tooltipPage();
  });
});
