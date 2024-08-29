/*******************************************************************************
 * The createAllTrackEventHeatsAndLanes() function below updates a Google Doc  *
 * with the track event heats and lane information from the data in 'Student   *
 * Database'.                                                                  *
*******************************************************************************/

function createAllTrackEventHeatsAndLanes() {
  showProgressDialog();

  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  sheet.getActiveRange().offset(1, 0, sheet.getActiveRange().getNumRows() - 1).sort([{column: 1, ascending: true}, {column: 4, ascending: true}, {column: 12, ascending: true}, {column: 13, ascending: false}, {column: 14, ascending: false}]);
  
  // Add heat and lane assignments
  var sortedData = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues(); 
  var heatNumber = 1;
  var laneNumber = 1;
  var counter = 0;

  for (var i = 1; i < sortedData.length; i++) {
    // Check if values in column L are the same as the next row
    if (sortedData[i][11] !== sortedData[i - 1][11]) {
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

    // Set the heatNumber at index 14 (zero-based index for column O) and laneNumber at index 15 (zero-based index for column P)
    sortedData[i][14] = heatNumber; // 14 is the index for column O
    sortedData[i][15] = laneNumber; // 15 is the index for column P
  }

  // Update the values in the spreadsheet after the loop
  sheet.getRange(2, 15, sortedData.length, 2).setValues(sortedData.map(row => [row[14], row[15]]));

  var columnP = sheet.getRange('P2:P' + sheet.getLastRow()).getValues();

  // Iterate through the values in column P
  for (var i = 0; i < columnP.length; i++) {
    // Check if the value is 6
    if (columnP[i][0] === 6) {
      // Check if the current cell is not in the first row
      if (i > 0) {
        // Get the value in the cell to the left
        var valueToLeft = sheet.getRange(i + 2, 15).getValue(); // Assuming column O is the 15th column

        // Subtract 1 from the value
        var newValue = valueToLeft - 1;

        // Set the new value back to the cell
        sheet.getRange(i + 2, 15).setValue(newValue); // Assuming column O is the 14th column
      }
    }
  }

  var html = HtmlService.createHtmlOutput('<p>🎉 Script has finished running!</p>');
  SpreadsheetApp.getUi().showModelessDialog(html,'Running');

}

function showProgressDialog() {
  var html = HtmlService.createHtmlOutput('<p>🏃🏻‍♀️ The script is creating the track event heats and positions.<br> 🏃🏽‍♂️ This is a good time to take a break because, unfortunately, this will take several minutes to run. 🐢</p>')
  SpreadsheetApp.getUi().showModelessDialog(html,'Running');
}
