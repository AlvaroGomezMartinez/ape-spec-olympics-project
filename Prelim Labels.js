/******************************************************************
 * prelimMailMerge merges data to create labels in a Google Doc.   *
 * The user will select the Day that they want to print            *
 * labels for on the 'Prelim Labels' sheet in the Special          *
 * Olympics Student Database. Once they select the day, they       *
 * will click on the 'Get data' button. The sheet will populate    *
 * with the data, then the user clicks on the 'Run Labels' button  *
 * and the labels will get merged. The user then needs to go       *
 * to the Google Doc to print them out. The labels need to be      *
 * fed into a printer.                                             *
 ******************************************************************/

// Path to the Google Doc templates
const prelimTemplate = {
  docId: "1SbzRjyZ6XNJwlLUFIOOLb-_9a8aopm5gfaIjUnwICCI",      // Default template for Day 1
  day2DocId: "15naOBMyNOLcYDgJdSyAz4nF7Vvz2ltIshcPukkrfFjo",  // Template for Day 2
  day3DocId: "1n7dsm-AJJVcLkrDIVxE-1nZf1YyxkDJEfvUKtZzr9sc",  // Template for Day 3
  day4DocId: "12nEWZJkBHQXQGcb2BGna5IR9WqyAKMDIfYSDEp64xEg",  // Template for Day 4
  day5DocId: "1ssqb4891ksk2bJk528UdqWIDx9n62I2DPTuh7iTn9m4",  // Template for Day 5
  day6DocId: "1bEknhcH93lzCWx0QiTWsAnbJ-8oJ-lcGUw7lNMTghGk",  // Template for Day 6
};

/**
 * Initializes the template for the selected day by getting the document ID
 * based on the value of cell F2 in the "Prelim Labels" sheet.
 */
function initPrelim_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Prelim Labels");
  const docSelection = sh.getRange("F2").getValue();  // Get the value of cell F2

  let docId;
  switch (docSelection) {
    case 1:
      docId = prelimTemplate.docId;
      break;
    case 2:
      docId = prelimTemplate.day2DocId;
      break;
    case 3:
      docId = prelimTemplate.day3DocId;
      break;
    case 4:
      docId = prelimTemplate.day4DocId;
      break;
    case 5:
      docId = prelimTemplate.day5DocId;
      break;
    case 6:
      docId = prelimTemplate.day6DocId;
      break;
    default:
      docId = prelimTemplate.docId;  // Default to Day 1 if no match
  }

  prelimTemplate.doc = DocumentApp.openById(docId);
  prelimTemplate.body = prelimTemplate.doc.getBody();
  prelimTemplate.ss = SpreadsheetApp.getActive();
}

/**
 * Creates a label template in the "Labels" sheet. The user needs to
 * populate the labels' data in the sheet, which will then be used 
 * to create a mail merge template.
 */
function makePrelimTemplate() {
  initPrelim_();
  let { rowHeight, colWidth, vMargin, hMargin } = getPrelimLabel_();
  rowHeight = inchToPoint_(rowHeight);
  colWidth = inchToPoint_(colWidth);
  vMargin = inchToPoint_(vMargin);
  hMargin = inchToPoint_(hMargin);
  
  prelimTemplate.body.clear();
  prelimTemplate.body.setMarginTop(vMargin);
  prelimTemplate.body.setMarginBottom(vMargin);
  prelimTemplate.body.setMarginLeft(hMargin);
  prelimTemplate.body.setMarginRight(hMargin);

  const pageWidth = prelimTemplate.body.getPageWidth();
  const pageHeight = prelimTemplate.body.getPageHeight();
  const availWidth = pageWidth - hMargin * 2;
  const availHeight = pageHeight - vMargin * 2;

  const numColumns = Math.floor(availWidth / colWidth);
  const numRows = Math.floor(availHeight / rowHeight);

  const cells = new Array(numRows).fill(new Array(numColumns).fill(""));
  const table = prelimTemplate.body.appendTable(cells);

  for (let i = 0; i < numRows; i++) {
    const row = table.getRow(i);
    row.setMinimumHeight(rowHeight);
  }
  for (let i = 0; i < numColumns; i++) {
    table.setColumnWidth(i, colWidth);
  }

  prelimTemplate.doc.saveAndClose();
}

/**
 * Retrieves label data from the "Labels" sheet, converting
 * header and label data into an object for use in the template.
 * @return {Object} Label data with row height, column width, etc.
 */
function getPrelimLabel_() {
  const sh = prelimTemplate.ss.getSheetByName("Labels");
  const [headers, ...data] = sh.getDataRange().getValues();
  const labelRow = data.find((row) => row[0]);
  const labelObj = {};

  labelRow.forEach((value, i) => {
    const header = headers[i];
    labelObj[header] = value;
  });
  return labelObj;
}

/**
 * Converts inches to points for document formatting.
 * @param {string} m - Measurement in inches as a string, e.g. '1/2"'
 * @return {number} Measurement converted to points.
 */
function inchToPoint_(m) {
  m = m.replace(/"/g, "");  // Remove quotation marks
  m = m.split(" ");  // Split whole number and fraction

  if (m.length == 1) {
    return parseFloat(m[0]) * 72;  // Convert inches to points
  }

  const [n, d] = m[1].split("/");
  return (parseInt(m[0]) + parseInt(n) / parseInt(d)) * 72;
}

/**
 * The main function that creates labels for preliminary events.
 * This function is triggered by the "Run Labels" button in the
 * "Prelim Labels" sheet.
 */
function prelimMailMerge() {
  initPrelim_();
  const sh = prelimTemplate.ss.getSheetByName("Prelim Labels");
  
  // Retrieve header and recipient data
  [prelimTemplate.recipientHeaders, ...prelimTemplate.recipientsData] = sh.getDataRange().getValues();
  
  const templateTable = prelimTemplate.body.getTables()[0];
  const templateCell = templateTable.getCell(0, 0).copy();
  const numLines = templateCell.getNumChildren();
  const templateTexts = [];
  const templateAttributes = [];

  for (let i = 0; i < numLines; i++) {
    const child = templateCell.getChild(i);
    templateTexts.push(child.getText());

    // Copy attributes
    const sourceAttributes = child.getAttributes();
    const atts = {};
    for (const key in sourceAttributes) {
      atts[key] = sourceAttributes[key];
    }
    templateAttributes.push(atts);
  }

  const numRows = templateTable.getNumRows();
  const numCols = templateTable.getRow(0).getNumCells();
  
  // Clear existing content except for the first few children
  const bodyChildren = prelimTemplate.body.getNumChildren();
  for (let i = bodyChildren - 2; i > 1; i--) {
    prelimTemplate.body.removeChild(prelimTemplate.body.getChild(i));
  }

  const BATCH_SIZE = 30;  // Adjust this value to process fewer or more labels in one batch
  let docId = prelimTemplate.docId;  // Default to Day 1 template

  for (let batchStart = 0; batchStart < prelimTemplate.recipientsData.length; batchStart += BATCH_SIZE) {
    const batch = prelimTemplate.recipientsData.slice(batchStart, batchStart + BATCH_SIZE);
    
    // Check and update docId for each batch if necessary
    switch (sh.getRange("F2").getValue()) {
      case 2:
        docId = prelimTemplate.day2DocId;
        break;
      case 3:
        docId = prelimTemplate.day3DocId;
        break;
      case 4:
        docId = prelimTemplate.day4DocId;
        break;
      case 5:
        docId = prelimTemplate.day5DocId;
        break;
      case 6:
        docId = prelimTemplate.day6DocId;
        break;
    }

    prelimTemplate.doc = DocumentApp.openById(docId);
    prelimTemplate.body = prelimTemplate.doc.getBody();
    
    processBatch(batch, templateTable, templateTexts, templateAttributes, numRows, numCols);
    prelimTemplate.doc.saveAndClose();
    Utilities.sleep(1000);  // Add a delay to ensure the document saves properly
  }

  const docUrl = `https://docs.google.com/document/d/${docId}/edit`;

  // Show a message with a link to the document
  const htmlOutput = HtmlService.createHtmlOutput(
    `<p>🏁 The <em>Prelim Labels</em> are done running.<br><br>` +
    `Click <a href="${docUrl}" target="_blank">here</a> to open the report.</p>`
  ).setWidth(400).setHeight(200);

  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Prelim Labels Updated');
}

/**
 * Processes a batch of recipient data, creating a table of labels.
 * @param {Array} batch - A batch of recipient data.
 * @param {Object} templateTable - The template table structure.
 * @param {Array} templateTexts - An array of template text strings.
 * @param {Array} templateAttributes - An array of template attributes.
 * @param {number} numRows - The number of rows in the template.
 * @param {number} numCols - The number of columns in the template.
 */
function processBatch(batch, templateTable, templateTexts, templateAttributes, numRows, numCols) {
  let iCol = Infinity;
  let iRow = Infinity;
  let table;

  // Define margin in points (0.25 inches)
  const marginInPoints = 0.25 * 72;

  batch.forEach((recipient) => {
    if (iCol >= numCols) {
      iCol = 0;
      iRow++;
    }
    if (iRow >= numRows) {
      iRow = 0;
      table = prelimTemplate.body.appendTable(templateTable.copy());
      table.getCell(0, 0).clear();
    }

    const newCell = table.getCell(iRow, iCol);
    newCell.clear();
    
    // Insert merged text into the cell
    templateTexts.forEach((templateText, i) => {
      const newLine = mergePrelim_(templateText, recipient);
      const par = newCell.insertParagraph(i, newLine);
      par.editAsText().setAttributes(templateAttributes[i]);
      par.setFontSize(templateAttributes[i].FONT_SIZE);
      par.setFontFamily(templateAttributes[i].FONT_FAMILY);
      par.setForegroundColor(templateAttributes[i].FOREGROUND_COLOR);
      par.setIndentFirstLine(marginInPoints);
      par.setIndentStart(marginInPoints);
      par.setIndentEnd(marginInPoints);
    });

    iCol++;
  });
}

/**
 * Replaces placeholders in the template text with recipient data.
 * @param {string} text - The template text containing placeholders (e.g., %Last Name%).
 * @param {Array} recipient - An array of recipient data.
 * @return {string} The text with placeholders replaced by recipient data.
 */
function mergePrelim_(text, recipient) {
  prelimTemplate.recipientHeaders.forEach((header, i) => {
    text = text.replace(`%${header}%`, recipient[i]);
  });
  return text;
}
