// This script is for adding extra sheets to the Google Sheets document.

function createSheetsInMultipleWorkbooks() {
  var spreadsheetIds = [
    '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA',
    '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls',
    '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg',
    '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ',
    '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg',
    '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'
  ];

  // List of names for the new sheets
  var sheetNames = [
    'Males-Turbo Jav',
    'Males-Tennis Ball Throw',
    'Males-Softball Throw',
    'Males-Running Long Jump',
    'Males-Foam Turbo Jav',
    'Males-Bean Bag Throw',
    'Males-25 M Assisted Walk',
    'Males-25 M Assited Device',
    'Males-25 M Assisted WC',
    'Males-25 M Manual WC',
    'Males-30 M Slalom',
    'Males-50 M Run',
    'Males-50 M Manual WC',
    'Males-100 M Run'
  ];

  // Ensure the list of names has 14 items
  if (sheetNames.length !== 14) {
    throw new Error('The list of sheet names must contain exactly 14 names.');
  }

  // Loop through each spreadsheet and add sheets with the specified names
  spreadsheetIds.forEach(function (spreadsheetId) {
    var ss = SpreadsheetApp.openById(spreadsheetId);

    // Loop through the list of sheet names and create the sheets
    sheetNames.forEach(function (name) {
      if (!ss.getSheetByName(name)) { // Prevent creating duplicate sheets
        ss.insertSheet(name);
      }
    });
  });
}

function addPrefixToSheets() {
  // List of Google Sheets IDs to process
  var spreadsheetIds = [
    '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA',
    '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls',
    '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg',
    '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ',
    '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg',
    '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'
  ];

  // Prefix to add to the sheet names (excluding the first one)
  var prefix = 'Females-';

  // Loop through each Google Sheet
  spreadsheetIds.forEach(function (spreadsheetId) {
    var renameSs = SpreadsheetApp.openById(spreadsheetId);

    // Get all sheets in the spreadsheet
    var sheets = renameSs.getSheets();

    // Loop through each sheet, skipping the first one
    for (var i = 1; i < sheets.length; i++) {
      var sheet = sheets[i];
      var originalName = sheet.getName();

      // Check if the prefix is already added to avoid double-prefixing
      if (!originalName.startsWith(prefix)) {
        var newName = prefix + originalName;
        sheet.setName(newName);
      }
    }
  });
}
