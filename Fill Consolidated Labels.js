/******************************************************************************************
 * createConsolidatedLabelsList will fill in the data in the 'Consolidated Labels' sheet  *
 * of the 'Special Olympics Student Database' spreadsheet. This function is called        *
 * when the user clicks on the 'Get Data' button that's found in the 'Consolidated        *
 * Labels' sheet.                                                                         *
 ******************************************************************************************/

function createConsolidatedLabelsList() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const consolidatedLabelsSheet = ss.getSheetByName("Consolidated Labels");
  const filterDay = consolidatedLabelsSheet.getRange("M2").getValue(); // Get the day to filter from cell M2

  // Clear only the values in the range A1:K
  consolidatedLabelsSheet.getRange("A1:K").clearContent();

  // Extract headers and data. Normalize header names to avoid mismatch due to
  // stray spaces or inconsistent casing (this fixes "Campus" not being found).
  const headersRaw = data[0] || [];
  const headers = headersRaw.map((h) => (h === undefined || h === null ? "" : String(h).trim()));
  const rows = data.slice(1);

  // Helper to find header index with case-insensitive, trimmed matching.
  function findHeaderIndex(name) {
    const lower = name.toLowerCase();
    return headers.findIndex((h) => String(h).toLowerCase() === lower);
  }

  // Filter rows where column A (T&F Event Day) matches the filterDay
  const filteredRows = rows.filter((row) => row[0] == filterDay);

  // Sort the filtered rows by T&F Event Day, then Campus, then Last Name, First Name.
  // Use safe header lookup and localeCompare for string comparison.
  filteredRows.sort((a, b) => {
    const sortOrder = ["T&F Event Day", "Campus", "Last Name", "First Name"];
    for (let col of sortOrder) {
      const colIndex = findHeaderIndex(col);
      // If header not found, skip this key (prevents falling back to the next key
      // which caused sorting by Last Name only when Campus header wasn't found).
      if (colIndex === -1) continue;

      const va = a[colIndex] === undefined || a[colIndex] === null ? "" : a[colIndex];
      const vb = b[colIndex] === undefined || b[colIndex] === null ? "" : b[colIndex];

      // Numeric compare when both look like numbers
      const na = Number(va);
      const nb = Number(vb);
      if (!isNaN(na) && !isNaN(nb)) {
        if (na < nb) return -1;
        if (na > nb) return 1;
        continue;
      }

      const sA = String(va).trim();
      const sB = String(vb).trim();
      const cmp = sA.localeCompare(sB, undefined, { sensitivity: "base" });
      if (cmp !== 0) return cmp;
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
    "Field Event",
    "Field Heat",
    "Field Position",
    "Running Event",
    "Running Heat",
    "Running Position",
  ];
  const selectedColumnsF = [ // Females
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
    const genderIndex = findHeaderIndex("Gender");
    const gender = genderIndex === -1 ? "" : row[genderIndex];
    const selectedColumns = gender === "M" ? selectedColumnsM : selectedColumnsF;

    const columnIndices = selectedColumns.map((col) => findHeaderIndex(col));
    // Map indices to values; if column not found use empty string to keep columns aligned
    return columnIndices.map((index) => (index === -1 ? "" : row[index]));
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
