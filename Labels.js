/******************************************************************
 * unifiedMailMerge creates lables from a Google Doc template.    *
 * The user will select the Day that they want to print           *
 * labels for on the 'Consolidated Labels' sheet in the Special   *
 * Olympics Student Database. Once they select the day, they      *
 * will click on the 'Get data' button. The sheet will populate   *
 * with the data, then the user clicks on the 'Run Labels' button *
 * and the labels will get created. The user then needs to go     *
 * to the Google Doc to print them out. The labels need to be     *
 * fed into a printer.                                            *
 ******************************************************************/

// Path to the Google Doc template
const unifiedTemplate = {
  docId: "17c_LfU5GeFWHxeGYwTa7OpHAiXSQ7v1Vj7FqsB5YBz4",
};

function initUnified_() {
  unifiedTemplate.doc = DocumentApp.openById(unifiedTemplate.docId);
  unifiedTemplate.body = unifiedTemplate.doc.getBody();
  unifiedTemplate.ss = SpreadsheetApp.getActive();
}

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

function inchToPoint_(m) {
  m = m.replace(/"/g, "");
  m = m.split(" ");
  if (m.length == 1) {
    return parseFloat(m[0]) * 72;
  }
  const [n, d] = m[1].split("/");
  return (parseInt(m[0]) + parseInt(n) / parseInt(d)) * 72;
}

function unifiedMailMerge() {
  initUnified_();
  const sh = unifiedTemplate.ss.getSheetByName("Consolidated Labels");
  [unifiedTemplate.recipientHeaders, ...unifiedTemplate.recipientsData] = sh
    .getDataRange()
    .getValues();
  const templateTable = unifiedTemplate.body.getTables()[0];
  const templateCell = templateTable.getCell(0, 0).copy();
  const numLines = templateCell.getNumChildren();
  const templateTexts = [];
  const templateAttributes = [];

  for (let i = 0; i < numLines; i++) {
    const child = templateCell.getChild(i);
    templateTexts.push(child.getText());
    const sourceAttributes = child.getAttributes();
    const atts = {};

    // Copy attributes
    for (const key in sourceAttributes) {
      atts[key] = sourceAttributes[key];
    }
    templateAttributes.push(atts);
  }

  const numRows = templateTable.getNumRows();
  const numCols = templateTable.getRow(0).getNumCells();
  const bodyChildren = unifiedTemplate.body.getNumChildren();
  for (let i = bodyChildren - 2; i > 1; i--) {
    unifiedTemplate.body.removeChild(unifiedTemplate.body.getChild(i));
  }

  const BATCH_SIZE = 30; // Adjust this number to control the number of labels created in each batch. This number can't be too large or the script will give an error.
  for (
    let batchStart = 0;
    batchStart < unifiedTemplate.recipientsData.length;
    batchStart += BATCH_SIZE
  ) {
    const batch = unifiedTemplate.recipientsData.slice(
      batchStart,
      batchStart + BATCH_SIZE,
    );
    processBatch(
      batch,
      templateTable,
      templateTexts,
      templateAttributes,
      numRows,
      numCols,
    );
    unifiedTemplate.doc.saveAndClose();
    Utilities.sleep(1000); // Adds a short delay to ensure the document is closed properly
    unifiedTemplate.doc = DocumentApp.openById(unifiedTemplate.docId);
    unifiedTemplate.body = unifiedTemplate.doc.getBody();
  }
}

function processBatch(
  batch,
  templateTable,
  templateTexts,
  templateAttributes,
  numRows,
  numCols,
) {
  let iCol = Infinity;
  let iRow = Infinity;
  let table;
  const marginInPoints = 0.25 * 72; // Convert 0.25 inches to points

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

function mergeUnified_(text, recipient) {
  unifiedTemplate.recipientHeaders.forEach((header, i) => {
    text = text.replace(`%${header}%`, recipient[i]);
  });
  return text;
}
