function printTnFListReport() {
  var sheetName = "T&F Alphabetical List by Campus";
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Get the data from the sheet
  var lastRow = sheet.getLastRow();
  
  var data = sheet.getRange(3, 1, lastRow - 2, 10).getValues(); // Adjust for range starting at row 3
  
  // Open an existing Google Doc by ID
  var docId = "1qQj2VmX56Sg8tqPyQsIvHqSZ6KLMqlcv0ch-YwQ8SRc";
  var doc = DocumentApp.openById(docId);
  var body = doc.getBody();
  
  // Clear the rest of the document while keeping the title
  body.clear(); 
  
  var currentCampus = '';
  var table = null;
  
  var currentDate = new Date();
  var formattedDate = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "MM/dd/YYYY");
  var formattedTime = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "h:mm a");

  // Loop through each row in the data
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    
    var campus = row[0]; 
    var studentLName = row[1]; 
    var studentFName = row[2]; 
    var gender = row[3];
    var runEvent = row[4]; 
    
    // Convert numeric values to integers
    var runEventHeat = parseInt(row[5], 10); 
    var runEventPosition = parseInt(row[6], 10); 
    var fieldEvent = row[7]; 
    var fieldEventHeat = parseInt(row[8], 10); 
    var fieldEventPosition = parseInt(row[9], 10);

    // Check if the campus changes
    if (campus !== currentCampus) {
      if (currentCampus !== '') {
        body.appendParagraph('Created on: ' + formattedDate + ' at ' + formattedTime)
          .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
          .setFontSize(10)
          .setItalic(true);
        body.appendPageBreak();
        doc.saveAndClose();
        doc = DocumentApp.openById(docId);
        body = doc.getBody();
      }
      
      body.appendParagraph(campus).setHeading(DocumentApp.ParagraphHeading.HEADING1);

      table = body.appendTable();
      var headerRow = table.appendTableRow();
      headerRow.appendTableCell('Campus').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Last Name').getChild(0).setFontSize(10);
      headerRow.appendTableCell('First Name').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Gender').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Run Event').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Heat').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Pos.').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Field Event').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Heat').getChild(0).setFontSize(10);
      headerRow.appendTableCell('Pos.').getChild(0).setFontSize(10);
      
      // Set column widths on the entire table (applies to all rows)
      table.setColumnWidth(3, 45); // Adjust index and width values as needed
      table.setColumnWidth(5, 35);
      table.setColumnWidth(6, 35);
      table.setColumnWidth(8, 35);
      table.setColumnWidth(9, 35);

      currentCampus = campus;
    }

    if (table) {
      var dataRow = table.appendTableRow();
      dataRow.appendTableCell(campus).getChild(0).setFontSize(10);
      dataRow.appendTableCell(studentLName).getChild(0).setFontSize(10);
      dataRow.appendTableCell(studentFName).getChild(0).setFontSize(10);
      dataRow.appendTableCell(gender).getChild(0).setFontSize(10);
      dataRow.appendTableCell(runEvent).getChild(0).setFontSize(10);
      dataRow.appendTableCell(String(runEventHeat)).getChild(0).setFontSize(10);        // Convert to string to ensure display
      dataRow.appendTableCell(String(runEventPosition)).getChild(0).setFontSize(10);    // Convert to string
      dataRow.appendTableCell(fieldEvent).getChild(0).setFontSize(10);
      dataRow.appendTableCell(String(fieldEventHeat)).getChild(0).setFontSize(10);      // Convert to string
      dataRow.appendTableCell(String(fieldEventPosition)).getChild(0).setFontSize(10);  // Convert to string
    } else {
      Logger.log('Error: Table not initialized for campus: ' + campus);
    }
  }

  body.appendParagraph('Created on: ' + formattedDate + ' at ' + formattedTime)
      .setAlignment(DocumentApp.HorizontalAlignment.CENTER)
      .setFontSize(10)
      .setItalic(true);

  doc.saveAndClose();
  
  var docUrl = doc.getUrl();
  
  var htmlOutput = HtmlService.createHtmlOutput('<p>🏁 The <em>T&F Alphabetical List by Campus</em> report has been updated.<br><br>Click <a href="' + docUrl + '" target="_blank">here</a> to open the report.</p>')
      .setWidth(400)
      .setHeight(200);
  
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'T&F Alphabetical List by Campus Updated');
}
