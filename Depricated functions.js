/**
 * @deprecated because the lists were replaced with an object oriencted programming paradigm 
 */
  // BLANK LISTS
  // function fieldCondensedList() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the Field Condensed List 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
  //   let { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** The for loop below iterates over the const data array and pushes each row
  //    * into the filteredData array that meets the filter criteria of
  //    * Active, blank Field Event, and blank Heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     /** Represents indexes 8 - Active, 16 - Field Event, and 19 - Heat of the data array.
  //      * Filters for True Active, blank Field Event, and blank Heat. Pushes the rows
  //      * that meet the filter criteria to the filteredData array. */
  //     if (row[8] === true && row[16] === '' && row[19] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Checks if filteredData is empty. If filteredData is empty, the script will jump to the
  //    * next function and continue to run. This 'if' block is meant to keep a blank page from
  //    * printing on templateDoc. */
  //   if (filteredData.length === 0) {
  //     return blankFSoftball();
  //   }

  //   /** This is the start of a table build that will include rows from filteredData.
  //    * The table will be appended to templateDoc. */
  //   let headerText = 'Field Condensed List' + '                    Day: ' + filteredData[0][0];
  //   //let headerText2 = 'Blank Field Event: Active; M & F; ES, MS, & HS';
  //   /** Clears the templateDoc everytime the fieldCondensedList function is run.
  //    * @function */
  //   body.clear();
  //   body.insertParagraph(0, headerText).setAttributes(style);
  //   //body.insertParagraph(1, headerText2).setAttributes(style);

  //   /** Represents a table of active female & male ES, MS, & HS students who have
  //    * blanks for Day, Field Event, & Position.
  //    * @typeof {Object} table
  //    */
  //   let table = body.appendTable();

  //   /** Adds table headers*/
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Iterates through filteredData and appends rows to the table containing the
  //    * cell's values. */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Adds a page break after the table is appended to the page and calls the next function. */
  //   body.appendPageBreak();
  //   blankFSoftball();
  // }

    // function blankFSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   // Filter for active, softball, females, blank position, and blank heat
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData3 is empty */
  //   if (filteredData.length === 0) {
  //     /** Jump to blankMRunningLJ and continue running */
  //     return blankMSoftball();
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: ';
  //   let headerText6 = '     SOFTBALL';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankMSoftball();
  // }

  // function blankMSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, softball, males, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) { // Assumes the first row contains column headers
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M' && row[19]=== '' && row[20 === '']) {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData2 is empty */
  //   if (filteredData.length === 0) {
  //     /** Jump to blankFSoftball and continue running */
  //     return blankFRunningLJ();
  //   }

  //   let headerText3 = 'Field Condensed List                      Day:';
  //   let headerText4 = '     SOFTBALL';
  //   body.insertParagraph(body.getNumChildren(), headerText3).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText4).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }
  //   body.appendPageBreak();
  //   blankFRunningLJ();
  // }

  // function blankFRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData5 = [];
  //   /** Filter for active, running long jump, females, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData5.push(row);
  //     }
  //   }

  //   /** Check if filteredData5 is empty jump to blank turbo jav males */
  //   if (filteredData5.length === 0) {
  //     /** Jump to M TURBO JAV and continue running */
  //     return blankMRunningLJ();
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: ';
  //   let headerText6 = '     RUNNING LJ';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table5 = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table5.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData4.length; i++) {
  //     let row = filteredData5[i];
  //     let tableRow = table5.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankMRunningLJ();
  // }

    // function blankMRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   // Filter for active, running long jump, males, blank position, and blank heat
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData4 is empty jump to blank female running long jump */
  //   if (filteredData.length === 0) {
  //     // Jump to blankFRunningLJ and continue running
  //     return blankFTurboJav();
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: ';
  //   let headerText6 = '     RUNNING LJ';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankFTurboJav();
  // }

  // function blankFTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, running long jump, females, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: ';
  //   let headerText6 = '     TURBO JAV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData5 is empty jump to blank turbo jav males */
  //   if (filteredData.length === 0) {
  //     /** Jump to M DEV and continue running */
  //     return blankMTurboJav();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankMTurboJav();
  // }

  // function blankMTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   // Filter for active, running long jump, females, blank position, and blank heat
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: ';
  //   let headerText6 = '     TURBO JAV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData5 is empty jump to blank turbo jav males */
  //   if (filteredData.length === 0) {
  //     /** Jump to F TURBO JAV and continue running */
  //     return day1FDev();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   day1FDev();
  // }

    // function day1FDev() {
  //   SpreadsheetApp.getUi().alert('🏃🏻‍♀️ Putting together the Field Condensed List\n 🏃🏽‍♂️ Give the script a minute or two to run 🏃🏽‍♂️');
  //   let { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** The for loop below iterates over the const data array an dpushes each row into the
  //    * filteredData array that meets the criteria of
  //    * Active, DEV, females, day 1, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 1 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     // Jump to day1FTurboJav and continue running
  //     return day1FTurboJav();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   day1FTurboJav();
  // }

  // function day1MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 1 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty */
  //   if (filteredData.length === 0) {
  //     /** If empty, jumps to Day 1 F Running LJ */
  //     return day1FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   //body.appendPageBreak();
  //   day1FRunningLJ();
  // }


  // function day1FTurboJav() {
  //   SpreadsheetApp.getUi().alert('🏃🏻‍♀️ Putting together the Field Condensed List\n 🏃🏽‍♂️ Give the script a minute or two to run 🏃🏽‍♂️');
  //   let { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** The for loop below iterates over the data array and pushes each row into the filderedData array that meets the filter criteria of
  //    * active, females, day 1, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'TURBO JAV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day1MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   /** This is the start of the table build that will incllude rows from filteredData.
  //    * The table will be appended to templateDoc.
  //    */
  //   body.clear();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1MTurboJav();
  // }

  // /** Second list */
  // function day1MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'TURBO JAV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FFoamTurboJav */
  //   if (filteredData.length === 0) {
  //     return day1FFoamTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day1FFoamTurboJav();
  // }

  // /** Third list */
  // function day1FFoamTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 1, foam turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'FOAM TURBO JAV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MFoamTurboJav */
  //   if (filteredData.length === 0) {
  //     return day1MFoamTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     FOAM TURBO JAV                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day1MFoamTurboJav();
  // }

  // /** Fourth list */
  // function day1MFoamTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, foam turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'FOAM TURBO JAV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day1FRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     FOAM TURBO JAV                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day1FRunningLJ();
  // }

  // /** Fifth list */
  // function day1FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 1, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'RUNNING LJ') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day1MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1MRunningLJ();
  // }

  // /** Sixth list */
  // function day1MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'RUNNING LJ') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FSoftball */
  //   if (filteredData.length === 0) {
  //     return day1FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1FSoftball();
  // }

  // /** Seventh list */
  // function day1FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 1, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'SOFTBALL') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MSoftball */
  //   if (filteredData.length === 0) {
  //     return day1MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1MSoftball();
  // }

  // /** Eighth list */
  // function day1MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'SOFTBALL THROW') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FTennisBallThrow */
  //   if (filteredData.length === 0) {
  //     return day1FTennisBallThrow();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1FTennisBallThrow();
  // }

  // /** Ninth list */
  // function day1FTennisBallThrow() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, tennis ball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'TENNIS BALL THROW') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FTennisBallThrow */
  //   if (filteredData.length === 0) {
  //     return day1MTennisBallThrow();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TENNIS BALL THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1MTennisBallThrow();
  // }
  
  // /** Tenth list */
  // function day1MTennisBallThrow() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, tennis ball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'TENNIS BALL THROW') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FBeanbagThrow */
  //   if (filteredData.length === 0) {
  //     return day1FBeanbagThrow();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TENNIS BALL THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1FBeanbagThrow();
  // }
  
  // /** Eleventh list */
  // function day1FBeanbagThrow() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 1, bean bag, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[16] === 'BEAN BAG THROW') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MBeanbagThrow */
  //   if (filteredData.length === 0) {
  //     return day1MBeanbagThrow();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     BEAN BAG THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day1MBeanbagThrow();
  // }
  
  // /** Twelfth list */
  // function day1MBeanbagThrow() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, bean bag, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[16] === 'BEAN BAG THROW') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2FTurboJav */
  //   if (filteredData.length === 0) {
  //     return runAllDay2Functions();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     BEAN BAG THROW                      HEAT: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   runAllDay2Functions();
  // }



  //   function day2FDev() {

  //   SpreadsheetApp.getActiveSpreadsheet().toast("⏱️ Day 1 has finished updating. Currently working on 2-6 🥎");

  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   // Filter for active, DEV, females, day 2, blank position, and blank heat
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 2 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }
  //   body.appendPageBreak();
    
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);  

  //   // Creates a table to display the filtered data
  //   let table = body.appendTable();

  //   // Check if filteredData is empty jump to blank DEV females
  //   if (filteredData.length === 0) {
  //     // Jump to Day 2 M DEV and continue running
  //     return day2MDev();
  //   }

  //   // Adds table headers
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   // Adds the filtered data to the table
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day2MDev();
  // }


  // function day2MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, day 2, blank position, and blank heat */ 
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 2 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }
  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 2 F Running LJ and continue running */
  //     return day2FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day2FRunningLJ();
  // }

  // function day2FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 2, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day2MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day2MRunningLJ();
  // }

  /** Eighteenth list */
  // function day2MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 2, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FSoftball */
  //   if (filteredData.length === 0) {
  //     return day2FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day2FSoftball();
  // }

  /** Nineteenth list */
  // function day2FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 2, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MSoftball */
  //   if (filteredData.length === 0) {
  //     return day2MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day2MSoftball();
  // }

  /** Twentyth list */
  // function day2MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2FTurboJav */
  //   if (filteredData.length === 0) {
  //     return day2FTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day2FTurboJav();
  // }

  /** Twentyfirst list */
  // function day2FTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 2, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day2MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day2MTurboJav();
  // }

  /** Twentysecond list */
  // function day2MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 2, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3FDev */
  //   if (filteredData.length === 0) {
  //     return day3FDev();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day3FDev();
  // }


  //   /** Twentythird list */
  // function day3FDev() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("⏳ Days 1 & 2 have finished updating. Currently working on 3-6 🏃🏼‍♀️💨");
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, females, day 3, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 3 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV males */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 3 M DEV and continue running */
  //     return day3MDev();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day3MDev();
  // }

  // /** Twentyfourth list */
  // function day3MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, day 3, blank position, and blank heat */ 
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 3 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 3 F Running LJ and continue running */
  //     return day3FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day3FRunningLJ();
  // }

  // /** Twentyfifth list */
  // function day3FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 3, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day3MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day3MRunningLJ();
  // }

  // /** Twentysixth list */
  // function day3MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 3, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3FSoftball */
  //   if (filteredData.length === 0) {
  //     return day3FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day3FSoftball();
  // }

  // /** Twentyseventh list */
  // function day3FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 3, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MSoftball */
  //   if (filteredData.length === 0) {
  //     return day3MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });


  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day3MSoftball();
  // }

  // /** Twentyeighth list */
  // function day3MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 3, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3FTurboJav */
  //   if (filteredData.length === 0) {
  //     return day3FTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });


  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day3FTurboJav();
  // }

  // /** Twentynineth list */
  // function day3FTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 3, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day3MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day3MTurboJav();
  // }

  // /** Thirtyth list */
  // function day3MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 3, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4FDev */
  //   if (filteredData.length === 0) {
  //     return day4FDev();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day4FDev();
  // }







  // /** Thirtyfirst list */
  // function day4FDev() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("⏳ Days 1-3 have finished updating. Currently working on 4-6 👨🏽‍🦼💨");
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, females, day 4, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 4 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV males */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 4 M DEV and continue running */
  //     return day4MDev();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day4MDev();
  // }

  // /** Thirtysecond list */
  // function day4MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, day 4, blank position, and blank heat */ 
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 4 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 4 F Running LJ and continue running */
  //     return day4FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day4FRunningLJ();
  // }

  // /** Thirtythird list */
  // function day4FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 4, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day4MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day4MRunningLJ();
  // }

  // /** Thirtyfourth list */
  // function day4MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 4, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4FSoftball */
  //   if (filteredData.length === 0) {
  //     return day4FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //     body.appendPageBreak();

  //     let headerText5 = 'Field Condensed List                      Day: 4';
  //     body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day4FSoftball();
  // }

  // /** Thirtyfifth list */
  // function day4FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 4, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MSoftball */
  //   if (filteredData.length === 0) {
  //     return day4MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day4MSoftball();
  // }

  // /** Thirtysixth list */
  // function day4MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 4, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3FTurboJav */
  //   if (filteredData.length === 0) {
  //     return day4FTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day4FTurboJav();
  // }

  // /** Thityseventh list */
  // function day4FTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 4, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day4MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day4MTurboJav();
  // }

  // /** Thirtyeighth list */
  // function day4MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 4, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4FDev */
  //   if (filteredData.length === 0) {
  //     return day5FDev();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();
  //   let headerText5 = 'Field Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day5FDev();
  // }







  // /** Thirtyninth list */
  // function day5FDev() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("⏳ Days 1-4 have finished updating. Currently working on 5-6 🥇");
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, females, day 5, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 5 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }
    
  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV males */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 5 M DEV and continue running */
  //     return day5MDev();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day5MDev();
  // }

  // /** Fourtyth list */
  // function day5MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, day 5, blank position, and blank heat */ 
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 5 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 5 F Running LJ and continue running */
  //     return day5FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day5FRunningLJ();
  // }

  // /** Fourtyfirst list */
  // function day5FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 5, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day5MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day5MRunningLJ();
  // }

  // /** Fourtysecond list */
  // function day5MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 5, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4FSoftball */
  //   if (filteredData.length === 0) {
  //     return day5FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day5FSoftball();
  // }

  // /** Fourtythird list */
  // function day5FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 5, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MSoftball */
  //   if (filteredData.length === 0) {
  //     return day5MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day5MSoftball();
  // }

  // /** Fourtyfourth list */
  // function day5MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 5, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5FTurboJav */
  //   if (filteredData.length === 0) {
  //     return day5FTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day5FTurboJav();
  // }

  // /** Fourtyfifth list */
  // function day5FTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 5, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day5MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day5MTurboJav();
  // }

  // /** Fourtysixth list */
  // function day5MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 5, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6FDev */
  //   if (filteredData.length === 0) {
  //     return day6FDev();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());

  //   day6FDev();
  // }



  



  // /** Fourtyseventh list */
  // function day6FDev() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("⌛️ Days 1-5 have finished updating. Currently working on 6. Almost done! 😓");
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, females, day 6, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 6 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }
    
  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV males */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 6 M DEV and continue running */
  //     return day6MDev();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day6MDev();
  // }

  // /** Fourtyeighth list */
  // function day6MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];
  //   /** Filter for active, DEV, males, day 6, blank position, and blank heat */ 
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0]=== 6 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Check if filteredData is empty jump to blank DEV females */
  //   if (filteredData.length === 0) {
  //     /** Jump to Day 6 F Running LJ and continue running */
  //     return day6FRunningLJ();
  //   }

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
    
  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(row[20]);
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   day6FRunningLJ();
  // }

  // /** Fourtyninth list */
  // function day6FRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 6, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6MRunningLJ */
  //   if (filteredData.length === 0) {
  //     return day6MRunningLJ();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day6MRunningLJ();
  // }

  // /** Fiftyth list */
  // function day6MRunningLJ() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 6, running long jump, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6FSoftball */
  //   if (filteredData.length === 0) {
  //     return day6FSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     RUNNING LJ                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day6FSoftball();
  // }

  // /** Fiftyfirst list */
  // function day6FSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 6, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6MSoftball */
  //   if (filteredData.length === 0) {
  //     return day6MSoftball();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day6MSoftball();
  // }

  // /** Fiftysecond list */
  // function day6MSoftball() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 6, softball, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6FTurboJav */
  //   if (filteredData.length === 0) {
  //     return day6FTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     SOFTBALL                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day6FTurboJav();
  // }

  // /** Fiftythird list */
  // function day6FTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 6, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6MTurboJav */
  //   if (filteredData.length === 0) {
  //     return day6MTurboJav();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   day6MTurboJav();
  // }

  // /** Fiftyfourth list */
  // function day6MTurboJav() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 6, turbo jav, and heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to endOfList */
  //   if (filteredData.length === 0) {
  //     openGoogleDoc();
  //   }

  //   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[19] === b[19]) {
  //       return a[20] - b[20];
  //     }
  //     return a[19] - b[19];
  //   });

  //   body.appendPageBreak();

  //   let headerText5 = 'Field Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[19] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     TURBO JAV                      ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Adds header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });
  //   templateDoc.saveAndClose();
  //   DocumentApp.openById(templateDoc.getId());
  //   openGoogleDoc();
  // }


// FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS FIELD HEAT SHEETS 




// function fieldHeatSheetsBlankFSoftball() {
  
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, softball, females, blank field heat, and blank field position */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsBlankFRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsBlankFRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: BLANK';
  
//   body.clear();
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsBlankFRunningLJ();
// }

// /** 2nd list */
// function fieldHeatSheetsBlankFRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData5 = [];

//   /** Filter for active, running long jump, females, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData5.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to fieldHeatSheetsBlankFTurboJav */
//   if (filteredData5.length === 0) {
//     return fieldHeatSheetsBlankFTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsBlankFTurboJav();
// }

// /** 3rd list */
// function fieldHeatSheetsBlankFTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, running long jump, females, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to fieldHeatSheetsDay1FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1FDev();
// }

// /** 4th list */
// function fieldHeatSheetsDay1FDev() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, females, day 1, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 1 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday1FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1FRunningLJ();
// }

// /** 5th list */
// function fieldHeatSheetsDay1FRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 1, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday1FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1FSoftball();
// }

// /** 6th list */
// function fieldHeatSheetsDay1FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 1, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday1FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1FTurboJav();
// }

// /** 7th list */
// function fieldHeatSheetsDay1FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 1, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday2FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }


//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2FDev();
// }

// /** 8th list */
// function fieldHeatSheetsDay2FDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 1 female lists have finished updating. Currently working on 2-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   // Filter for active, DEV, females, day 2, blank position, and blank heat
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 2 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsday2FRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2FRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2FRunningLJ();
// }

// /** 9th list */
// function fieldHeatSheetsDay2FRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday2FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2FSoftball();
// }

// /** 10th list */
// function fieldHeatSheetsDay2FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsday2FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   fieldHeatSheetsDay2FTurboJav();
// }

// /** 11th list */
// function fieldHeatSheetsDay2FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3FDev();
// }

// /** 12th list */
// function fieldHeatSheetsDay3FDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 2 female lists have finished updating. Currently working on 3-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, dev, females, day 3, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 3 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay3FRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3FRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3FRunningLJ();
// }

// /** 13th list */
// function fieldHeatSheetsDay3FRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3FSoftball();
// }

// /** 14th list */
// function fieldHeatSheetsDay3FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3FTurboJav();
// }

// /** 15th list */
// function fieldHeatSheetsDay3FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4FDev();
// }

// /** 16th list */
// function fieldHeatSheetsDay4FDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 female lists have finished updating. Currently working on 4-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, females, day 4, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 4 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4FRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4FRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//   /** Adds table headers */
//   let headersRow = tables[value].table.appendTableRow();
//   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4FRunningLJ();
// }

// /** 17th list */
// function fieldHeatSheetsDay4FRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4FSoftball();
// }

// /** 18th list */
// function fieldHeatSheetsDay4FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';
 
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4FTurboJav();
// }

// /** 19th list */
// function fieldHeatSheetsDay4FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Condensed List                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5FDev();
// }

// /** 20th list */
// function fieldHeatSheetsDay5FDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 4 female lists have finished updating. Currently working on 5 & 6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, females, day 5, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 5 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5FRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5FRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   fieldHeatSheetsDay5FRunningLJ();
// }

// /** 21st list */
// function fieldHeatSheetsDay5FRunningLJ() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 female list has finished updating. Currently working on 6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5FSoftball();
// }

// /** 22nd list */
// function fieldHeatSheetsDay5FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5FTurboJav();
// }

// /** 23rd list */
// function fieldHeatSheetsDay5FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6FDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6FDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6FDev();
// }

// /** 24th list */
// function fieldHeatSheetsDay6FDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 female lists have finished updating. Currently working on 6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, females, day 6, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 6 && row[8] === true && row[16] === 'DEV' && row[3] === 'F' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6FRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6FRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6FRunningLJ();
// }

// /** 25th list */
// function fieldHeatSheetsDay6FRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6FSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6FSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6FSoftball();
// }

// /** 26th list */
// function fieldHeatSheetsDay6FSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6FTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6FTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6FTurboJav();
// }

// /** 27th list */
// function fieldHeatSheetsDay6FTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'F') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsBlankMSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsBlankMSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   SpreadsheetApp.getActiveSpreadsheet().toast("All of the female lists are done. Currently working on the males lists.")
//   fieldHeatSheetsBlankMSoftball();
// }

// /** 28th list */
// function fieldHeatSheetsBlankMSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, softball, males, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) { // Assumes the first row contains column headers
//     let row = data[i];
//     if (row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M' && row[19]=== '' && row[20 === '']) {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsBlankMRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsBlankMRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText3 = 'Field Heat Sheets - Scorecards                      Day: BLANK';

  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText3 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsBlankMRunningLJ();
// }

// /** 29th list */
// function fieldHeatSheetsBlankMRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /**  Filter for active, running long jump, males, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData4 is empty jump to fieldHeatSheetsBlankMTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsBlankMTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   fieldHeatSheetsBlankMTurboJav();
// }

// /** 30th list */
// function fieldHeatSheetsBlankMTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /**  Filter for active, running long jump, females, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to fieldHeatSheetsDay1MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1MDev();
// }

// /** 31st list */
// function fieldHeatSheetsDay1MDev() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 1, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 1 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay1MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';
  
//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1MRunningLJ();
// }

// /** 32nd list */
// function fieldHeatSheetsDay1MRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay1MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1MSoftball();
// }

// /** 33rd list */
// function fieldHeatSheetsDay1MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay1MTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay1MTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay1MTurboJav();
// }

// /** 34th list */
// function fieldHeatSheetsDay1MTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay2MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2MDev();
// }

// /** 35th list */
// function fieldHeatSheetsDay2MDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 1 male lists have finished updating. Currently working on 2-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 2, blank position, and blank heat */ 
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 2 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay2MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   fieldHeatSheetsDay2MRunningLJ();
// }

// /** 36th list */
// function fieldHeatSheetsDay2MRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 2, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay2MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2MSoftball();
// }

// /** 37th list */
// function fieldHeatSheetsDay2MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay2MTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay2MTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay2MTurboJav();
// }

// /** 38th list */
// function fieldHeatSheetsDay2MTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 2, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3MDev();
// }

// /** 39th list */
// function fieldHeatSheetsDay3MDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 2 male lists have finished updating. Currently working on 3-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 3, blank position, and blank heat */ 
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 3 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay3MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3MRunningLJ();
// }

// /** 40th list */
// function fieldHeatSheetsDay3MRunningLJ() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 male lists have finished updating. Currently working on 4-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3MSoftball();
// }

// /** 41st list */
// function fieldHeatSheetsDay3MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay3MTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay3MTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay3MTurboJav();
// }

// /** 42nd list */
// function fieldHeatSheetsDay3MTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });


//   body.appendPageBreak();
//   fieldHeatSheetsDay4MDev();
// }

// /** 43rd list */
// function fieldHeatSheetsDay4MDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 male lists have finished updating. Currently working on 4-6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 4, blank position, and blank heat */ 
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 4 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay4MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4MRunningLJ();
// }

// /** 44th list */
// function fieldHeatSheetsDay4MRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 4, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay4MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay4MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//     let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay4MSoftball();
// }

// /** 45th list */
// function fieldHeatSheetsDay4MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 4, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   fieldHeatSheetsDay5MDev();
// }

// /** 46th list */
// function fieldHeatSheetsDay5MDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 4 male lists have finished updating. Currently working on 5 & 6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 5, blank position, and blank heat */ 
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 5 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay5MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5MRunningLJ();
// }

// /** 47th list */
// function fieldHeatSheetsDay5MRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5MSoftball();
// }

// /** 48th list */
// function fieldHeatSheetsDay5MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay5MTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay5MTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay5MTurboJav();
// }

// /** 49th list */
// function fieldHeatSheetsDay5MTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6MDev */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6MDev();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6MDev();
// }

// /** 50th list */
// function fieldHeatSheetsDay6MDev() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 male lists have finished updating. Currently working on 6.")
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 6, blank position, and blank heat */ 
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 6 && row[8] === true && row[16] === 'DEV' && row[3] === 'M' && row[19] === '' && row[20] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to fieldHeatSheetsDay6MRunningLJ */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6MRunningLJ();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6MRunningLJ();
// }

// /** 51st list */
// function fieldHeatSheetsDay6MRunningLJ() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, running long jump, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'RUNNING LJ' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6MSoftball */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6MSoftball();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     RUNNING LJ                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6MSoftball();
// }

// /** 52nd list */
// function fieldHeatSheetsDay6MSoftball() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'SOFTBALL' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to fieldHeatSheetsDay6MTurboJav */
//   if (filteredData.length === 0) {
//     return fieldHeatSheetsDay6MTurboJav();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     SOFTBALL                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   fieldHeatSheetsDay6MTurboJav();
// }

// /** 53rd list */
// function fieldHeatSheetsDay6MTurboJav() {
//   const { templateDoc, body } = openFieldHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, turbo jav, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[8] === true && row[16] === 'TURBO JAV' && row[3] === 'M') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to endOfList */
//   if (filteredData.length === 0) {
//     return openGoogleDoc();
//   }

//   /** Sort filteredData array by row[19] and then by row[20] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[19] === b[19]) {
//       return a[20] - b[20];
//     }
//     return a[19] - b[19];
//   });

//   let headerText5 = 'Field Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[19] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[19]).padStart(2, '0'); // Assuming row[19] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     TURBO JAV                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[20] === 'number' ? row[20].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[17] === 'number' ? row[17].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[18] === 'number' ? row[18].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[19]
//       let currentValue = String(row[19]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][19]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   templateDoc.saveAndClose();
//   openGoogleDoc();
// }

// TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTSTRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS

/** 1st list */
  // function trackCondensedList() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the Track Condensed Lists 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
  //   let { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[8] === true && row[16] === '' && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return blankF100MD();
  //   }

  //   let headerText = 'Track Condensed List' + '                    Day: BLANK';

  //   body.clear();

  //   body.insertParagraph(0, headerText).setAttributes(style);
  //   let table = body.appendTable();

  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankF100MD();
  // }

  // /** 2nd list */
  // function blankF100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for blank day, active, 100MD, females, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === '100 MD' && row[14] === '' && row[15] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return blankM100MD();
  //   }

  //   let headerText5 = 'Track Condensed List                      Day: BLANK';
  //   let headerText6 = '     100 MD';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankM100MD();
  // }

  // /** 3rd list */
  // function blankM100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for blank day, active, 100MD, males, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) { // Assumes the first row contains column headers
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === '100 MD' && row[14]=== '' && row[15] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return blankF50MD();
  //   }

  //   let headerText3 = 'Track Condensed List                      Day: BLANK';
  //   let headerText4 = '     100 MD';
  //   body.insertParagraph(body.getNumChildren(), headerText3).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText4).setAttributes(style);

  //   let table = body.appendTable();

  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }
  //   body.appendPageBreak();
  //   blankF50MD();
  // }

  // /** 4th list */
  // function blankF50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData5 = [];

  //   /** Filter for blank day, active, 50MD, females, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === '50 MD' && row[14] === '' && row[15] === '') {
  //       filteredData5.push(row);
  //     }
  //   }

  //   if (filteredData5.length === 0) {
  //     return blankM50MD();
  //   }

  //   let headerText5 = 'Track Condensed List                      Day: BLANK';
  //   let headerText6 = '     50 MD';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table5 = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table5.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData5.length; i++) {
  //     let row = filteredData5[i];
  //     let tableRow = table5.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankM50MD();
  // }

  // /** 5th list */
  // function blankM50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for blank day, active, 50 MD, males, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === '50 MD' && row[14] === '' && row[15] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return blankFDev();
  //   }

  //   let headerText5 = 'Track Condensed List                      Day: BLANK';
  //   let headerText6 = '     50 MD';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankFDev();
  // }

  // /** 6th list */
  // function blankFDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for blank day, active, dev, females, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === 'DEV' && row[14] === '' && row[15] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return blankMDev();
  //   }

  //   let headerText5 = 'Track Condensed List                      Day: BLANK';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   /** Creates a table to display the filtered data */
  //   let table = body.appendTable();

  //   /** Adds table headers */
  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   /** Adds the filtered data to the table */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   blankMDev();
  // }

  // /** 7th list */
  // function blankMDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for blank day, active, dev, males, blank position, and blank heat */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === 'DEV' && row[14] === '' && row[15] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   if (filteredData.length === 0) {
  //     return day1FBlankEvent();
  //   }

  //   let headerText5 = 'Track Condensed List                      Day: BLANK';
  //   let headerText6 = '     DEV';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   body.insertParagraph(body.getNumChildren(), headerText6).setAttributes(style);

  //   let table = body.appendTable();

  //   let headersRow = table.appendTableRow();
  //   headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //   headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);

  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let tableRow = table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0): '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0): '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   body.appendPageBreak();
  //   day1FBlankEvent();
  // }

  // /** DAY 1 LISTS */

  // /** 8th list */
  // function day1FBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M100MD */
  //   if (filteredData.length === 0) {
  //     return day1MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1MBlankEvent();
  // }

  // /** 9th list */
  // function day1MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M100MD */
  //   if (filteredData.length === 0) {
  //     return day1F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1F100MD();
  // }




  // TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS TRACK CONDENSED LISTS 



  // /** 10th list */
  // function day1F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M100MD */
  //   if (filteredData.length === 0) {
  //     return day1M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1M100MD();
  // }

  // /** 11th list */
  // function day1M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1F50MD */
  //   if (filteredData.length === 0) {
  //     return day1F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1F50MD();
  // }

  // /** 12th list */
  // function day1F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M50MD */
  //   if (filteredData.length === 0) {
  //     return day1M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1M50MD();
  // }

  // /** 13th list */
  // function day1M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1FDev */
  //   if (filteredData.length === 0) {
  //     return day1FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1FDev();
  // }

  // /** 14th list */
  // function day1FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 1, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1MDev */
  //   if (filteredData.length === 0) {
  //     return day1MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day1MDev();
  // }

  // /** 15th list */
  // function day1MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 1, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 1  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2FBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day2FBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 1';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   //body.appendPageBreak();
  //   templateDoc.saveAndClose();
  //   day2FBlankEvent();
  // }

  // /** DAY 2 LISTS */

  // /** 16th list */
  // function day2FBlankEvent() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("Day 1 lists have finished updating. Currently working on 2-6.")
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 2, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day2MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2MBlankEvent();
  // }

  // /** 12th list */
  // function day2MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 2, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M100MD */
  //   if (filteredData.length === 0) {
  //     return day2F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2F100MD();
  // }

  // /** 13th list */
  // function day2F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 2, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day1M100MD */
  //   if (filteredData.length === 0) {
  //     return day2M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2M100MD();
  // }

  // /** 19th list */
  // function day2M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 2, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2F50MD */
  //   if (filteredData.length === 0) {
  //     return day2F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2F50MD();
  // }

  // /** 20th list */
  // function day2F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 1, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2M50MD */
  //   if (filteredData.length === 0) {
  //     return day2M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2M50MD();
  // }

  // /** 21st list */
  // function day2M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 2, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2FDev */
  //   if (filteredData.length === 0) {
  //     return day2FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2FDev();
  // }

  // /** 22nd list */
  // function day2FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 2, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day2MDev */
  //   if (filteredData.length === 0) {
  //     return day2MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day2MDev();
  // }

  // /** 23rd list */
  // function day2MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 2, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 2  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3F100MD */
  //   if (filteredData.length === 0) {
  //     return day3FBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 2';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   templateDoc.saveAndClose();
  //   day3FBlankEvent()
  // }

  // /** DAY 3 LISTS */

  // /** 24th list */
  // function day3FBlankEvent() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("Day 2 lists have finished updating. Currently working on 3-6.")
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day3MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3MBlankEvent();
  // }

  // /** 25th list */
  // function day3MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3F100MD */
  //   if (filteredData.length === 0) {
  //     return day3F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3F100MD();
  // }

  // /** 26th list */
  // function day3F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3M100MD */
  //   if (filteredData.length === 0) {
  //     return day3M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3M100MD();
  // }

  // /** 27th list */
  // function day3M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3F50MD */
  //   if (filteredData.length === 0) {
  //     return day3F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3F50MD();
  // }

  // /** 28th list */
  // function day3F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3M50MD */
  //   if (filteredData.length === 0) {
  //     return day3M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3M50MD();
  // }

  // /** 29th list */
  // function day3M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 3, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3FDev */
  //   if (filteredData.length === 0) {
  //     return day3FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3FDev();
  // }

  // /** 30th list */
  // function day3FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 3, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day3MDev */
  //   if (filteredData.length === 0) {
  //     return day3MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day3MDev();
  // }

  // /** 31st list */
  // function day3MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 3, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 3  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4F100MD */
  //   if (filteredData.length === 0) {
  //     return day4F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 3';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   templateDoc.saveAndClose();
  //   day4FBlankEvent();
  // }

  // /** DAY 4 LISTS */

  // /** 32nd list */
  // function day4FBlankEvent() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 lists have finished updating. Currently working on 4-6.")
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4M100MD */
  //   if (filteredData.length === 0) {
  //     return day4MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4MBlankEvent();
  // }

  // /** 33rd list */
  // function day4MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4F100MD */
  //   if (filteredData.length === 0) {
  //     return day4F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4F100MD();
  // }

  // /** 34th list */
  // function day4F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4M100MD */
  //   if (filteredData.length === 0) {
  //     return day4M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4M100MD();
  // }

  // /** 35th list */
  // function day4M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4F50MD */
  //   if (filteredData.length === 0) {
  //     return day4F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4F50MD();
  // }

  // /** 36th list */
  // function day4F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4M50MD */
  //   if (filteredData.length === 0) {
  //     return day4M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4M50MD();
  // }

  // /** 37th list */
  // function day4M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 4, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4FDev */
  //   if (filteredData.length === 0) {
  //     return day4FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4FDev();
  // }

  // /** 38th list */
  // function day4FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 4, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day4MDev */
  //   if (filteredData.length === 0) {
  //     return day4MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day4MDev();
  // }

  // /** 39th list */
  // function day4MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 4, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 4  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5FBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day5FBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 4';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   templateDoc.saveAndClose();
  //   day5FBlankEvent();
  // }

  // /** DAY 5 LISTS */

  // /** 40th list */
  // function day5FBlankEvent() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("Day 4 lists have finished updating. Currently working on 5-6.")
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5MBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day5MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5MBlankEvent();
  // }

  // /** 41st list */
  // function day5MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5F100MD */
  //   if (filteredData.length === 0) {
  //     return day5F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5F100MD();
  // }

  // /** 42nd list */
  // function day5F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5M100MD */
  //   if (filteredData.length === 0) {
  //     return day5M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5M100MD();
  // }

  // /** 43rd list */
  // function day5M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5F50MD */
  //   if (filteredData.length === 0) {
  //     return day5F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5F50MD();
  // }

  // /** 44th list */
  // function day5F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5M50MD */
  //   if (filteredData.length === 0) {
  //     return day5M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5M50MD();
  // }

  // /** 45th list */
  // function day5M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 5, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5FDev */
  //   if (filteredData.length === 0) {
  //     return day5FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5FDev();
  // }

  // /** 46th list */
  // function day5FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 5, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day5MDev */
  //   if (filteredData.length === 0) {
  //     return day5MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day5MDev();
  // }

  // /** 47th list */
  // function day5MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 5, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 5  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6FBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day6FBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 5';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   templateDoc.saveAndClose();
  //   day6FBlankEvent()
  // }

  // /** DAY 6 LISTS */

  // /** 48th list */
  // function day6FBlankEvent() {
  //   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 lists have finished updating. Currently working on 6.")
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, females, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6MBlankEvent */
  //   if (filteredData.length === 0) {
  //     return day6MBlankEvent();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6MBlankEvent();
  // }

  // /** 49th list */
  // function day6MBlankEvent() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, males, and blank event */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === '') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6F100MD */
  //   if (filteredData.length === 0) {
  //     return day6F100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     NO EVENT                      Heat: BLANK`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6F100MD();
  // }

  // /** 50th list */
  // function day6F100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, females, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6M100MD */
  //   if (filteredData.length === 0) {
  //     return day6M100MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6M100MD();
  // }

  // /** 51st list */
  // function day6M100MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, males, and 100 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6F50MD */
  //   if (filteredData.length === 0) {
  //     return day6F50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     100 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6F50MD();
  // }

  // /** 52nd list */
  // function day6F50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, females, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6M50MD */
  //   if (filteredData.length === 0) {
  //     return day6M50MD();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6M50MD();
  // }

  // /** 53rd list */
  // function day6M50MD() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for day 6, active, males, and 50 MD */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6FDev */
  //   if (filteredData.length === 0) {
  //     return day6FDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);

  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     50 MD                      Heat: ${value}`
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables).forEach((value, index) => {
  //     body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6FDev();
  // }

  // /** 54th list */
  // function day6FDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, females, day 6, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6  && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty, jump to day6MDev */
  //   if (filteredData.length === 0) {
  //     return day6MDev();
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //   body.appendPageBreak();
  //   day6MDev();
  // }

  // /** 55th list */
  // function day6MDev() {
  //   const { templateDoc, body } = openTemplateDoc();
  //   let filteredData = [];

  //   /** Filter for active, males, day 6, dev */
  //   for (let i = 1; i < data.length; i++) {
  //     let row = data[i];
  //     if (row[0] === 6  && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
  //       filteredData.push(row);
  //     }
  //   }

  //   /** Check if filteredData is empty */
  //   if (filteredData.length === 0) {
  //     Logger.log("Nothing Follows");
  //   }

  //   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
  //   filteredData.sort((a, b) => {
  //     if (a[14] === b[14]) {
  //       return a[15] - b[15];
  //     }
  //     return a[14] - b[14];
  //   });

  //   let headerText5 = 'Track Condensed List                      Day: 6';
  //   body.insertParagraph(body.getNumChildren(), headerText5).setAttributes(style);
  //   /** Create an object to store tables for each value in row[14] */
  //   const tables = {};

  //   /** Adds the filtered data to the respective tables */
  //   for (let i = 0; i < filteredData.length; i++) {
  //     let row = filteredData[i];
  //     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

  //     /** Check if a table already exists for the value */
  //     if (!tables[value]) {
  //       /** Create a new table if it doesn't exist */
  //       tables[value] = {
  //         table: body.appendTable(),
  //         headerText: `     DEV                      `
  //       };

  //       /** Adds table headers for each table */
  //       let headersRow = tables[value].table.appendTableRow();
  //       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
  //     }

  //     /** Create a new row in the respective table */
  //     let tableRow = tables[value].table.appendTableRow();
  //     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
  //     tableRow.appendTableCell(row[2]);
  //     tableRow.appendTableCell(row[1]);
  //     tableRow.appendTableCell(row[3]);
  //     tableRow.appendTableCell(row[10]);
  //     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
  //     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //     tableRow.appendTableCell('');
  //   }

  //   /** Add header text before each table */
  //   Object.keys(tables)
  //     .forEach((value, index) => {
  //       body.insertParagraph(body.getChildIndex(tables[value].table), tables[value].headerText).setAttributes(style);
  //   });

  //    templateDoc.saveAndClose();
  //    openTrackCondensedListGoogleDoc();
  // }


  // TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS TRACK HEAT SHEETS

//   function trackHeatSheetsBlankF100MD() {
  
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   body.clear();
//   let filteredData5 = [];

//   /** Filter for active, 100MD, females, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData5.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to trackHeatSheetsBlankF50MD */
//   if (filteredData5.length === 0) {
//     return trackHeatSheetsBlankF50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsBlankF50MD();
// }

// /** 2nd list */
// function trackHeatSheetsBlankF50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, 50MD, females, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to trackHeatSheetsBlankFDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsBlankFDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsBlankFDev();
// }

// /** 3rd list */
// function trackHeatSheetsBlankFDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, Dev, females, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay1FBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay1F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay1F100MD();
// }

// /** 5th list */
// function trackHeatSheetsDay1F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 1, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1  && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay1FDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay1FDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 1';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay1FDev();
// }

// /** 6th list */
// function trackHeatSheetsDay1FDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, females, day 1, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 1 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2Blank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2Blank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   trackHeatSheetsDay2Blank();
// }

// /** DAY 2 LISTS */
// /** 7th list */
// function trackHeatSheetsDay2Blank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 1 female lists have finished updating. Currently working on 2-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, females, day 2, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 2 && row[3] === 'F' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay2F100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2F100MD();
// }

// /** 8th list */
// function trackHeatSheetsDay2F100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2F50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2F50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2F50MD();
// };

// /** 9th list */
// function trackHeatSheetsDay2F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2Dev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2Dev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2Dev();
// }

// /** 10th list */
// function trackHeatSheetsDay2Dev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 2, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3FBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3FBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3FBlank();
// }

// /** DAY 3 LISTS */
// /** 11th list */
// function trackHeatSheetsDay3FBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 2 female lists have finished updating. Currently working on 3-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, females, day 3, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 3 && row[3] === 'F' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay3F100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3F100MD();
// }

// /** 12th list */
// function trackHeatSheetsDay3F100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3F50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3F50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3F50MD();
// }

// /** 13th list */
// function trackHeatSheetsDay3F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3Dev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3Dev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3Dev();
// }

// /** 14th list */
// function trackHeatSheetsDay3Dev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 3, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4FBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4FBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4FBlank();
// }

// /** DAY 4 LISTS */
// /** 15th list */
// function trackHeatSheetsDay4FBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 female lists have finished updating. Currently working on 4-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, females, day 4, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 4 && row[3] === 'F' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay4F100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4F100MD();
// }

// /** 16th list */
// function trackHeatSheetsDay4F100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4F50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4F50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4F50MD();
// }

// /** 17th list */
// function trackHeatSheetsDay4F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4Dev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4Dev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4Dev();
// }

// /** 18th list */
// function trackHeatSheetsDay4Dev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 4, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5FBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5FBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5FBlank();
// }

// /** DAY 5 LISTS */
// /** 19th list */
// function trackHeatSheetsDay5FBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 4 female lists have finished updating. Currently working on 5-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, females, day 5, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 5 && row[3] === 'F' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay5F100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5F100MD();
// }

// /** 20th list */
// function trackHeatSheetsDay5F100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5F50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5F50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5F50MD();
// }

// /** 21st list */
// function trackHeatSheetsDay5F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5Dev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5Dev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5Dev();
// }

// /** 22nd list */
// function trackHeatSheetsDay5Dev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 5, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6FBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6FBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6FBlank();
// }

// /** DAY 6 LISTS */
// /** 23rd list */
// function trackHeatSheetsDay6FBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 female lists have finished updating. Currently working on 6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, females, day 6, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 6 && row[3] === 'F' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay6F100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6F100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6F100MD();
// }

// /** 24th list */
// function trackHeatSheetsDay6F100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6F50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6F50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6F50MD();
// }

// /** 25th list */
// function trackHeatSheetsDay6F50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6Dev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6Dev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6Dev();
// }

// /** 26th list */
// function trackHeatSheetsDay6Dev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, females, day 6, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'F' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsBlankM100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsBlankM100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   trackHeatSheetsBlankM100MD();
// }

// /** MALES LISTS */
// /** 27th list */
// function trackHeatSheetsBlankM100MD() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("🏃🏻‍♀️ Putting together the male Track Heat Sheets - Scorecards 🏃🏽‍♂️ Give the script a minute or two to run 🐢");
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData5 = [];

//   /** Filter for active, 100MD, males, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData5.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to trackHeatSheetsBlankM50MD */
//   if (filteredData5.length === 0) {
//     return trackHeatSheetsBlankM50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData5.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData5.length; i++) {
//     let row = filteredData5[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData5.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData5[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsBlankM50MD();
// }

// /** 28th list */
// function trackHeatSheetsBlankM50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, 50MD, males, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData5 is empty jump to trackHeatSheetsBlankMDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsBlankMDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsBlankMDev();
// }

// /** 29th list */
// function trackHeatSheetsBlankMDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, Dev, males, blank day */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === '' && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay1M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay1M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: BLANK';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: BLANK`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay1M100MD();
// }

// /** MALES, DAY 1 LISTS */
// /** 30th list */
// function trackHeatSheetsDay1M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, 100 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay1M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay1M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay1M50MD();
// }

// /** 31st list */
// function trackHeatSheetsDay1M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 1, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 1  && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay1MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay1MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 1';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay1MDev();
// }

// /** 32nd list */
// function trackHeatSheetsDay1MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, DEV, males, day 1, blank position, and blank heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 1 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2MBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2MBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 1';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   trackHeatSheetsDay2MBlank();
// }

// /** MALES, DAY 2 LISTS */
// /** 38th list */
// function trackHeatSheetsDay2MBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 1 male lists have finished updating. Currently working on 2-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, males, day 2, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 2 && row[3] === 'M' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay2M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2M100MD();
// }

// /** 39th list */
// function trackHeatSheetsDay2M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 2, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2M50MD();
// };

// /** 40th list */
// function trackHeatSheetsDay2M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 2, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay2MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay2MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay2MDev();
// }

// /** 41st list */
// function trackHeatSheetsDay2MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 2, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 2 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3MBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3MBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 2';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   trackHeatSheetsDay3MBlank();
// }

// /** MALES, DAY 3 LISTS */
// /** 42nd list */
// function trackHeatSheetsDay3MBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 2 male lists have finished updating. Currently working on 3-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, males, day 3, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 3 && row[3] === 'M' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay3M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3M100MD();
// }

// /** 43rd list */
// function trackHeatSheetsDay3M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3M50MD();
// }

// /** 44th list */
// function trackHeatSheetsDay3M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay3MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay3MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay3MDev();
// }

// /** 45th list */
// function trackHeatSheetsDay3MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 3, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 3 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4MBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4MBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 3';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   trackHeatSheetsDay4MBlank();
// }

// /** MALES, DAY 4 LISTS */
// /** 46st list */
// function trackHeatSheetsDay4MBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 3 male lists have finished updating. Currently working on 4-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, males, day 4, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 4 && row[3] === 'M' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay4M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4M100MD();
// }

// /** 47th list */
// function trackHeatSheetsDay4M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 4, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4M50MD();
// }

// /** 48th list */
// function trackHeatSheetsDay4M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 4, 50 MD, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay4MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay4MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay4MDev();
// }

// /** 49th list */
// function trackHeatSheetsDay4MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 4, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 4 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5MBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5MBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 4';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5MBlank();
// }

// /** MALES, DAY 5 LISTS */
// /** 50th list */
// function trackHeatSheetsDay5MBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 4 male lists have finished updating. Currently working on 5-6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, males, day 5, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 5 && row[3] === 'M' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay5M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5M100MD();
// }

// /** 51st list */
// function trackHeatSheetsDay5M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5M50MD();
// }

// /** 52nd list */
// function trackHeatSheetsDay5M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay5MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay5MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay5MDev();
// }

// /** 53rd list */
// function trackHeatSheetsDay5MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 5, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 5 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6MBlank */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6MBlank();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 5';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6MBlank();
// }

// /** MALES, DAY 6 LISTS */
// /** 54th list */
// function trackHeatSheetsDay6MBlank() {
//   SpreadsheetApp.getActiveSpreadsheet().toast("Day 5 male lists have finished updating. Currently working on 6.")
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];
  
//   /** Filter for active, males, day 6, blank event */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0]=== 6 && row[3] === 'M' && row[8] === true && row[11] === '') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty jump to trackHeatSheetsDay6M100MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6M100MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation
    
//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `                           Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6M100MD();
// }

// /** 55th list */
// function trackHeatSheetsDay6M100MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, 100 MD */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === '100 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6M50MD */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6M50MD();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     100 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6M50MD();
// }

// /** 56th list */
// function trackHeatSheetsDay6M50MD() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, softball, and heat */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === '50 MD') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to trackHeatSheetsDay6MDev */
//   if (filteredData.length === 0) {
//     return trackHeatSheetsDay6MDev();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';

//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     50 MD                      Heat: ${value}`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');

//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   trackHeatSheetsDay6MDev();
// }

// /** 57th list */
// function trackHeatSheetsDay6MDev() {
//   const { templateDoc, body } = openTrackHeatSheetsTemplateDoc();
//   let filteredData = [];

//   /** Filter for active, males, day 6, dev */
//   for (let i = 1; i < data.length; i++) {
//     let row = data[i];
//     if (row[0] === 6 && row[3] === 'M' && row[8] === true && row[11] === 'DEV') {
//       filteredData.push(row);
//     }
//   }

//   /** Check if filteredData is empty, jump to openGoogleDoc */
//   if (filteredData.length === 0) {
//     return openGoogleDoc();
//   }

//   /** Sort filteredData array by row[14] and then by row[15] in ascending order */
//   filteredData.sort((a, b) => {
//     if (a[14] === b[14]) {
//       return a[15] - b[15];
//     }
//     return a[14] - b[14];
//   });

//   let headerText5 = 'Track Heat Sheets - Scorecards                      Day: 6';
  
//   /** Create an object to store tables for each value in row[14] */
//   const tables = {};

//   /** Adds the filtered data to the respective tables */
//   for (let i = 0; i < filteredData.length; i++) {
//     let row = filteredData[i];
//     let value = String(row[14]).padStart(2, '0'); // Assuming row[14] contains the value for table separation

//     /** Check if a table already exists for the value */
//     if (!tables[value]) {
//       /** Create a new table if it doesn't exist */
//       tables[value] = {
//         table: body.appendTable(),
//         headerText: `     DEV                      Heat: N/A`
//       };

//       /** Adds table headers for each table */
//       let headersRow = tables[value].table.appendTableRow();
//       headersRow.appendTableCell('Pos.').setWidth(39).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('First Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Last Name').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Gender').setWidth(60).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Campus').getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('M').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('cm').setWidth(30).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Score').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//       headersRow.appendTableCell('Place').setWidth(50).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setAttributes(style2);
//     }

//     /** Create a new row in the respective table */
//     let tableRow = tables[value].table.appendTableRow();
//     tableRow.appendTableCell(typeof row[15] === 'number' ? row[15].toFixed(0) : '');
//     tableRow.appendTableCell(row[2]);
//     tableRow.appendTableCell(row[1]);
//     tableRow.appendTableCell(row[3]);
//     tableRow.appendTableCell(row[10]);
//     tableRow.appendTableCell(typeof row[12] === 'number' ? row[12].toFixed(0) : '');
//     tableRow.appendTableCell(typeof row[13] === 'number' ? row[13].toFixed(0) : '');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
//     tableRow.appendTableCell('');
  
//     // Insert a page break after each table except the last one
//     if (i < filteredData.length - 1) {
//       // Check if the current table and the next table have different values in row[14]
//       let currentValue = String(row[14]).padStart(2, '0');
//       let nextValue = String(filteredData[i + 1][14]).padStart(2, '0');
//       if (currentValue !== nextValue) {
//         body.appendPageBreak();
//       }
//     }
//   }

//   /** Add header text before each table */
//   Object.keys(tables).forEach((value, index) => {
//     let headerText = headerText5 + '\n' + tables[value].headerText;
//     body.insertParagraph(body.getChildIndex(tables[value].table), headerText).setAttributes(style);
//   });

//   body.appendPageBreak();
//   templateDoc.saveAndClose();
//   openGoogleDoc();
// }