// This function gets the data from 'Student Database' and filters it by event.

const events = [
  { name: 'day1F25MAstWalk', event: [1,'F','25 M Assisted Walk'] },
  { name: 'day1F25MAstDevice', event: [1,'F','25 M Assisted Device'] },
  { name: 'day1F25MAstWC', event: [1,'F','25 M Assisted WC'] },
  { name: 'day1F25MManWC', event: [1,'F','25 M Manual WC'] },
  { name: 'day1F30MSlalom', event: [1,'F','30 M Slalom'] },
  { name: 'day1F50MRun', event: [1,'F','50 M Run'] },
  { name: 'day1F50MManualWC', event: [1,'F','50 M Manual WC'] },
  { name: 'day1F100MRun', event: [1,'F','100 M Run'] }
];

const sheetNames = [
  '25 M Assisted Walk',
  '25 M Assisted Device',
  '25 M Assisted WC',
  '25 M Manual WC',
  '30 M Slalom',
  '50 M Run',
  '50 M Manual WC',
  '100 M Run'
];

let filteredData = {};

events.forEach(event => {
  filteredData[event.name] = pushEventDataToDaySheet(event.event[0], event.event[1], event.event[2]);
});

function pushEventDataToDaySheet(tAndFEventDay, athGender, trackEvent) {
  let filteredData = [];
  for (let i = 1; i < data.length; i++) {
    let row = data[i];
    if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[11] === trackEvent) {
      filteredData.push(row);
    }
  }
  Logger.log(filteredData)
  return filteredData;
}

function appendDataToSheets() {
  // Get the spreadsheet
  var spreadsheet = SpreadsheetApp.openById('1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA');

  // Loop over the filteredData object
  for (var key in filteredData) {
    // Find the corresponding sheet name
    var sheetName = sheetNames.find(function(name) { return key.includes(name); });
    if (!sheetName) continue;

    // Get the sheet and append the data
    var sheet = spreadsheet.getSheetByName(sheetName);
    var data = filteredData[key];
    for (var i = 0; i < data.length; i++) {
      sheet.appendRow(data[i]);
    }
  }
}

appendDataToSheets();