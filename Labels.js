const unifiedTemplate = {
  docId: '17c_LfU5GeFWHxeGYwTa7OpHAiXSQ7v1Vj7FqsB5YBz4',
};

function initUnified_() {
  unifiedTemplate.doc = DocumentApp.openById(unifiedTemplate.docId);
  unifiedTemplate.body = unifiedTemplate.doc.getBody();
  unifiedTemplate.ss = SpreadsheetApp.getActive();
}

function makeUnifiedTemplate() {
  initUnified_();
  data.sort((a, b) => {
    const dayA = a[0].toString().trim();
    const dayB = b[0].toString().trim();
    if (dayA !== dayB) return dayA.localeCompare(dayB);
    const campusA = a[9].toString().trim();
    const campusB = b[9].toString().trim();
    if (campusA !== campusB) return campusA.localeCompare(campusB);
    const lastNameA = a[1].toString().trim();
    const lastNameB = b[1].toString().trim();
    return lastNameA.localeCompare(lastNameB);
  });
  const table = unifiedTemplate.body.appendTable();
  const templateTexts = [];
  for (const recipient of data) {
    let iCol = 0;
    let iRow = 0;
    for (const text of templateTexts) {
      const newLine = mergeUnified_(text, recipient);
      const par = newCell.insertParagraph(iCol, newLine);
      par.editAsText().setAttributes(templateAttributes[iCol]);
      par.setForegroundColor(templateAttributes[iCol].FOREGROUND_COLOR);
      iCol++;
    }
  }
  unifiedTemplate.doc.saveAndClose();
}

function mergeUnified_(text, recipient) {
  const headers = ['Last Name', 'First Name', 'Gender', 'Campus', 'Running Event', 'Running Heat', 'Running Position', 'Field Event', 'Field Heat', 'Field Position'];
  headers.forEach((header, i) => {
    text = text.replace(`{{${header}}}`, recipient[i]);
  });
  return text;
}
