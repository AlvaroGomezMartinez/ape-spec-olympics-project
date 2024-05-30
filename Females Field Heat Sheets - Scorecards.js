/** 
 * Last update: April 4, 2024
*/

function runAllFemalesFieldHeatSheets() {

  let isFemalesFieldHeatSheetsDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openFemalesFieldHeatSheetsTemplateDoc() {
    const femaleTemplateDoc = DocumentApp.openById(femaleFieldHeatSheetsTemplateFile.getId());
    const femaleBody = femaleTemplateDoc.getBody();

    /**  Checks if the document has been cleared, and clears it only once */
    if (!isFemalesFieldHeatSheetsDocumentCleared) {
      femaleBody.clear();
      isFemalesFieldHeatSheetsDocumentCleared = true;
    }

    return { femaleTemplateDoc, femaleBody };
  }

  /** DAY 1 LISTS */
  const fieldHeatSheetsDay1FBeanbagThrow = [1,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay1FTennisBallThrow = [1,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay1FSoftball = [1,'F','SOFTBALL']
  const fieldHeatSheetsDay1FRunningLJ = [1,'F','RUNNING LJ']
  const fieldHeatSheetsDay1FFoamTurboJav = [1,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay1FTurboJav = [1,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay1Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the Female Field Heat Sheets - Scorecards 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay1FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay1FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay1FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay1FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay1FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay1FBeanbagThrow);
    await runAllFemaleFieldHeatSheetsDay2Functions();
  }

  /** DAY 2 LISTS */
  const fieldHeatSheetsDay2FBeanbagThrow = [2,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay2FTennisBallThrow = [2,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay2FSoftball = [2,'F','SOFTBALL']
  const fieldHeatSheetsDay2FRunningLJ = [2,'F','RUNNING LJ']
  const fieldHeatSheetsDay2FFoamTurboJav = [2,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay2FTurboJav = [2,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay2Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Day 1 working on Days 2-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay2FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay2FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay2FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay2FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay2FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay2FBeanbagThrow);
    await runAllFemaleFieldHeatSheetsDay3Functions();
  }

  /** DAY 3 LISTS */
  const fieldHeatSheetsDay3FBeanbagThrow = [3,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay3FTennisBallThrow = [3,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay3FSoftball = [3,'F','SOFTBALL']
  const fieldHeatSheetsDay3FRunningLJ = [3,'F','RUNNING LJ']
  const fieldHeatSheetsDay3FFoamTurboJav = [3,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay3FTurboJav = [3,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay3Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1 & 2 working on Days 3-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay3FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay3FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay3FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay3FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay3FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay3FBeanbagThrow);
    await runAllFemaleFieldHeatSheetsDay4Functions();
  }

  /** DAY 4 LISTS */
  const fieldHeatSheetsDay4FBeanbagThrow = [4,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay4FTennisBallThrow = [4,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay4FSoftball = [4,'F','SOFTBALL']
  const fieldHeatSheetsDay4FRunningLJ = [4,'F','RUNNING LJ']
  const fieldHeatSheetsDay4FFoamTurboJav = [4,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay4FTurboJav = [4,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay4Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-3 working on Days 4-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay4FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay4FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay4FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay4FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay4FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay4FBeanbagThrow);
    await runAllFemaleFieldHeatSheetsDay5Functions();
  }

  /** DAY 5 LISTS */
  const fieldHeatSheetsDay5FBeanbagThrow = [5,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay5FTennisBallThrow = [5,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay5FSoftball = [5,'F','SOFTBALL']
  const fieldHeatSheetsDay5FRunningLJ = [5,'F','RUNNING LJ']
  const fieldHeatSheetsDay5FFoamTurboJav = [5,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay5FTurboJav = [5,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay5Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-4 working on Days 5 & 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay5FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay5FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay5FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay5FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay5FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay5FBeanbagThrow);
    await runAllFemaleFieldHeatSheetsDay6Functions();
  }

  /** DAY 6 LISTS */
  const fieldHeatSheetsDay6FBeanbagThrow = [6,'F','BEAN BAG THROW']
  const fieldHeatSheetsDay6FTennisBallThrow = [6,'F','TENNIS BALL THROW']
  const fieldHeatSheetsDay6FSoftball = [6,'F','SOFTBALL']
  const fieldHeatSheetsDay6FRunningLJ = [6,'F','RUNNING LJ']
  const fieldHeatSheetsDay6FFoamTurboJav = [6,'F','FOAM TURBOJAV']
  const fieldHeatSheetsDay6FTurboJav = [6,'F','TURBO JAV']

  async function runAllFemaleFieldHeatSheetsDay6Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-5 working on Day 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay6FTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay6FFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay6FRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay6FSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay6FTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay6FBeanbagThrow);
    await openFemalesHeatSheetsGoogleDoc();
  }

  function createHeatSheetTables(tAndFEventDay, athGender, fieldEvent) {
    const { femaleTemplateDoc, femaleBody } = openFemalesFieldHeatSheetsTemplateDoc();
    let filteredData = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[16] === fieldEvent) {
        filteredData.push(row);
      }
    }

    /** Check if filteredData is empty, jump to next list if empty */
    if (filteredData.length === 0) {
      femaleTemplateDoc.saveAndClose();
    } else {
      /** Sort filteredData array by row[19] and then by row[20] in ascending order */
      filteredData.sort((a, b) => {
        if (a[19] === b[19]) {
          return a[20] - b[20];
        }
        return a[19] - b[19];
      });

      let headerText5 = `Field Heat Sheets - Scorecards                      Day: ${tAndFEventDay}`;

      /** Create an object to store tables for each value in row[19] */
      const tables = {};

      /** Adds the filtered data to the respective tables */
      for (let i = 0; i < filteredData.length; i++) {
        let row = filteredData[i];
        let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
        
        /** Check if a table already exists for the value */
        if (!tables[value]) {
          /** Create a new table if it doesn't exist */
          tables[value] = {
            table: femaleBody.appendTable(),
            headerText: `     ${fieldEvent}                Heat: ${value}`
          };

          /** Adds table headers for each table */
          let headersRow = tables[value].table.appendTableRow();
          headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
        }

        /** Create a new row in the respective table */
        let tableRow = tables[value].table.appendTableRow();
        tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
        tableRow.appendTableCell(row[2]);
        tableRow.appendTableCell(row[1]);
        tableRow.appendTableCell(row[3]);
        tableRow.appendTableCell(row[10]);
        tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
        tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');

        // Insert a page break after each table except the last one
        if (i < filteredData.length - 1) {
          // Check if the current table and the next table have different values in row[19]
          let currentValue = String(row[19]).padStart(2, '0');
          let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
          if (currentValue !== nextValue) {
            femaleBody.appendPageBreak();
          }
        }
      }

      /** Add header text before each table */
      Object.keys(tables).forEach((value, index) => {
        let headerText = headerText5 + '\n' + tables[value].headerText;
        femaleBody.insertParagraph(femaleBody.getChildIndex(tables[value].table), headerText).setAttributes(style);
      });

      femaleBody.appendPageBreak();
      femaleTemplateDoc.saveAndClose();
    }
  };

  /** The function below creates a dialog box for the user in the SE Olympics sheet
   * letting them know that the list is ready to be viwed and gives them the hyperlink
   * to open the doc.
   * @todo change the docId with the ID from the actual doc once this project goes live.
   */
  function openFemalesHeatSheetsGoogleDoc() {
    let femaleDoc = DocumentApp.openById(femaleFieldHeatSheetsTemplateFile.getId());
    let url = femaleDoc.getUrl();
    
    let htmlContent = '<p>Thanks for being patient! 😅<br><br>The Female Field Heat Sheets - Scorecards have been updated.</p>';
    htmlContent += '<p>Click <a href="' + url + '" target="_blank">here</a> to open it up.</p>';

    let htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(400)
      .setHeight(200);
    
    /** Displays the custom dialog box */
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Google Doc Updated');
  }

  runAllFemaleFieldHeatSheetsDay1Functions()
}