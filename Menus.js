/** The function below creates two menus called '⚑ Reports' and '⚑ Create Heats' in the 'Special Olympics Student Database'. A trigger is set to run the function when the spreadsheet is opened.
*/
function onOpen() {
  var ui = SpreadsheetApp.getUi();

  var menu1 = ui.createMenu("⚑ Reports")
    .addSubMenu(ui.createMenu('Field Condensed Lists')
      .addItem('Females', 'runFemalesFieldCondensedList')
      .addItem('Males', 'runMalesFieldCondensedLists')
      )
    .addSubMenu(ui.createMenu('Field Heat Sheets - Scorecards')
      .addItem('Females', 'runFemaleFieldHeatSheets')
      .addItem('Males', 'runMaleFieldHeatSheets')
      )
      .addSeparator()
    .addSubMenu(ui.createMenu('Track Condensed Lists')
      .addItem('Females', 'runFemaleTrackCondensedLists')
      .addItem('Males', 'runMaleTrackCondensedLists')
      )
    .addSubMenu(ui.createMenu('Track Heat Sheets - Scorecards')
      .addItem('Females', 'runFemaleTrackHeatSheetsLists')
      .addItem('Males', 'runMaleTrackHeatSheetsLists')
      )
    .addToUi();

  var menu2 = ui.createMenu('⚑ Create Heats')
    .addItem('Field Events', 'runCreateFieldEventHeatsAndLanes')
    .addItem('Running Events', 'runCreateTrackEventHeatsAndLanes')
    .addToUi();
}

/** Since the ten scripts above--in the menus--are on separate .gs files in this project,
 * the ten functions below are needed to call the functions in those files.
 */
function runFemalesFieldCondensedList() {
  var functionName = 'runAllFemalesFieldCondensedLists';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllFemalesFieldCondensedLists');
  script.apply(null, functionArgs);
}

function runMalesFieldCondensedLists() {
  var functionName = 'runAllMalesFieldCondensedLists';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllMalesFieldCondensedLists');
  script.apply(null, functionArgs);
}

function runFemaleFieldHeatSheets() {
  var functionName = 'runAllFemalesFieldHeatSheets';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllFemalesFieldHeatSheets');
  script.apply(null, functionArgs);
}

function runMaleFieldHeatSheets() {
  var functionName = 'runAllMalesFieldHeatSheets';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllMalesFieldHeatSheets');
  script.apply(null, functionArgs);
}

function runFemaleTrackCondensedLists() {
  var functionName = 'runAllFemalesTrackCondensedLists';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllFemalesTrackCondensedLists');
  script.apply(null, functionArgs);
}

function runMaleTrackCondensedLists() {
  var functionName = 'runAllMalesTrackCondensedLists';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllMalesTrackCondensedLists');
  script.apply(null, functionArgs);
}

function runFemaleTrackHeatSheetsLists() {
  var functionName = 'runAllFemalesTrackHeatSheets';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllFemalesTrackHeatSheets');
  script.apply(null, functionArgs);
}

function runMaleTrackHeatSheetsLists() {
  var functionName = 'runAllMalesTrackHeatSheets';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('runAllMalesTrackHeatSheets');
  script.apply(null, functionArgs);
}

function runCreateFieldEventHeatsAndLanes() {
  var functionName = 'createAllFieldEventHeatsAndLanes';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('createAllFieldEventHeatsAndLanes');
  script.apply(null, functionArgs);
}

function runCreateTrackEventHeatsAndLanes() {
  var functionName = 'createAllTrackEventHeatsAndLanes';
  var functionArgs = [];

  // Execute the function from the separate .gs file
  var script = eval('createAllTrackEventHeatsAndLanes');
  script.apply(null, functionArgs);
}
