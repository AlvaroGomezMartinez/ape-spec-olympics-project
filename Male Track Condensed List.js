/**************************************************************************
 * The runAllMalesTrackCondensedLists() function below updates the heat *
 * and lanes for the 'Track Condensed List - Males' Google Doc using    *
 * the data from the "Student Database" sheet.                            *
**************************************************************************/

function runAllMalesTrackCondensedLists() {

  let isDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openTrackCondensedListsTemplateDoc() {
    const templateDoc = DocumentApp.openById(maleTrackCondensedListTemplateFile.getId());
    const body = templateDoc.getBody();

    /** Checks if the document has been cleared, and clears it only once */
    if (!isDocumentCleared) {
      body.clear();
      isDocumentCleared = true;
    }

    return { templateDoc, body };
  }

  /*************************************************************************
   *                       Day 1 Lists                                     *
  *************************************************************************/
  const day1M25MAstWalk = [1, 'M', '25 M WALK']
  const day1M25MAstDevice = [1, 'M', '25 M DEVICE']
  const day1M25MAstWC = [1, 'M', '25 M WC-ASSISTED']
  const day1M30MSlalom = [1, 'M', '30 M SLALOM']
  const day1M50MRun = [1, 'M', '50 MD']
  const day1M50MManualWC = [1, 'M', '50 M WC']
  const day1M100MRun = [1, 'M', '100 MD']

  async function runAllMaleDay1TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Putting together the Male Track Condensed Lists 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day1M100MRun);
    await createTrackCondensedTables(...day1M50MManualWC);
    await createTrackCondensedTables(...day1M50MRun);
    await createTrackCondensedTables(...day1M30MSlalom);
    await createTrackCondensedTables(...day1M25MAstWC);
    await createTrackCondensedTables(...day1M25MAstDevice);
    await createTrackCondensedTables(...day1M25MAstWalk);
    await runAllMaleDay2TrackCondensedFunctions();
  }

  /*************************************************************************
   *                       Day 2 Lists                                     *
  *************************************************************************/
  const day2M25MAstWalk = [2, 'M', '25 M WALK']
  const day2M25MAstDevice = [2, 'M', '25 M DEVICE']
  const day2M25MAstWC = [2, 'M', '25 M WC-ASSISTED']
  const day2M30MSlalom = [2, 'M', '30 M SLALOM']
  const day2M50MRun = [2, 'M', '50 MD']
  const day2M50MManualWC = [2, 'M', '50 M WC']
  const day2M100MRun = [2, 'M', '100 MD']

  async function runAllMaleDay2TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Day 1. Working on Days 2-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day2M100MRun);
    await createTrackCondensedTables(...day2M50MManualWC);
    await createTrackCondensedTables(...day2M50MRun);
    await createTrackCondensedTables(...day2M30MSlalom);
    await createTrackCondensedTables(...day2M25MAstWC);
    await createTrackCondensedTables(...day2M25MAstDevice);
    await createTrackCondensedTables(...day2M25MAstWalk);
    await runAllMaleDay3TrackCondensedFunctions();
  }

  /*************************************************************************
   *                       Day 3 Lists                                     *
  *************************************************************************/
  const day3M25MAstWalk = [3, 'M', '25 M WALK']
  const day3M25MAstDevice = [3, 'M', '25 M DEVICE']
  const day3M25MAstWC = [3, 'M', '25 M WC-ASSISTED']
  const day3M30MSlalom = [3, 'M', '30 M SLALOM']
  const day3M50MRun = [3, 'M', '50 MD']
  const day3M50MManualWC = [3, 'M', '50 M WC']
  const day3M100MRun = [3, 'M', '100 MD']

  async function runAllMaleDay3TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1 & 2. Working on Days 3-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day3M100MRun);
    await createTrackCondensedTables(...day3M50MManualWC);
    await createTrackCondensedTables(...day3M50MRun);
    await createTrackCondensedTables(...day3M30MSlalom);
    await createTrackCondensedTables(...day3M25MAstWC);
    await createTrackCondensedTables(...day3M25MAstDevice);
    await createTrackCondensedTables(...day3M25MAstWalk);
    await runAllMaleDay4TrackCondensedFunctions();
  }

  /*************************************************************************
   *                       Day 4 Lists                                     *
  *************************************************************************/
  const day4M25MAstWalk = [4, 'M', '25 M WALK']
  const day4M25MAstDevice = [4, 'M', '25 M DEVICE']
  const day4M25MAstWC = [4, 'M', '25 M WC-ASSISTED']
  const day4M30MSlalom = [4, 'M', '30 M SLALOM']
  const day4M50MRun = [4, 'M', '50 MD']
  const day4M50MManualWC = [4, 'M', '50 M WC']
  const day4M100MRun = [4, 'M', '100 MD']

  async function runAllMaleDay4TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-3. Working on Days 4-6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day4M100MRun);
    await createTrackCondensedTables(...day4M50MManualWC);
    await createTrackCondensedTables(...day4M50MRun);
    await createTrackCondensedTables(...day4M30MSlalom);
    await createTrackCondensedTables(...day4M25MAstWC);
    await createTrackCondensedTables(...day4M25MAstDevice);
    await createTrackCondensedTables(...day4M25MAstWalk);
    await runAllMaleDay5TrackCondensedFunctions();
  }

  /*************************************************************************
   *                       Day 5 Lists                                     *
  *************************************************************************/
  const day5M25MAstWalk = [5, 'M', '25 M WALK']
  const day5M25MAstDevice = [5, 'M', '25 M DEVICE']
  const day5M25MAstWC = [5, 'M', '25 M WC-ASSISTED']
  const day5M30MSlalom = [5, 'M', '30 M SLALOM']
  const day5M50MRun = [5, 'M', '50 MD']
  const day5M50MManualWC = [5, 'M', '50 M WC']
  const day5M100MRun = [5, 'M', '100 MD']

  async function runAllMaleDay5TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-4. Working on Days 5 & 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day5M100MRun);
    await createTrackCondensedTables(...day5M50MManualWC);
    await createTrackCondensedTables(...day5M50MRun);
    await createTrackCondensedTables(...day5M30MSlalom);
    await createTrackCondensedTables(...day5M25MAstWC);
    await createTrackCondensedTables(...day5M25MAstDevice);
    await createTrackCondensedTables(...day5M25MAstWalk);
    await runAllMaleDay6TrackCondensedFunctions();
  }

  /*************************************************************************
   *                       Day 6 Lists                                     *
  *************************************************************************/
  const day6M25MAstWalk = [6, 'M', '25 M WALK']
  const day6M25MAstDevice = [6, 'M', '25 M DEVICE']
  const day6M25MAstWC = [6, 'M', '25 M WC-ASSISTED']
  const day6M30MSlalom = [6, 'M', '30 M SLALOM']
  const day6M50MRun = [6, 'M', '50 MD']
  const day6M50MManualWC = [6, 'M', '50 M WC']
  const day6M100MRun = [6, 'M', '100 MD']

  async function runAllMaleDay6TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏽‍♂️ Finished Days 1-5. Working on Day 6 now. 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day6M100MRun);
    await createTrackCondensedTables(...day6M50MManualWC);
    await createTrackCondensedTables(...day6M50MRun);
    await createTrackCondensedTables(...day6M30MSlalom);
    await createTrackCondensedTables(...day6M25MAstWC);
    await createTrackCondensedTables(...day6M25MAstDevice);
    await createTrackCondensedTables(...day6M25MAstWalk);
    await openTrackCondensedListGoogleDoc();
  }


  /** @function that creates the tables for the lists */
  function createTrackCondensedTables(tAndFEventDay, athGender, trackEvent) {
    const { templateDoc, body } = openTrackCondensedListsTemplateDoc();
    let filteredData = [];

    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[11] === trackEvent) {
        filteredData.push(row);
      }
    }

    /** Check if filteredData is empty, jump to next list if empty */
    if (filteredData.length === 0) {
      templateDoc.saveAndClose();
    } else {
      /** 
       * Sorts the filteredData array based on two criteria in ascending order.
       * 
       * @param {array} filteredData - The array of data to be sorted.
       * @returns {array} - The sorted array.
       */
      filteredData.sort((a, b) => {
        /**
         * Comparison function to be used with filteredData.sort().
         *
         * @param {Array} a - The first element to compare.
         * @param {Array} b - The second element to compare.
         * @returns {number} - Returns a negative value if a should be sorted before b,
         *                     a positive value if a should be sorted after b,
         *                     and 0 if a and b are equal.
         */
        if (a[14] === b[14]) {
          // a[14] corresponds to the Running Heat column
          // b[14] corresponds to the Running Position
          return a[15] - b[15];
        }
        return a[14] - b[14];
      });

      const previousText = body.getText();
      const shouldAddPageBreak = previousText.trim() !== '';

      if (shouldAddPageBreak) {
        body.appendPageBreak();
      }

      let headerText5 = `Track Condensed List                      Day: ${tAndFEventDay}`;
      body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
      /** Create an object to store tables for each value in row[14] */
      const tables = {};

      /** Adds the filtered data to the respective tables */
      for (let i = 0; i < filteredData.length; i++) {
        let row = filteredData[i];
        let value = String(row[13]).padStart(2, '0'); // Assuming row[13] contains the value for table separation

        /** Check if a table already exists for the value */
        if (!tables[value]) {
          /** Create a new table if it doesn't exist */
          tables[value] = {
            table: body.appendTable(),
            headerText: `${trackEvent}                      Heat: ${value}`
          };

          /** Adds table headers for each table */
          let headersRow = tables[value].table.appendTableRow();
          headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Time').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
        }

        /** Create a new row in the respective table */
        let tableRow = tables[value].table.appendTableRow();
        tableRow.appendTableCell(typeof row[14] === 'number' ? row[14].toFixed(0) : '');
        tableRow.appendTableCell(row[2]);
        tableRow.appendTableCell(row[1]);
        tableRow.appendTableCell(row[3]);
        tableRow.appendTableCell(row[9]);
        // Time column from column M (row[12]), formatted to hundredths
        tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(2) : '');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');
        tableRow.appendTableCell('');
      }

      /** Add header text before each table */
      Object.keys(tables).forEach((value, index) => {
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
  function openTrackCondensedListGoogleDoc() {
    let doc = DocumentApp.openById(maleTrackCondensedListTemplateFile.getId());
    let url = doc.getUrl();

    let htmlContent = '<p>🏆 Thanks for your patience! 😅<br><br> The Male Track Condensed List has been updated.</p>';
    htmlContent += '<p>Click <a href="' + url + '" target="_blank">here</a> to open it up.</p>';

    let htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(400)
      .setHeight(150);

    /** Displays the custom dialog box */
    SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Google Doc Updated');
  }
  runAllMaleDay1TrackCondensedFunctions()
}
