/**
 * Last updated: April 4, 2024
*/

function runAllMalesFieldCondensedLists () {
  
  let isMaleFieldcondensedListsDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openMaleTemplateDoc() {
    const templateDoc = DocumentApp.openById(maleFieldCondensedListTemplateFile.getId());
    const body = templateDoc.getBody();

    /**  Checks if the document has been cleared, and clears it only once */
    if (!isMaleFieldcondensedListsDocumentCleared) {
      body.clear();
      isMaleFieldcondensedListsDocumentCleared = true;
    }

    return { templateDoc, body };
  }

  /** DAY 1 LISTS */
  const day1MBeanbagThrow = [1,'M','BEAN BAG THROW']
  const day1MTennisBallThrow = [1,'M','TENNIS BALL THROW']  
  const day1MSoftball = [1,'M','SOFTBALL THROW']
  const day1MRunningLJ = [1,'M','RUNNING LONG JUMP']
  const day1MFoamTurboJav = [1,'M','FOAM TURBO JAV']
  const day1MTurboJav = [1,'M','TURBO JAV']

  async function runAllMaleDay1Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Putting together the Males Field Condensed List. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day1MTurboJav);
    await createTables(...day1MFoamTurboJav);
    await createTables(...day1MRunningLJ);
    await createTables(...day1MSoftball);
    await createTables(...day1MTennisBallThrow);
    await createTables(...day1MBeanbagThrow);
    await runAllMaleDay2Functions();
  }

  /** DAY 2 LISTS */
  const day2MBeanbagThrow = [2,'M','BEAN BAG THROW']
  const day2MTennisBallThrow = [2,'M','TENNIS BALL THROW']
  const day2MSoftball = [2,'M','SOFTBALL THROW']
  const day2MRunningLJ = [2,'M','RUNNING LONG JUMP']
  const day2MFoamTurboJav = [2,'M','FOAM TURBO JAV']
  const day2MTurboJav = [2,'M','TURBO JAV']

  async function runAllMaleDay2Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Day 1 working on Days 2-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day2MTurboJav);
    await createTables(...day2MFoamTurboJav);
    await createTables(...day2MRunningLJ);
    await createTables(...day2MSoftball);
    await createTables(...day2MTennisBallThrow);
    await createTables(...day2MBeanbagThrow);
    await runAllMaleDay3Functions();
  }

  /** DAY 3 LISTS */
  const day3MBeanbagThrow = [3,'M','BEAN BAG THROW']
  const day3MTennisBallThrow = [3,'M','TENNIS BALL THROW']
  const day3MSoftball = [3,'M','SOFTBALL THROW']
  const day3MRunningLJ = [3,'M','RUNNING LONG JUMP']
  const day3MFoamTurboJav = [3,'M','FOAM TURBO JAV']
  const day3MTurboJav = [3,'M','TURBO JAV']

  async function runAllMaleDay3Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1 & 2 working on Days 3-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day3MTurboJav);
    await createTables(...day3MFoamTurboJav);
    await createTables(...day3MRunningLJ);
    await createTables(...day3MSoftball);
    await createTables(...day3MTennisBallThrow);
    await createTables(...day3MBeanbagThrow);
    await runAllMaleDay4Functions();
  }

  /** DAY 4 LISTS */
  const day4MBeanbagThrow = [4,'M','BEAN BAG THROW']
  const day4MTennisBallThrow = [4,'M','TENNIS BALL THROW']
  const day4MSoftball = [4,'M','SOFTBALL THROW']
  const day4MRunningLJ = [4,'M','RUNNING LONG JUMP']
  const day4MFoamTurboJav = [4,'M','FOAM TURBO JAV']
  const day4MTurboJav = [4,'M','TURBO JAV']

  async function runAllMaleDay4Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-3 working on Days 4-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day4MTurboJav);
    await createTables(...day4MFoamTurboJav);
    await createTables(...day4MRunningLJ);
    await createTables(...day4MSoftball);
    await createTables(...day4MTennisBallThrow);
    await createTables(...day4MBeanbagThrow);
    await runAllMaleDay5Functions();
  }

  /** DAY 5 LISTS */
  const day5MBeanbagThrow = [5,'M','BEAN BAG THROW']
  const day5MTennisBallThrow = [5,'M','TENNIS BALL THROW']
  const day5MSoftball = [5,'M','SOFTBALL THROW']
  const day5MRunningLJ = [5,'M','RUNNING LONG JUMP']
  const day5MFoamTurboJav = [5,'M','FOAM TURBO JAV']
  const day5MTurboJav = [5,'M','TURBO JAV']

  async function runAllMaleDay5Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-4 working on Days 5 & 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day5MTurboJav);    
    await createTables(...day5MFoamTurboJav);
    await createTables(...day5MRunningLJ);
    await createTables(...day5MSoftball);
    await createTables(...day5MTennisBallThrow);
    await createTables(...day5MBeanbagThrow);
    await runAllMaleDay6Functions();
  }

  /** DAY 6 LISTS */
  const day6MBeanbagThrow = [6,'M','BEAN BAG THROW']
  const day6MTennisBallThrow = [6,'M','TENNIS BALL THROW']
  const day6MSoftball = [6,'M','SOFTBALL THROW']
  const day6MRunningLJ = [6,'M','RUNNING LONG JUMP']
  const day6MFoamTurboJav = [6,'M','FOAM TURBO JAV']
  const day6MTurboJav = [6,'M','TURBO JAV']

  async function runAllMaleDay6Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-5 working on Day 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTables(...day6MTurboJav);
    await createTables(...day6MFoamTurboJav);
    await createTables(...day6MRunningLJ);
    await createTables(...day6MSoftball);
    await createTables(...day6MTennisBallThrow);
    await createTables(...day6MBeanbagThrow);
    await openMalesFieldCondensedListGoogleDoc();
  }

  /** Function that creates the tables for the lists */
  function createTables (tAndFEventDay, athGender, fieldEvent) {
    const { templateDoc, body } = openMaleTemplateDoc();

    let filteredData = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[16] === fieldEvent) {
        filteredData.push(row);
      }
    }

    /** Check if filteredData is empty, jump to next list if empty */
    if (filteredData.length === 0) {
      templateDoc.saveAndClose();
    } else {
      /** Sort filteredData array by row[19] and then by row[20] in ascending order */
      filteredData.sort((a, b) => {
        if (a[19] === b[19]) {
          return a[20] - b[20];
        }
        return a[19] - b[19];
      });

      const previousText = body.getText();
      const shouldAddPageBreak = previousText.trim() !== '';

      if (shouldAddPageBreak) {
        body.appendPageBreak();
      }

      let headerText5 = `FIELD EVENTS CONDENSED LIST               DAY: ${tAndFEventDay}`;
      body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
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
            table: body.appendTable(),
            headerText: `${fieldEvent}              HEAT: ${value}`
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
      }

      /** Add header text before each table */
      Object.keys(tables)
        .forEach((value, index) => {
          body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
      });

      templateDoc.saveAndClose();
    }
  }

  /** The function below creates a dialog box for the user in the SE Olympics sheet
   * letting them know that the list is ready to be viwed and gives them the hyperlink
   * to open the doc.
   * @todo change the docId with the ID from the actual doc once this project goes live.
   */
  function openMalesFieldCondensedListGoogleDoc() {
    let doc = DocumentApp.openById(maleFieldCondensedListTemplateFile.getId());
    let url = doc.getUrl();
    
    let htmlContent = '<p>🏆 Thanks for your patience! 😅<br><br>The Males Field Consolidated List has been updated.</p>';
    htmlContent += '<p>Click <a href="' + url + '" target="_blank">here</a> to open it up.</p>';
    let htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(400)
      .setHeight(200);

    /** Displays the custom dialog box */
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Google Doc Updated');
  }

  runAllMaleDay1Functions()
}