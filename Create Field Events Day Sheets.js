/***********************************************************************************************
 * The createSheetsInWorkbooks() function was used to create the sheets in the Day             *
 * spreadsheets.                                                                               *
 *                                                                                             *
 * It is not necessary to run this script again, because the sheets have already been created. *
 * This module is provided for reference only.                                                 *
***********************************************************************************************/

function createSheetsInWorkbooks() {
  // Array of Google Sheets IDs
  var workbookIds = ['1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA', '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls', '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg', '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ', '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg', '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'];

  // Iterate over each workbook ID
  for (var i = 0; i < workbookIds.length; i++) {
    // Open the workbook
    var workbook = SpreadsheetApp.openById(workbookIds[i]);
    
    // Insert 'Males-STANDING LJ' and move it to the 5th tab position
    var malesSheet = workbook.insertSheet('Males-STANDING LJ');
    workbook.setActiveSheet(malesSheet);
    workbook.moveActiveSheet(6);

    // Insert 'Females-STANDING LJ' and move it to the 20th tab position
    var femaleSheet = workbook.insertSheet('Females-STANDING LJ');
    femaleSheet.setTabColor("#008000");
    workbook.setActiveSheet(femaleSheet);
    workbook.moveActiveSheet(21);
  }
}