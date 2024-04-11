function createMailingLabels() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Student Database");
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  var docTemplateId = "1smUJP4RwMuX-VKNsipII0W-2ZWkcigvH7N9j2EyA2N8";
  var docName = "T&F Event Labels";
  
  var labelTemplate = DocumentApp.openById(docTemplateId);
  var labelContent = labelTemplate.getBody().getText();
  
  var placeholderNames = ['<<Last Name>>', '<<First Name>>', '<<Campus>>', '<<Gender>>', '<<Running Event>>', '<<Running Heat>>', '<<Running Position>>', '<<Field Event>>'];

  var labelDoc = DocumentApp.create(docName); // Create a new document for labels
  var labelBody = labelDoc.getBody();

  for (var i = 1; i < data.length; i++) {
    var recipientData = data[i];

    // Replace placeholders with recipient data
    var labelContentCopy = labelContent;
    for (var j = 0; j < placeholderNames.length; j++) {
      var placeholder = placeholderNames[j];
      var replacement = recipientData[j];
      labelContentCopy = labelContentCopy.replace(new RegExp(placeholder, "g"), replacement);
    }

    // Append the label to the new document
    labelBody.appendParagraph(labelContentCopy);
    labelBody.appendPageBreak();
  }

  // Save and close the label document
  labelDoc.saveAndClose();

}
