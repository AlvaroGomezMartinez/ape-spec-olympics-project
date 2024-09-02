const femalesTemplate = {
  docId: '1edhqawRwUSIIe7RnRPpRrUErU1P6Yb5tys6R3inX2TI',
};

function initFemale_() {
  femalesTemplate.doc = DocumentApp.openById(femalesTemplate.docId)
  femalesTemplate.body = femalesTemplate.doc.getBody()
  femalesTemplate.ss = SpreadsheetApp.getActive();
}

/********************************************************************************************************
 * This function creates label templates for female events.                                             *
 * You can add the label size and dimensions on a hidden sheet named "Labels" in the Special Olympics   *
 * Database spreadsheet.                                                                                *
 * Put an 'x' in column A to select the dimensions and have the labels get created.                     *
********************************************************************************************************/
function makeFemaleTemplate() {
  initFemale_()
  let { rowHeight, colWidth, vMargin, hMargin } = getSelectedFemaleLabel_();
  rowHeight = inchToPoint_(rowHeight);
  colWidth = inchToPoint_(colWidth);
  vMargin = inchToPoint_(vMargin);
  hMargin = inchToPoint_(hMargin);
  femalesTemplate.body.clear();
  femalesTemplate.body.setMarginTop(vMargin);
  femalesTemplate.body.setMarginBottom(vMargin);
  femalesTemplate.body.setMarginLeft(hMargin);
  femalesTemplate.body.setMarginRight(hMargin);
  const pageWidth = femalesTemplate.body.getPageWidth();
  const pageHeight = femalesTemplate.body.getPageHeight();
  const availWidth = pageWidth - hMargin * 2;
  const availHeight = pageHeight - vMargin * 2;
  const numColumns = Math.floor(availWidth / colWidth);
  const numRows = Math.floor(availHeight / rowHeight);
  const cells = new Array(numRows).fill(new Array(numColumns).fill(''));
  const table = femalesTemplate.body.appendTable(cells);
  for (let i = 0; i < numRows; i++) {
    const row = table.getRow(i);
    row.setMinimumHeight(rowHeight);
  }
  for (let i = 0; i < numColumns; i++) {
    table.setColumnWidth(i, colWidth);
  }
  femalesTemplate.doc.saveAndClose();
}

// This is the helper function that gets the label dimensions.
function getSelectedFemaleLabel_() {
  const sh = femalesTemplate.ss.getSheetByName('Labels');
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
 * The femaleMailMerge() function below gets called by the 'Menus.gs' file,  *
 * specifically the runFemaleLabels() function that gets triggered from the  *
 * '⚑ Create Labels' menu item.                                              *
 *                                                                           *
 * The function merges the data from 'Student Database into label templates. *
 * to make the labels.                                                       *
*****************************************************************************/
function femaleMailMerge() {
  initFemale_();
  const sh = femalesTemplate.ss.getSheetByName('Female-Labels');
  [femalesTemplate.recipientHeaders, ...femalesTemplate.recipientsData] = sh.getDataRange().getValues();
  const templateTable = femalesTemplate.body.getTables()[0];
  const templateCell = templateTable.getCell(0, 0).copy();
  const numLines = templateCell.getNumChildren();
  const templateTexts = [];
  const templateAttributes = [];
  for (let i = 0; i < numLines; i++) {
    const child = templateCell.getChild(i);
    templateTexts.push(child.getText())
    const sourceAttributes = child.getAttributes()
    const atts = {}
    Object.entries(sourceAttributes).forEach(([k, v]) => {
      if (!(v instanceof Object)) {
        atts[k] = v;
      }
    });
    templateAttributes.push(atts);
  }
  const numRows = templateTable.getNumRows();
  const numCols = templateTable.getRow(0).getNumCells();
  const bodyChildren = femalesTemplate.body.getNumChildren();
  for (let i = bodyChildren - 2; i > 1; i--) {
    femalesTemplate.body.removeChild(femalesTemplate.body.getChild(i));
  }
  let iCol = Infinity;
  let iRow = Infinity;
  let table;
  femalesTemplate.recipientsData.forEach(recipient => {
    if (iCol >= numCols) {
      iCol = 0;
      iRow++
    };
    if (iRow >= numRows) {
      iRow = 0
      table = femalesTemplate.body.appendTable(templateTable.copy())
      table.getCell(0, 0).clear();
    }
    const newCell = table.getCell(iRow, iCol);
    newCell.clear();
    templateTexts.forEach((templateText, i) => {
      const newLine = mergeFemale_(templateText, recipient);
      const par = newCell.insertParagraph(i, newLine);
      par.editAsText().setAttributes(templateAttributes[i]);
      par.setForegroundColor(templateAttributes[i].FOREGROUND_COLOR);
    });
    iCol++
  });
  femalesTemplate.doc.saveAndClose();
}

function mergeFemale_(text, recipient) {
  femalesTemplate.recipientHeaders.forEach((header, i) => {
    text = text.replace(`%${header}%`, recipient[i]);
  });
  return text;
}
