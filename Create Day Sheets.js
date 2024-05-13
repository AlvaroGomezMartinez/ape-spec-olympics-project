// The purpose of the function below is to push the data from the main sheet to each day sheet.
// After pushing the data, it calls the pushRunningEventDataToSheets function to push the running event data to each event sheet.
// A user interface menu item in the "Special Olympics Student Database" called "Push data to the six day sheets" runs this function.

function createDaySheets() {
  try {

    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDate = new Date().toLocaleString('en-US', options);
    var comment = 'Data was received on: ' + formattedDate;

    var day1 = [];
    var day2 = [];
    var day3 = [];
    var day4 = [];
    var day5 = [];
    var day6 = [];

    for (var i = 0; i < data.length; i++) {
      var value = data[i];

      switch (value[0]) {
        case 1:
          day1.push(value);
          break;
        case 2:
          day2.push(value);
          break;
        case 3:
          day3.push(value);
          break;
        case 4:
          day4.push(value);
          break;
        case 5:
          day5.push(value);
          break;
        case 6:
          day6.push(value);
          break;
        default:
          break;
      }
    }

    const daySheetIds = ['1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA', '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls', '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg', '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ', '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg', '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk']

    const headings = data.shift();

    const day1Sheet1 = SpreadsheetApp.openById(daySheetIds[0]).getSheetByName("Sheet1");
    const day2Sheet1 = SpreadsheetApp.openById(daySheetIds[1]).getSheetByName("Sheet1");
    const day3Sheet1 = SpreadsheetApp.openById(daySheetIds[2]).getSheetByName("Sheet1");
    const day4Sheet1 = SpreadsheetApp.openById(daySheetIds[3]).getSheetByName("Sheet1");
    const day5Sheet1 = SpreadsheetApp.openById(daySheetIds[4]).getSheetByName("Sheet1");
    const day6Sheet1 = SpreadsheetApp.openById(daySheetIds[5]).getSheetByName("Sheet1");

    day1Sheet1.clear();
    day2Sheet1.clear();
    day3Sheet1.clear();
    day4Sheet1.clear();
    day5Sheet1.clear();
    day6Sheet1.clear();

    day1.unshift(headings);
    day2.unshift(headings);
    day3.unshift(headings);
    day4.unshift(headings);
    day5.unshift(headings);
    day6.unshift(headings);

    day1Sheet1.getRange(1, 1, day1.length, 22).setValues(day1);
    day1Sheet1.getRange(1,1).setComment(comment);
    day2Sheet1.getRange(1, 1, day2.length, 22).setValues(day2);
    day2Sheet1.getRange(1,1).setComment(comment);
    day3Sheet1.getRange(1, 1, day3.length, 22).setValues(day3);
    day3Sheet1.getRange(1,1).setComment(comment);
    day4Sheet1.getRange(1, 1, day4.length, 22).setValues(day4);
    day4Sheet1.getRange(1,1).setComment(comment);
    day5Sheet1.getRange(1, 1, day5.length, 22).setValues(day5);
    day5Sheet1.getRange(1,1).setComment(comment);
    day6Sheet1.getRange(1, 1, day6.length, 22).setValues(day6);
    day6Sheet1.getRange(1,1).setComment(comment);

    pushRunningEventDataToSheets();
  } catch (error) {
    Logger.log(error);
  }
}
