// This function gets called in the pushRunningEventsDataToSheets()
function addIndexNumbers() {
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
    createDaySheets()
}