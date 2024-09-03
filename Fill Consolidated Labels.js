/******************************************************************************************
 * createConsolidatedLabelsList will fill in the data in the 'Consolidated Labels' sheet  *
 * of the 'Special Olympics Student Database' spreadsheet. This function is called        *
 * when the user clicks on the 'Get Data' button that's found in the 'Consolidated        *
 * Labels' sheet.                                                                         *
 ******************************************************************************************/

function createConsolidatedLabelsList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const consolidatedLabelsSheet = ss.getSheetByName("Consolidated Labels");
  const filterDay = consolidatedLabelsSheet.getRange("L2").getValue(); // Get the day to filter from cell L2

  // Clear only the values in the range A1:K
  consolidatedLabelsSheet.getRange("A1:K").clearContent();

  // Extract headers and data
  const headers = data[0];
  const rows = data.slice(1);

  // Filter rows where column A matches the filterDay
  const filteredRows = rows.filter((row) => row[0] == filterDay);

  // Sort the filtered rows by columns A, J, B, C
  filteredRows.sort((a, b) => {
    const sortOrder = ["A", "J", "B", "C"];
    for (let col of sortOrder) {
      const colIndex = headers.indexOf(col);
      if (a[colIndex] < b[colIndex]) return -1;
      if (a[colIndex] > b[colIndex]) return 1;
    }
    return 0;
  });

  // Define the columns to select based on the value in 'Gender'
  const selectedColumnsM = [
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
    "Field Event",
    "Field Heat",
    "Field Position",
    "Running Event",
    "Running Heat",
    "Running Position",
  ];
  const selectedColumnsF = [
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
    "Running Event",
    "Running Heat",
    "Running Position",
    "Field Event",
    "Field Heat",
    "Field Position",
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

  // Add custom labels to the 'Consolidated Labels' sheet
  const customLabels = [
    "T&F Event Day",
    "Last Name",
    "First Name",
    "Gender",
    "Campus",
    "Event 1",
    "Event 1 Heat",
    "Event 1 Position",
    "Event 2",
    "Event 2 Heat",
    "Event 2 Position",
  ];

  // Add the custom labels as the first row
  result.unshift(customLabels);

  consolidatedLabelsSheet
    .getRange(1, 1, result.length, result[0].length)
    .setValues(result);
}
