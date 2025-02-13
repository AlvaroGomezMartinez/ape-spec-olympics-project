/********************************************************************
 * unifiedMailMerge merges data to create labels in a Google Doc.    *
 * The user will select the Day that they want to print              *
 * labels for on the 'Consolidated Labels' sheet in the Special      *
 * Olympics Student Database. Once they select the day, they         *
 * will click on the 'Get data' button. The sheet will populate      *
 * with the data, then the user clicks on the 'Run Labels' button    *
 * and the labels will get merged. The user then needs to go         *
 * to the Google Doc to print them out. The labels need to be        *
 * fed into a printer.                                               *
 ********************************************************************/

// Path to the Google Doc template
const unifiedTemplate = {
  docId: "17c_LfU5GeFWHxeGYwTa7OpHAiXSQ7v1Vj7FqsB5YBz4",      // Default template for Day 1
  day2DocId: "14-XE4y83F-zOBnjaoMZTWF92d_2MEqzeh_MxOq0td-g",  // Template for Day 2
  day3DocId: "1KEHBWlmAexXLroDRXdRpCcJLgMVpao03w0QWA5SmcoI",  // Template for Day 3
  day4DocId: "1ZR8fdVld0HNPXlDJlxOV-zDtV5txLP9h0mqzbX3k7cA",  // Template for Day 4
  day5DocId: "10G3Cd4D-ClN1yml5xvyn9QcU0sKB50R2tE4ZGBVyUJY",  // Template for Day 5
  day6DocId: "1ONbKN2V5E__tYXuCtLuxBiLPYCW-NY771sFXM6DEMaI",  // Template for Day 6
};

/**
 * Initializes the template for the selected day by getting the document ID
 * based on the value of cell M2 in the "Consolidated Labels" sheet.
 */
function initUnified_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Consolidated Labels");
  const docSelection = sh.getRange("M2").getValue();  // Get the value of cell M2

  let docId;
  switch (docSelection) {
    case 1:
      docId = unifiedTemplate.docId;
      break;
    case 2:
      docId = unifiedTemplate.day2DocId;
      break;
    case 3:
      docId = unifiedTemplate.day3DocId;
      break;
    case 4:
      docId = unifiedTemplate.day4DocId;
      break;
    case 5:
      docId = unifiedTemplate.day5DocId;
      break;
    case 6:
      docId = unifiedTemplate.day6DocId;
      break;
    default:
      docId = unifiedTemplate.docId;  // Default to Day 1 if no match
  }

  unifiedTemplate.doc = DocumentApp.openById(docId);
  unifiedTemplate.body = unifiedTemplate.doc.getBody();
  unifiedTemplate.ss = SpreadsheetApp.getActive();
}

/**
 * Creates a label template from the "Labels" sheet. The user needs to
 * populate the labels' data in the sheet, which will then be used 
 * to create a mail merge template.
 */
function makeUnifiedTemplate() {
  initUnified_();
  let { rowHeight, colWidth, vMargin, hMargin } = getSelectedLabel_();
  rowHeight = inchToPoint_(rowHeight);
  colWidth = inchToPoint_(colWidth);
  vMargin = inchToPoint_(vMargin);
  hMargin = inchToPoint_(hMargin);
  unifiedTemplate.body.clear();
  unifiedTemplate.body.setMarginTop(vMargin);
  unifiedTemplate.body.setMarginBottom(vMargin);
  unifiedTemplate.body.setMarginLeft(hMargin);
  unifiedTemplate.body.setMarginRight(hMargin);
  const pageWidth = unifiedTemplate.body.getPageWidth();
  const pageHeight = unifiedTemplate.body.getPageHeight();
  const availWidth = pageWidth - hMargin * 2;
  const availHeight = pageHeight - vMargin * 2;
  const numColumns = Math.floor(availWidth / colWidth);
  const numRows = Math.floor(availHeight / rowHeight);
  const cells = new Array(numRows).fill(new Array(numColumns).fill(""));
  const table = unifiedTemplate.body.appendTable(cells);
  for (let i = 0; i < numRows; i++) {
    const row = table.getRow(i);
    row.setMinimumHeight(rowHeight);
  }
  for (let i = 0; i < numColumns; i++) {
    table.setColumnWidth(i, colWidth);
  }
  unifiedTemplate.doc.saveAndClose();
}

/**
 * Retrieves label data from the "Labels" sheet, converting
 * header and label data into an object for use in the template.
 * @return {Object} Label data with row height, column width, etc.
 */
function getSelectedLabel_() {
  const sh = unifiedTemplate.ss.getSheetByName("Consolidated Labels");
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
  m = m.replace(/"/g, "");
  m = m.split(" ");
  if (m.length == 1) {
    return parseFloat(m[0]) * 72;
  }
  const [n, d] = m[1].split("/");
  return (parseInt(m[0]) + parseInt(n) / parseInt(d)) * 72;
}

/**
 * The main function that creates labels for the T&F events.
 * This function is triggered by the "Run Labels" button in the
 * "Consolidated Labels" sheet.
 */
function unifiedMailMerge() {
  initUnified_();
  const sh = unifiedTemplate.ss.getSheetByName("Consolidated Labels");

  // Retrieve header and recipient data
  [unifiedTemplate.recipientHeaders, ...unifiedTemplate.recipientsData] = sh.getDataRange().getValues();

  const templateTable = unifiedTemplate.body.getTables()[0];
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
  const bodyChildren = unifiedTemplate.body.getNumChildren();
  for (let i = bodyChildren - 2; i > 1; i--) {
    unifiedTemplate.body.removeChild(unifiedTemplate.body.getChild(i));
  }

  const BATCH_SIZE = 30; // Adjust this number to control the number of labels created in each batch. This number can't be too large or the script will give an error.
  let docId = unifiedTemplate.docId; // Default to Day 1 template

  for (let batchStart = 0; batchStart < unifiedTemplate.recipientsData.length; batchStart += BATCH_SIZE) {
    const batch = unifiedTemplate.recipientsData.slice(batchStart, batchStart + BATCH_SIZE,);

    // Check and update docId for each batch if necessary
    switch (sh.getRange("M2").getValue()) {
      case 2:
        docId = unifiedTemplate.day2DocId;
        break;
      case 3:
        docId = unifiedTemplate.day3DocId;
        break;
      case 4:
        docId = unifiedTemplate.day4DocId;
        break;
      case 5:
        docId = unifiedTemplate.day5DocId;
        break;
      case 6:
        docId = unifiedTemplate.day6DocId;
        break;
    }

    unifiedTemplate.doc = DocumentApp.openById(docId);
    unifiedTemplate.body = unifiedTemplate.doc.getBody();

    processUnifiedBatch(batch, templateTable, templateTexts, templateAttributes, numRows, numCols);
    unifiedTemplate.doc.saveAndClose();
    Utilities.sleep(1000); // Adds a short delay to ensure the document saves properly
  }

  var docUrl = `https://docs.google.com/document/d/${docId}/edit`;
  
  // Show a message with a link to the document
  var htmlOutput = HtmlService.createHtmlOutput(
    '<p>🏁 The <em>Consolidated Labels</em> are done running.<br><br>' +
    'Click <a href="' + docUrl + '" target="_blank">here</a> to open the report.</p>'
  ).setWidth(400).setHeight(200);
  
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Consolidated Labels Updated');
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
function processUnifiedBatch(batch, templateTable, templateTexts, templateAttributes, numRows, numCols,) {
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
      table = unifiedTemplate.body.appendTable(templateTable.copy());
      table.getCell(0, 0).clear();
    }

    const newCell = table.getCell(iRow, iCol);
    newCell.clear();

    // Insert merged text into the cell
    templateTexts.forEach((templateText, i) => {
      const newLine = mergeUnified_(templateText, recipient);
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
function mergeUnified_(text, recipient) {
  unifiedTemplate.recipientHeaders.forEach((header, i) => {
    text = text.replace(`%${header}%`, recipient[i]);
  });
  return text;
}
