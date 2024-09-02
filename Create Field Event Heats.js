/*****************************************************************************************
 * The createAllFieldEventHeatsAndLanes() function below automatically creates field     *
 * event heats and lane assignments based on the number of athletes in each event.       *
 *                                                                                       *
 * This function is currently not called by any function or user interface. The APE      *
 * coach in charge of this project's database prefers to create the heats and lanes      *
 * manually. This function was left here for reference or for future functionality.      *
*****************************************************************************************/

function createAllFieldEventHeatsAndLanes() {
  showProgressDialog();

  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet.getActiveRange().offset(1, 0, sheet.getActiveRange().getNumRows() - 1).sort([{ column: 1, ascending: true }, { column: 4, ascending: true }, { column: 17, ascending: true }, { column: 18, ascending: true }, { column: 19, ascending: true }]);

  // Add heat and lane assignments
  var sortedData = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  var heatNumber = 1;
  var laneNumber = 1;
  var counter = 0;

  for (var i = 1; i < sortedData.length; i++) {
    // Check if values in column Q are the same as the next row
    if (sortedData[i][16] !== sortedData[i - 1][16]) {
      // If the values are different, increment heatNumber and reset laneNumber
      heatNumber = 1;
      laneNumber = 1;
      counter = 1
    } else {
      // If the values are the same, reset laneNumber to 1
      laneNumber = (laneNumber === 6) ? 1 : laneNumber + 1;

      //counter = (laneNumber + 1 === 7) ? counter + 1 : counter
      counter = (laneNumber === 6) ? counter + 1 : counter
      heatNumber = counter;
    }

    // Set the heatNumber at index 18 (zero-based index for column S) and laneNumber at index 19 (zero-based index for column T)
    sortedData[i][18] = heatNumber; // 18 is the index for column S
    sortedData[i][19] = laneNumber; // 19 is the index for column T
  }

  // Update the values in the spreadsheet after the loop
  sheet.getRange(2, 20, sortedData.length, 2).setValues(sortedData.map(row => [row[18], row[19]]));

  var columnU = sheet.getRange('U2:U' + sheet.getLastRow()).getValues();

  // Iterate through the values in column U
  for (var i = 0; i < columnU.length; i++) {
    // Check if the value is 6
    if (columnU[i][0] === 6) {
      // Check if the current cell is not in the first row
      if (i > 0) {
        // Get the value in the cell to the left
        var valueToLeft = sheet.getRange(i + 2, 20).getValue();

        // Subtract 1 from the value
        var newValue = valueToLeft - 1;

        // Set the new value back to the cell
        sheet.getRange(i + 2, 20).setValue(newValue);
      }
    }
  }

  var html = HtmlService.createHtmlOutput('<p>🎉 Script has finished running!</p>');
  SpreadsheetApp.getUi().showModelessDialog(html, 'Running');

}

function showProgressDialog() {
  var html = HtmlService.createHtmlOutput('<p>🏃🏻‍♀️ The script is creating the field event heats and positions.<br> 🏃🏽‍♂️ This is a good time to take a break because, unfortunately, this will take several minutes to run. 🐢</p>')
  SpreadsheetApp.getUi().showModelessDialog(html, 'Running');
}
