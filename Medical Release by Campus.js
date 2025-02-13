/**
 * Generates a medical release report from data in the sheet called
 * "Medical Release Alphabetical List by Campus" in the database.
 * The data is added to a Google Doc.
 * 
 * Displays a dialog with a link to the updated document, so the
 * user can find the report easily.
 */
function printMedicalReleaseReport() {
  var sheetName = "Medical Release Alphabetical List by Campus";
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Get the data from the sheet
  var lastRow = sheet.getLastRow();
  
  /**
   * @type {Array<Array>} data - 2D array representing rows and columns of data from the sheet.
   *                            The data starts at row 3 and goes until the last row, 
   *                            with 6 columns (Campus, Last Name, First Name, Gender, DOB, Medical Release Date).
   */
  var data = sheet.getRange(3, 1, lastRow - 2, 6).getValues(); // Adjust for range starting at row 3
  
  // Open an existing Google Doc by ID
  var docId = "1ACiJTYgr7iP6_6epq4zfdSILKdxZJS2xJ6rMvcamoSI";
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  
  // Clear the rest of the document while keeping the title
  body.clear(); 
  
  // Variables to track campus changes and manage the table object
  var currentCampus = '';
  var table = null; // Initialize the table variable as null
  
  // Add a footer with the current date and time (mm/dd/YYYY and hh:mm am/pm)
  var currentDate = new Date();
  
  /** @type {string} formattedDate - The current date formatted as MM/dd/YYYY */
  var formattedDate = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "MM/dd/YYYY");
  
  /** @type {string} formattedTime - The current time formatted as h:mm a (12-hour format) */
  var formattedTime = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "h:mm a");

  // Loop through each row in the data
  for (var i = 0; i < data.length; i++) { // Start from 0 because data[0] is row 3 in the sheet
    var row = data[i];
    
    /** @type {string} campus - The campus name from column A */
    var campus = row[0]; 
    
    /** @type {string} studentFName - The student's first name from column C */
    var studentFName = row[2]; 
    
    /** @type {string} studentLName - The student's last name from column B */
    var studentLName = row[1]; 
    
    /** @type {string} gender - The student's gender from column D */
    var gender = row[3]; 
    
    /** @type {Date|string} dob - The student's date of birth from column E, formatted as needed */
    var dob = row[4]; 
    
    /** @type {Date|string} medRelDate - The student's medical release date (year) from column F, formatted as needed */
    var medRelDate = row[5]; 

    // Format dob to mm/dd/YY
    if (dob instanceof Date) {
      dob = Utilities.formatDate(dob, Session.getScriptTimeZone(), "MM/dd/YY");
    }

    // Format medRelDate to four-digit year
    if (medRelDate instanceof Date) {
      medRelDate = Utilities.formatDate(medRelDate, Session.getScriptTimeZone(), "yyyy");
    } else if (typeof medRelDate === 'number') {
      medRelDate = Math.floor(medRelDate).toString(); // Convert to string without decimal
    }

    // Check if the campus changes
    if (campus !== currentCampus) {
      if (currentCampus !== '') {
        // Add footer for previous campus section
        body.appendParagraph('Created on: ' + formattedDate + ' at ' + formattedTime)
          .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
          .setFontSize(10)
          .setItalic(true);

        // Add a page break before starting a new campus section
        body.appendPageBreak();
        // Save and close the document to apply changes for the previous campus
        doc.saveAndClose();
        
        // Reopen the document for further modifications
        doc = DocumentApp.openById(docId);
        body = doc.getBody();
      }
      
      // Write the new campus heading
      body.appendParagraph(campus).setHeading(DocumentApp.ParagraphHeading.HEADING1);
      
      // Create a new table for this campus
      table = body.appendTable();
      var headerRow = table.appendTableRow();
      headerRow.appendTableCell('Campus').setFontSize(10);
      headerRow.appendTableCell('Last Name').setFontSize(10);
      headerRow.appendTableCell('First Name').setFontSize(10);
      headerRow.appendTableCell('Gender').setFontSize(10);
      headerRow.appendTableCell('Date of Birth').setFontSize(10);
      headerRow.appendTableCell('Medical Release Date').setFontSize(10);

      // Set column widths on the entire table (applies to all rows)
      table.setColumnWidth(3, 45); // Adjust index and width values as needed
      
      // Update current campus
      currentCampus = campus;
    }

    // Check if table is initialized properly
    if (table) {
      // Add a row to the current table with student data
      var dataRow = table.appendTableRow();  // Create a new row object
      dataRow.appendTableCell(campus).setFontSize(10);       // Append campus name
      dataRow.appendTableCell(studentLName).setFontSize(10); // Append last name
      dataRow.appendTableCell(studentFName).setFontSize(10); // Append first name
      dataRow.appendTableCell(gender).setFontSize(10);       // Append gender
      dataRow.appendTableCell(dob).setFontSize(10);          // Append formatted date of birth
      dataRow.appendTableCell(medRelDate).setFontSize(10);   // Append formatted medical release date
    } else {
      Logger.log('Error: Table not initialized for campus: ' + campus);
    }
  }

  // Add final footer
  body.appendParagraph('Created on: ' + formattedDate + ' at ' + formattedTime)
      .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      .setFontSize(10)
      .setItalic(true);

  // Final save and close after processing all data
  doc.saveAndClose();
  
  // Get the document URL
  var docUrl = doc.getUrl();
  
  // Create an HTML template for the dialog
  var htmlOutput = HtmlService.createHtmlOutput('<p>🏁 The <em>Medical Release Alphabetical List by Campus</em> report has been updated.<br><br>Click <a href="' + docUrl + '" target="_blank">here</a> to open the report.</p>')
      .setWidth(400)
      .setHeight(200);
  
  // Display the HTML content in a dialog
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Medical Release Alphabetical List by Campus Updated');
}
