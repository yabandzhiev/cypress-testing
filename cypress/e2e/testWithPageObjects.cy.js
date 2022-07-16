import { onDatePickerPage } from "../support/page_objects/datepickerPage";
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage";
import { navigateTo } from "../support/page_objects/navigationPage";
import { onSmartTable } from "../support/page_objects/smartTablePage";

describe("Test with Page Objects", () => {
  beforeEach("Open application", () => {
    cy.openHomePage();
  });

  it("Verify navigations across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datePickerPage();
    navigateTo.smartTablePage();
    navigateTo.toasterPage();
    navigateTo.tooltipPage();
  });

  it.only("Should submit Inline and Basic form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutsPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail(
      "Artem",
      "test@test.com"
    );
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword(
      "test@test.com",
      "password"
    );
    navigateTo.datePickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(1);
    onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);
    navigateTo.smartTablePage();
    onSmartTable.addNewRecordWithFirstAndLastName("Artem", "Bardem");
    onSmartTable.updateAgeByFirstName("Artem", 20);
    onSmartTable.deleteRowByIndex(1);
  });
});
