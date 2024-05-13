// The purpose of the function below is to set a formula in column F's cells to calculate the student's age from the date of birth in column E. A trigger is set to run this function on edit.

function insertFormula() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Student Database");
  let formula = '=arrayformula(DATEDIF(E2:E,TODAY(),"Y"))';
  let cell = sheet.getRange('F2');
  let value = cell.getValue();
  if(value === "" || value === null){
    cell.setFormula(formula);
  } else {
    Logger.log("Good");
  }
}