/** 
 * Last update: October 24, 2024
*/

function runAllMalesFieldHeatSheets() {

  let isMalesFieldHeatSheetsDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openMalesFieldHeatSheetsTemplateDoc() {
    let maleTemplateDoc = DocumentApp.openById(maleFieldHeatSheetsTemplateFile.getId());
    let maleBody = maleTemplateDoc.getBody();

    /**  Checks if the document has been cleared, and clears it only once */
    if (!isMalesFieldHeatSheetsDocumentCleared) {
      maleBody.clear();
      isMalesFieldHeatSheetsDocumentCleared = true;
    }

    return { maleTemplateDoc, maleBody };
  }

  /*************************************************************************
   *                       Day 1 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay1MBeanbagThrow = [1, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay1MTennisBallThrow = [1, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay1MSoftball = [1, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay1MRunningLJ = [1, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay1MStandingLJ = [1, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay1MFoamTurboJav = [1, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay1MTurboJav = [1, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay1Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Putting together the Male Field Heat Sheets - Scorecards 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay1MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay1MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay1MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay1MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay1MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay1MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay1MBeanbagThrow);
    await runAllMaleFieldHeatSheetsDay2Functions();
  }

  /*************************************************************************
   *                       Day 2 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay2MBeanbagThrow = [2, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay2MTennisBallThrow = [2, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay2MSoftball = [2, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay2MRunningLJ = [2, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay2MStandingLJ = [2, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay2MFoamTurboJav = [2, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay2MTurboJav = [2, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay2Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Day 1 working on Days 2-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay2MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay2MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay2MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay2MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay2MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay2MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay2MBeanbagThrow);
    await runAllMaleFieldHeatSheetsDay3Functions();
  }

  /*************************************************************************
   *                       Day 3 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay3MBeanbagThrow = [3, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay3MTennisBallThrow = [3, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay3MSoftball = [3, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay3MRunningLJ = [3, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay3MStandingLJ = [3, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay3MFoamTurboJav = [3, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay3MTurboJav = [3, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay3Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1 & 2 working on Days 3-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay3MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay3MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay3MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay3MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay3MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay3MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay3MBeanbagThrow);
    await runAllMaleFieldHeatSheetsDay4Functions();
  }

  /*************************************************************************
   *                       Day 4 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay4MBeanbagThrow = [4, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay4MTennisBallThrow = [4, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay4MSoftball = [4, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay4MRunningLJ = [4, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay4MStandingLJ = [4, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay4MFoamTurboJav = [4, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay4MTurboJav = [4, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay4Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-3 working on Days 4-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay4MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay4MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay4MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay4MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay4MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay4MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay4MBeanbagThrow);
    await runAllMaleFieldHeatSheetsDay5Functions();
  }

  /*************************************************************************
   *                       Day 5 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay5MBeanbagThrow = [5, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay5MTennisBallThrow = [5, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay5MSoftball = [5, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay5MRunningLJ = [5, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay5MStandingLJ = [5, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay5MFoamTurboJav = [5, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay5MTurboJav = [5, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay5Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-4 working on Days 5 & 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay5MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay5MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay5MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay5MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay5MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay5MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay5MBeanbagThrow);
    await runAllMaleFieldHeatSheetsDay6Functions();
  }

  /*************************************************************************
   *                       Day 6 Lists                                     *
  *************************************************************************/
  const fieldHeatSheetsDay6MBeanbagThrow = [6, 'M', 'BEAN BAG THROW']
  const fieldHeatSheetsDay6MTennisBallThrow = [6, 'M', 'TENNIS BALL THROW']
  const fieldHeatSheetsDay6MSoftball = [6, 'M', 'SOFTBALL']
  const fieldHeatSheetsDay6MRunningLJ = [6, 'M', 'RUNNING LJ']
  const fieldHeatSheetsDay6MStandingLJ = [6, 'M', 'STANDING LJ']
  const fieldHeatSheetsDay6MFoamTurboJav = [6, 'M', 'FOAM TURBOJAV']
  const fieldHeatSheetsDay6MTurboJav = [6, 'M', 'TURBO JAV']

  async function runAllMaleFieldHeatSheetsDay6Functions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-5 working on Day 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createHeatSheetTables(...fieldHeatSheetsDay6MTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay6MFoamTurboJav);
    await createHeatSheetTables(...fieldHeatSheetsDay6MRunningLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay6MStandingLJ);
    await createHeatSheetTables(...fieldHeatSheetsDay6MSoftball);
    await createHeatSheetTables(...fieldHeatSheetsDay6MTennisBallThrow);
    await createHeatSheetTables(...fieldHeatSheetsDay6MBeanbagThrow);
    await openMaleHeatSheetsGoogleDoc();
  }

  function createHeatSheetTables(tAndFEventDay, athGender, fieldEvent) {
    const { maleTemplateDoc, maleBody } = openMalesFieldHeatSheetsTemplateDoc();
    let filteredData = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[16] === fieldEvent) {
        filteredData.push(row);
      }
    }

    /** Check if filteredData is empty, jump to next list if empty */
    if (filteredData.length === 0) {
      maleTemplateDoc.saveAndClose();
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
            table: maleBody.appendTable(),
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
        tableRow.appendTableCell(row[9]);
        tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '0');
        tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0).padStart(2, '0') : '');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');

        // Insert a page break after each table except the last one
        if (i < filteredData.length - 1) {
          // Check if the current table and the next table have different values in row[19]
          let currentValue = String(row[19]).padStart(2, '0');
          let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
          if (currentValue !== nextValue) {
            maleBody.appendPageBreak();
          }
        }
      }

      /** Add header text before each table */
      Object.keys(tables).forEach((value, index) => {
        let headerText = headerText5 + '\n' + tables[value].headerText;
        maleBody.insertParagraph(maleBody.getChildIndex(tables[value].table), headerText).setAttributes(style);
      });

      maleBody.appendPageBreak();
      maleTemplateDoc.saveAndClose();
    }
  };

  /** The function below creates a dialog box for the user in the SE Olympics sheet
   * letting them know that the list is ready to be viwed and gives them the hyperlink
   * to open the doc.
   * @todo change the docId with the ID from the actual doc once this project goes live.
   */
  function openMaleHeatSheetsGoogleDoc() {
    let doc = DocumentApp.openById(maleFieldHeatSheetsTemplateFile.getId());
    let url = doc.getUrl();

    let htmlContent = '<p>Thanks for being patient! 😅<br><br>The Male Field Heat Sheets - Scorecards have been updated.</p>';
    htmlContent += '<p>Click <a href="' + url + '" target="_blank">here</a> to open it up.</p>';

    let htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(400)
      .setHeight(200);

    /** Displays the custom dialog box */
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Google Doc Updated');
  }

  runAllMaleFieldHeatSheetsDay1Functions()
}