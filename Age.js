/***************************************************************************************
 * The function below sets an arrayformula in F2 of 'Student Database' that fills down *
 * column F.                                                                           *
 *                                                                                     *
 * The formula calculates the student's age based on the date of birth in column E.    *
 *                                                                                     *
 * A trigger is set to run this function on edit.                                      *
***************************************************************************************/

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