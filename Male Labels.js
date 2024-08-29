const malesTemplate = {
  docId: '12gLHfBTevUlfq_OCWahMDE8WebQnGHWDLx4MZYPP6MQ',
};

function initMale_() {
  malesTemplate.doc = DocumentApp.openById(malesTemplate.docId)
  malesTemplate.body = malesTemplate.doc.getBody()
  malesTemplate.ss = SpreadsheetApp.getActive();
}

/********************************************************************************************************
 * This function creates label templates for male events.                                               *
 * You can add the label size and dimensions on a hidden sheet named "Labels" in the Special Olympics   *
 * Database sheet.                                                                                      *
 * Put an 'x' in column A to select the dimensions and have the labels get created.                     *
********************************************************************************************************/
function makeMaleTemplate() {
  initMale_()
  let { rowHeight, colWidth, vMargin, hMargin } = getSelectedMaleLabel_();
  rowHeight = inchToPoint_(rowHeight);
  colWidth = inchToPoint_(colWidth);
  vMargin = inchToPoint_(vMargin);
  hMargin = inchToPoint_(hMargin);
  malesTemplate.body.clear();
  malesTemplate.body.setMarginTop(vMargin);
  malesTemplate.body.setMarginBottom(vMargin);
  malesTemplate.body.setMarginLeft(hMargin);
  malesTemplate.body.setMarginRight(hMargin);
  const pageWidth = malesTemplate.body.getPageWidth();
  const pageHeight = malesTemplate.body.getPageHeight();
  const availWidth = pageWidth - hMargin * 2;
  const availHeight = pageHeight - vMargin * 2;
  const numColumns = Math.floor(availWidth / colWidth);
  const numRows = Math.floor(availHeight / rowHeight);
  const cells = new Array(numRows).fill(new Array(numColumns).fill(''));
  const table = malesTemplate.body.appendTable(cells);
  for (let i = 0; i < numRows; i++) {
    const row = table.getRow(i);
    row.setMinimumHeight(rowHeight);
  }
  for (let i = 0; i < numColumns; i++) {
    table.setColumnWidth(i, colWidth);
  }
  malesTemplate.doc.saveAndClose();
}

// This is the helper function that gets the label dimensions.
function getSelectedMaleLabel_() {
  const sh = malesTemplate.ss.getSheetByName('Labels');
  const [headers, ...data] = sh.getDataRange().getValues();
  const labelRow = data.find((row) => row[0]);
  const labelObj = {};
  labelRow.forEach((value, i) => {
    const header = headers[i]
    labelObj[header] = value;
  });
  return labelObj;
}

// This is a helper function that converts the dimensions in the
// labels sheet to points so that the makeTemplate() function works.
function inchToPoint_(m) {
  m = m.replace(/"/g, '');
  m = m.split(' ');
  if (m.length == 1) {
    return parseFloat(m[0]) * 72;
  }
  const [n, d] = m[1].split('/');
  return (parseInt(m[0]) + parseInt(n) / parseInt(d)) * 72;
}

/*****************************************************************************
 * The maleMailMerge() function below gets called by the 'Menus.gs' file,    *
 * specifically the runMaleLabels() function that gets triggers from the     *
 * '⚑ Create Labels' menu item.                                              *
 *                                                                           *
 * The function merges the data from 'Student Database into label templates. *
 * to make the labels.                                                       *
*****************************************************************************/
function maleMailMerge() {
  initMale_();
  const sh = malesTemplate.ss.getSheetByName('Male-Labels');
  [malesTemplate.recipientHeaders, ...malesTemplate.recipientsData] = sh.getDataRange().getValues();
  const templateTable = malesTemplate.body.getTables()[0];
  const templateCell = templateTable.getCell(0, 0).copy();
  const numLines = templateCell.getNumChildren();
  const templateTexts = [];
  const templateAttributes = [];
  for (let i = 0; i < numLines; i++) {
    const child = templateCell.getChild(i);
    templateTexts.push(child.getText());
    const sourceAttributes = child.getAttributes();
    const atts = {};
    Object.entries(sourceAttributes).forEach(([k, v]) => {
      if (!(v instanceof Object)) {
        atts[k] = v;
      }
    });
    templateAttributes.push(atts);
  }
  const numRows = templateTable.getNumRows();
  const numCols = templateTable.getRow(0).getNumCells();
  const bodyChildren = malesTemplate.body.getNumChildren();
  for (let i = bodyChildren - 2; i > 1; i--) {
    malesTemplate.body.removeChild(malesTemplate.body.getChild(i));
  }
  let iCol = Infinity;
  let iRow = Infinity;
  let table;
  let changesCount = 0;
  const maxChangesBeforeSave = 50; // Adjust this value based on your needs

  malesTemplate.recipientsData.forEach(recipient => {
    if (iCol >= numCols) {
      iCol = 0;
      iRow++;
    }
    if (iRow >= numRows) {
      iRow = 0;
      table = malesTemplate.body.appendTable(templateTable.copy());
      table.getCell(0, 0).clear();
    }
    const newCell = table.getCell(iRow, iCol);
    newCell.clear();
    templateTexts.forEach((templateText, i) => {
      const newLine = mergeMale_(templateText, recipient);
      const par = newCell.insertParagraph(i, newLine);
      par.editAsText().setAttributes(templateAttributes[i]);
      par.setForegroundColor(templateAttributes[i].FOREGROUND_COLOR);
    });
    iCol++;
    changesCount++;

    if (changesCount >= maxChangesBeforeSave) {
      malesTemplate.doc.saveAndClose();
      malesTemplate.doc = DocumentApp.openById(malesTemplate.docId);
      malesTemplate.body = malesTemplate.doc.getBody();
      table = malesTemplate.body.getTables()[malesTemplate.body.getTables().length - 1];
      changesCount = 0;
    }
  });

  malesTemplate.doc.saveAndClose();
}

function mergeMale_(text, recipient) {
  malesTemplate.recipientHeaders.forEach((header, i) => {
    text = text.replace(`%${header}%`, recipient[i]);
  });
  return text;
}
