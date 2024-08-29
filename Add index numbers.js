/*****************************************************************************************
 * The function below gets called from the pushRunningEventsDataToSheets() function      *
 * which is found in the 'Push Event Data to Day Sheets' module in this project.         *
 *                                                                                       *
 * The purpose of addIndexNumbers() is to create and add reference numbers into Column V *
 * of 'Student Database' that can then be referenced when is updated in the Day Sheets.  *
 * This gives the project CRUD functionality.                                            *
*****************************************************************************************/

function addIndexNumbers() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Adding the Index numbers");
    
    var addNumbers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Student Database');
    var data = addNumbers.getDataRange().getValues();
    var lastColumnIndex = data[0].length;
    
    // Add index numbers to each row
    var numberOfRows = data.length;
    var indexNumbers = [];
    for (var i = 1; i < numberOfRows; i++) {
        indexNumbers.push([i]);
    }
    addNumbers.getRange(2, lastColumnIndex, indexNumbers.length, 1).setValues(indexNumbers);
}