/****************************************************************************************
 * The onOpen() function below creates two menus called '⚑ Reports', and                *
 * '⚑ Assign Heats & Lanes' in the 'Special Olympics Student Database' spreadsheet.     *
 *                                                                                      *
 * A trigger is set to run the function when the spreadsheet is opened.                 *
 ****************************************************************************************/

function onOpen() {
  var ui = SpreadsheetApp.getUi();

  var menu1 = ui
    .createMenu("⚑ Reports")
    .addSubMenu(
      ui
        .createMenu("Field Condensed Lists")
        .addItem("Females", "runFemalesFieldCondensedList")
        .addItem("Males", "runMalesFieldCondensedLists"),
    )
    .addSubMenu(
      ui
        .createMenu("Field Heat Sheets - Scorecards")
        .addItem("Females", "runFemaleFieldHeatSheets")
        .addItem("Males", "runMaleFieldHeatSheets"),
    )
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu("Track Condensed Lists")
        .addItem("Females", "runFemaleTrackCondensedLists")
        .addItem("Males", "runMaleTrackCondensedLists"),
    )
    .addSubMenu(
      ui
        .createMenu("Track Heat Sheets - Scorecards")
        .addItem("Females", "runFemaleTrackHeatSheetsLists")
        .addItem("Males", "runMaleTrackHeatSheetsLists"),
    )
    .addToUi();

  var menu2 = ui
    .createMenu("⚑ Assign Heats & Lanes")
    .addItem(
      "Push data to the six day sheets. This will overwrite what is in those sheets.",
      "runCreateDaySheets",
    )
    .addToUi();
}

/******************************************************************************************
 * Since the nine functions above (in the menu items) are found in modules within this    *
 * project, the nin functions below are needed in order to be able to call the            *
 * functions from those modules.                                                          *
 ******************************************************************************************/
function runFemalesFieldCondensedList() {
  var functionName = "runAllFemalesFieldCondensedLists";
  var functionArgs = [];
  // Execute the function from the 'Females Field Condensed List.gs' file
  var script = eval("runAllFemalesFieldCondensedLists");
  script.apply(null, functionArgs);
}

function runMalesFieldCondensedLists() {
  var functionName = "runAllMalesFieldCondensedLists";
  var functionArgs = [];
  // Execute the function from the 'Males Field Condensed List.gs' file
  var script = eval("runAllMalesFieldCondensedLists");
  script.apply(null, functionArgs);
}

function runFemaleFieldHeatSheets() {
  var functionName = "runAllFemalesFieldHeatSheets";
  var functionArgs = [];
  // Execute the function from the 'Females Field Heat Sheets.gs' file
  var script = eval("runAllFemalesFieldHeatSheets");
  script.apply(null, functionArgs);
}

function runMaleFieldHeatSheets() {
  var functionName = "runAllMalesFieldHeatSheets";
  var functionArgs = [];
  // Execute the function from the 'Males Field Heat Sheets.gs' file
  var script = eval("runAllMalesFieldHeatSheets");
  script.apply(null, functionArgs);
}

function runFemaleTrackCondensedLists() {
  var functionName = "runAllFemalesTrackCondensedLists";
  var functionArgs = [];
  // Execute the function from the 'Female Track Condensed List.gs' file
  var script = eval("runAllFemalesTrackCondensedLists");
  script.apply(null, functionArgs);
}

function runMaleTrackCondensedLists() {
  var functionName = "runAllMalesTrackCondensedLists";
  var functionArgs = [];
  // Execute the function from the 'Male Track Condensed List.gs' file
  var script = eval("runAllMalesTrackCondensedLists");
  script.apply(null, functionArgs);
}

function runFemaleTrackHeatSheetsLists() {
  var functionName = "runAllFemalesTrackHeatSheets";
  var functionArgs = [];
  // Execute the function from the 'Female Track Heat Sheets.gs' file
  var script = eval("runAllFemalesTrackHeatSheets");
  script.apply(null, functionArgs);
}

function runMaleTrackHeatSheetsLists() {
  var functionName = "runAllMalesTrackHeatSheets";
  var functionArgs = [];
  // Execute the function from the 'Male Track Heat Sheets.gs' file
  var script = eval("runAllMalesTrackHeatSheets");
  script.apply(null, functionArgs);
}

function runCreateDaySheets() {
  var functionName = "createDaySheets";
  var functionArgs = [];
  // Execute the function from the 'Create Day Sheets.gs' file
  var script = eval("createDaySheets");
  script.apply(null, functionArgs);
}
