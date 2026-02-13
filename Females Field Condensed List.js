/**************************************************************************
 * The runAllFemalesFieldCondensedLists() function below updates the heat *
 * and lanes for the 'Field Condensed List - Females' Google Doc using    *
 * the data from the "Student Database" sheet.                            *
**************************************************************************/

function runAllFemalesFieldCondensedLists() {

  let isFemaleCondensedListDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openFemaleTemplateDoc() {
    const templateDoc = DocumentApp.openById(femaleFieldCondensedListTemplateFile.getId());
    const body = templateDoc.getBody();

    /** Checks if the document has been cleared, and clears it only once*/
    if (!isFemaleCondensedListDocumentCleared) {
      body.clear();
      isFemaleCondensedListDocumentCleared = true;
    }

    return { templateDoc, body };
  }

  /*************************************************************************
   *                       Day 1 Lists                                     *
  *************************************************************************/
  const day1FBeanbagThrow = [1, 'F', 'BEAN BAG THROW']
  const day1FTennisBallThrow = [1, 'F', 'TENNIS BALL THROW']
  const day1FSoftball = [1, 'F', 'SOFTBALL']
  const day1FRunningLJ = [1, 'F', 'RUNNING LJ']
  const day1FStandingLJ = [1, 'F', 'STANDING LJ']
  const day1FFoamTurboJav = [1, 'F', 'FOAM TURBOJAV']
  const day1FTurboJav = [1, 'F', 'TURBO JAV']

  async function runAllFemaleDay1Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the Female Field Condensed List. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day1FTurboJav);
    await createTables(...day1FFoamTurboJav);
    await createTables(...day1FRunningLJ);
    await createTables(...day1FStandingLJ);
    await createTables(...day1FSoftball);
    await createTables(...day1FTennisBallThrow);
    await createTables(...day1FBeanbagThrow);
    await runAllFemaleDay2Functions();
  }

  /*************************************************************************
   *                       Day 2 Lists                                     *
  *************************************************************************/
  const day2FBeanbagThrow = [2, 'F', 'BEAN BAG THROW']
  const day2FTennisBallThrow = [2, 'F', 'TENNIS BALL THROW']
  const day2FSoftball = [2, 'F', 'SOFTBALL']
  const day2FRunningLJ = [2, 'F', 'RUNNING LJ']
  const day2FStandingLJ = [2, 'F', 'STANDING LJ']
  const day2FFoamTurboJav = [2, 'F', 'FOAM TURBOJAV']
  const day2FTurboJav = [2, 'F', 'TURBO JAV']

  async function runAllFemaleDay2Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Day 1 working on Days 2-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day2FTurboJav);
    await createTables(...day2FFoamTurboJav);
    await createTables(...day2FRunningLJ);
    await createTables(...day2FStandingLJ);
    await createTables(...day2FSoftball);
    await createTables(...day2FTennisBallThrow);
    await createTables(...day2FBeanbagThrow);
    await runAllFemaleDay3Functions();
  }

  /*************************************************************************
   *                       Day 3 Lists                                     *
  *************************************************************************/
  const day3FBeanbagThrow = [3, 'F', 'BEAN BAG THROW']
  const day3FTennisBallThrow = [3, 'F', 'TENNIS BALL THROW']
  const day3FSoftball = [3, 'F', 'SOFTBALL']
  const day3FRunningLJ = [3, 'F', 'RUNNING LJ']
  const day3FStandingLJ = [3, 'F', 'STANDING LJ']
  const day3FFoamTurboJav = [3, 'F', 'FOAM TURBOJAV']
  const day3FTurboJav = [3, 'F', 'TURBO JAV']

  async function runAllFemaleDay3Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1 & 2 working on Days 3-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day3FTurboJav);
    await createTables(...day3FFoamTurboJav);
    await createTables(...day3FRunningLJ);
    await createTables(...day3FStandingLJ);
    await createTables(...day3FSoftball);
    await createTables(...day3FTennisBallThrow);
    await createTables(...day3FBeanbagThrow);
    await runAllFemaleDay4Functions();
  }

  /*************************************************************************
   *                       Day 4 Lists                                     *
  *************************************************************************/
  const day4FBeanbagThrow = [4, 'F', 'BEAN BAG THROW']
  const day4FTennisBallThrow = [4, 'F', 'TENNIS BALL THROW']
  const day4FSoftball = [4, 'F', 'SOFTBALL']
  const day4FRunningLJ = [4, 'F', 'RUNNING LJ']
  const day4FStandingLJ = [4, 'F', 'STANDING LJ']
  const day4FFoamTurboJav = [4, 'F', 'FOAM TURBOJAV']
  const day4FTurboJav = [4, 'F', 'TURBO JAV']

  async function runAllFemaleDay4Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-3 working on Days 4-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day4FTurboJav);
    await createTables(...day4FFoamTurboJav);
    await createTables(...day4FRunningLJ);
    await createTables(...day4FStandingLJ);
    await createTables(...day4FSoftball);
    await createTables(...day4FTennisBallThrow);
    await createTables(...day4FBeanbagThrow);
    await runAllFemaleDay5Functions();
  }

  /*************************************************************************
   *                       Day 5 Lists                                     *
  *************************************************************************/
  const day5FBeanbagThrow = [5, 'F', 'BEAN BAG THROW']
  const day5FTennisBallThrow = [5, 'F', 'TENNIS BALL THROW']
  const day5FSoftball = [5, 'F', 'SOFTBALL']
  const day5FRunningLJ = [5, 'F', 'RUNNING LJ']
  const day5FStandingLJ = [5, 'F', 'STANDING LJ']
  const day5FFoamTurboJav = [5, 'F', 'FOAM TURBOJAV']
  const day5FTurboJav = [5, 'F', 'TURBO JAV']

  async function runAllFemaleDay5Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-4 working on Days 5 & 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day5FTurboJav);
    await createTables(...day5FFoamTurboJav);
    await createTables(...day5FRunningLJ);
    await createTables(...day5FStandingLJ);
    await createTables(...day5FSoftball);
    await createTables(...day5FTennisBallThrow);
    await createTables(...day5FBeanbagThrow);
    await runAllFemaleDay6Functions();
  }

  /*************************************************************************
   *                       Day 6 Lists                                     *
  *************************************************************************/
  const day6FBeanbagThrow = [6, 'F', 'BEAN BAG THROW']
  const day6FTennisBallThrow = [6, 'F', 'TENNIS BALL THROW']
  const day6FSoftball = [6, 'F', 'SOFTBALL']
  const day6FRunningLJ = [6, 'F', 'RUNNING LJ']
  const day6FStandingLJ = [6, 'F', 'STANDING LJ']
  const day6FFoamTurboJav = [6, 'F', 'FOAM TURBOJAV']
  const day6FTurboJav = [6, 'F', 'TURBO JAV']

  async function runAllFemaleDay6Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-5 working on Day 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTables(...day6FTurboJav);
    await createTables(...day6FFoamTurboJav);
    await createTables(...day6FRunningLJ);
    await createTables(...day6FStandingLJ);
    await createTables(...day6FSoftball);
    await createTables(...day6FTennisBallThrow);
    await createTables(...day6FBeanbagThrow);
    await openFemaleGoogleDoc();
  }

  /** Function that creates the tables for the lists */
  function createTables(tAndFEventDay, athGender, fieldEvent) {
    const { templateDoc, body } = openFemaleTemplateDoc();

    let filteredData = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[15] === fieldEvent) {
        filteredData.push(row);
      }
    }

    /** Check if filteredData is empty, jump to next list if empty */
    if (filteredData.length === 0) {
      templateDoc.saveAndClose();
    } else {
      /** Sort filteredData array by row[17] and then by row[18] in ascending order */
      filteredData.sort((a, b) => {
        if (a[17] === b[17]) {
          return a[18] - b[18];
        }
        return a[17] - b[17];
      });

      const previousText = body.getText();
      const shouldAddPageBreak = previousText.trim() !== '';

      if (shouldAddPageBreak) {
        body.appendPageBreak();
      }

      let headerText5 = `FIELD EVENTS CONDENSED LIST               DAY: ${tAndFEventDay}`;
      body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
      /** Create an object to store tables for each value in row[17] */
      const tables = {};

      /** Adds the filtered data to the respective tables */
      for (let i = 0; i < filteredData.length; i++) {
        let row = filteredData[i];
        let value = String(row[17]).padStart(2, '0'); // Assuming row[17] contains the value for table separation

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
        tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
        tableRow.appendTableCell(row[2]);
        tableRow.appendTableCell(row[1]);
        tableRow.appendTableCell(row[3]);
        tableRow.appendTableCell(row[9]);
        tableRow.appendTableCell(typeof row[16] === 'number' ? row[16].toFixed(0) : '0');
        tableRow.appendTableCell(typeof row[16] === 'number' ? row[16].toFixed(0).padStart(2, '0') : '');
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
  function openFemaleGoogleDoc() {
    let templateDoc = DocumentApp.openById(femaleFieldCondensedListTemplateFile.getId());
    let url = templateDoc.getUrl();

    let htmlContent = '<p>🏆 Thanks for your patience! 😅<br><br>The Females Field Consolidated List has been updated.</p>';
    htmlContent += '<p>Click <a href="' + url + '" target="_blank">here</a> to open it up.</p>';
    let htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(400)
      .setHeight(200);

    /** Displays the custom dialog box */
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Google Doc Updated');
  }

  runAllFemaleDay1Functions()
}
