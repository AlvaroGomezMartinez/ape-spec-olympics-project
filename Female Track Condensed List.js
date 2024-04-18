/**
 * Last Update: April 4, 2024
*/

function runAllFemalesTrackCondensedLists() {

  let isDocumentCleared = false;

  /**
   * @function This is a helper function to open or reopen the template GDoc for each
   * of the functions that follow. This was a fix for saving the lists while the functions
   * run so an error isn't created regarding too much being generated to create the file.
   */
  function openTrackCondensedListsTemplateDoc() {
    const templateDoc = DocumentApp.openById(femaleTrackCondensedListTemplateFile.getId());
    const body = templateDoc.getBody();

    /** Check if the document has been cleared, and clear it only once */
    if (!isDocumentCleared) {
      body.clear();
      isDocumentCleared = true;
    }

    return { templateDoc, body };
  }

  /** Day 1 Lists */
  const day1F25MAstWalk = [1,'F','25 M Assisted Walk']
  const day1F25MAstDevice = [1,'F','25 M Assisted Device']
  const day1F25MAstWC = [1,'F','25 M Assisted WC']
  const day1F25MManWC = [1,'F','25 M Manual WC']
  const day1F30MSlalom = [1,'F','30 M Slalom']
  const day1F50MRun = [1,'F','50 M Run']
  const day1F50MManualWC = [1,'F','50 M Manual WC']
  const day1F100MRun = [1,'F','100 M Run']

  async function runAllFemaleDay1TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the Female Track Condensed Lists 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day1F100MRun);
    await createTrackCondensedTables(...day1F50MManualWC);
    await createTrackCondensedTables(...day1F50MRun);
    await createTrackCondensedTables(...day1F30MSlalom);
    await createTrackCondensedTables(...day1F25MManWC);
    await createTrackCondensedTables(...day1F25MAstWC);
    await createTrackCondensedTables(...day1F25MAstDevice);
    await createTrackCondensedTables(...day1F25MAstWalk);
    await runAllFemaleDay2TrackCondensedFunctions();
  }

  /** Day 2 Lists */
  const day2F25MAstWalk = [2,'F','25 M Assisted Walk']
  const day2F25MAstDevice = [2,'F','25 M Assisted Device']
  const day2F25MAstWC = [2,'F','25 M Assisted WC']
  const day2F25MManWC = [2,'F','25 M Manual WC']
  const day2F30MSlalom = [2,'F','30 M Slalom']
  const day2F50MRun = [2,'F','50 M Run']
  const day2F50MManualWC = [2,'F','50 M Manual WC']
  const day2F100MRun = [2,'F','100 M Run']

  async function runAllFemaleDay2TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Day 1. Working on Days 2-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day2F100MRun);
    await createTrackCondensedTables(...day2F50MManualWC);
    await createTrackCondensedTables(...day2F50MRun);
    await createTrackCondensedTables(...day2F30MSlalom);
    await createTrackCondensedTables(...day2F25MManWC);
    await createTrackCondensedTables(...day2F25MAstWC);
    await createTrackCondensedTables(...day2F25MAstDevice);
    await createTrackCondensedTables(...day2F25MAstWalk);
    await runAllFemaleDay3TrackCondensedFunctions();
  }

  /** Day 3 Lists */
  const day3F25MAstWalk = [3,'F','25 M Assisted Walk']
  const day3F25MAstDevice = [3,'F','25 M Assisted Device']
  const day3F25MAstWC = [3,'F','25 M Assisted WC']
  const day3F25MManWC = [3,'F','25 M Manual WC']
  const day3F30MSlalom = [3,'F','30 M Slalom']
  const day3F50MRun = [3,'F','50 M Run']
  const day3F50MManualWC = [3,'F','50 M Manual WC']
  const day3F100MRun = [3,'F','100 M Run']

  async function runAllFemaleDay3TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1 & 2. Working on Days 3-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day3F100MRun);
    await createTrackCondensedTables(...day3F50MManualWC);
    await createTrackCondensedTables(...day3F50MRun);
    await createTrackCondensedTables(...day3F30MSlalom);
    await createTrackCondensedTables(...day3F25MManWC);
    await createTrackCondensedTables(...day3F25MAstWC);
    await createTrackCondensedTables(...day3F25MAstDevice);
    await createTrackCondensedTables(...day3F25MAstWalk);
    await runAllFemaleDay4TrackCondensedFunctions();
  }

  /** Day 4 Lists */
  const day4F25MAstWalk = [4,'F','25 M Assisted Walk']
  const day4F25MAstDevice = [4,'F','25 M Assisted Device']
  const day4F25MAstWC = [4,'F','25 M Assisted WC']
  const day4F25MManWC = [4,'F','25 M Manual WC']
  const day4F30MSlalom = [4,'F','30 M Slalom']
  const day4F50MRun = [4,'F','50 M Run']
  const day4F50MManualWC = [4,'F','50 M Manual WC']
  const day4F100MRun = [4,'F','100 M Run']

  async function runAllFemaleDay4TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-3. Working on Days 4-6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day4F100MRun);
    await createTrackCondensedTables(...day4F50MManualWC);
    await createTrackCondensedTables(...day4F50MRun);
    await createTrackCondensedTables(...day4F30MSlalom);
    await createTrackCondensedTables(...day4F25MManWC);
    await createTrackCondensedTables(...day4F25MAstWC);
    await createTrackCondensedTables(...day4F25MAstDevice);
    await createTrackCondensedTables(...day4F25MAstWalk);
    await runAllFemaleDay5TrackCondensedFunctions();
  }

  /** Day 5 Lists */
  const day5F25MAstWalk = [5,'F','25 M Assisted Walk']
  const day5F25MAstDevice = [5,'F','25 M Assisted Device']
  const day5F25MAstWC = [5,'F','25 M Assisted WC']
  const day5F25MManWC = [5,'F','25 M Manual WC']
  const day5F30MSlalom = [5,'F','30 M Slalom']
  const day5F50MRun = [5,'F','50 M Run']
  const day5F50MManualWC = [5,'F','50 M Manual WC']
  const day5F100MRun = [5,'F','100 M Run']

  async function runAllFemaleDay5TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-4. Working on Days 5 & 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day5F100MRun);
    await createTrackCondensedTables(...day5F50MManualWC);
    await createTrackCondensedTables(...day5F50MRun);
    await createTrackCondensedTables(...day5F30MSlalom);
    await createTrackCondensedTables(...day5F25MManWC);
    await createTrackCondensedTables(...day5F25MAstWC);
    await createTrackCondensedTables(...day5F25MAstDevice);
    await createTrackCondensedTables(...day5F25MAstWalk);
    await runAllFemaleDay6TrackCondensedFunctions();
  }

  /** Day 6 Lists */
  const day6F25MAstWalk = [6,'F','25 M Assisted Walk']
  const day6F25MAstDevice = [6,'F','25 M Assisted Device']
  const day6F25MAstWC = [6,'F','25 M Assisted WC']
  const day6F25MManWC = [6,'F','25 M Manual WC']
  const day6F30MSlalom = [6,'F','30 M Slalom']
  const day6F50MRun = [6,'F','50 M Run']
  const day6F50MManualWC = [6,'F','50 M Manual WC']
  const day6F100MRun = [6,'F','100 M Run']

  async function runAllFemaleDay6TrackCondensedFunctions() {
    SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Finished Days 1-5. Working on Day 6 now. 🏃🏻‍♀️ Give the script a minute or two to run 🐢");
    await createTrackCondensedTables(...day6F100MRun);
    await createTrackCondensedTables(...day6F50MManualWC);
    await createTrackCondensedTables(...day6F50MRun);
    await createTrackCondensedTables(...day6F30MSlalom);
    await createTrackCondensedTables(...day6F25MManWC);
    await createTrackCondensedTables(...day6F25MAstWC);
    await createTrackCondensedTables(...day6F25MAstDevice);
    await createTrackCondensedTables(...day6F25MAstWalk);
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
        let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

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
          headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
          headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
        }

        /** Create a new row in the respective table */
        let tableRow = tables[value].table.appendTableRow();
        tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
        tableRow.appendTableCell(row[2]);
        tableRow.appendTableCell(row[1]);
        tableRow.appendTableCell(row[3]);
        tableRow.appendTableCell(row[10]);
        tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
        tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
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
  function openTrackCondensedListGoog