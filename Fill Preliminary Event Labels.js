/******************************************************************************************
 * createPrelimLabelsList will fill in the data in the 'Prelim Labels' sheet              *
 * of the 'Special Olympics Student Database' spreadsheet. This function is called        *
 * when the user clicks on the 'Get Data' button that's found in the 'Prelim.             *
 * Labels' sheet.                                                                         *
 ******************************************************************************************/

function createPrelimLabelsList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const prelimLabelsSheet = ss.getSheetByName("Prelim Labels");
  const filterDay = prelimLabelsSheet.getRange("F2").getValue(); // Get the day to filter from cell L2

  // Clear only the values in the range A1:K
  prelimLabelsSheet.getRange("A1:E").clearContent();

  // Extract headers and data
  const headers = data[0];
  const rows = data.slice(1);

  // Filter rows where column A matches the filterDay
  const filteredRows = rows.filter((row) => row[0] == filterDay);

  // Sort the filtered rows by columns A, J, B, C
  filteredRows.sort((a, b) => {
    const sortOrder = ["T&F Event Day", "Campus", "Last Name", "First Name"];
    for (let col of sortOrder) {
      const colIndex = headers.indexOf(col);
      if (a[colIndex] < b[colIndex]) return -1;
      if (a[colIndex] > b[colIndex]) return 1;
    }
    return 0;
  });

  // Define the columns to select based on the value in 'Gender'
  const selectedColumnsM = [ // Males
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
  ];
  const selectedColumnsF = [ // Females
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
  ];

  // Select and reorder the columns based on the value in 'Gender'
  const result = filteredRows.map((row) => {
    const selectedColumns =
      row[headers.indexOf("Gender")] === "M"
        ? selectedColumnsM
        : selectedColumnsF;
    const columnIndices = selectedColumns.map((col) => headers.indexOf(col));
    return columnIndices.map((index) => row[index]);
  });

  // Add custom labels to the 'Prelim Labels' sheet
  const customLabels = [
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
  ];

  // Add the custom labels as the first row
  result.unshift(customLabels);

  prelimLabelsSheet
    .getRange(1, 1, result.length, result[0].length)
    .setValues(result);
}
