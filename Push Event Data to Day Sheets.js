// This function gets the data from 'Student Database', filters it by day & event, and pushes the chunks of data to separate day sheets.

// Array that is used to filter the female's running events data by day & event along with the spreadsheetId.
const femaleRunningEvents = [
  { name: 'day1F25MAstWalk', event: [1,'F','25 M Assisted Walk'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'},
  { name: 'day1F25MAstDevice', event: [1,'F','25 M Assisted Device'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1F25MAstWC', event: [1,'F','25 M Assisted WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1F25MManWC', event: [1,'F','25 M Manual WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1F30MSlalom', event: [1,'F','30 M Slalom'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1F50MRun', event: [1,'F','50 M Run'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1F50MManualWC', event: [1,'F','50 M Manual WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1F100MRun', event: [1,'F','100 M Run'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },

  { name: 'day2F25MAstWalk', event: [2,'F','25 M Assisted Walk'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'},
  { name: 'day2F25MAstDevice', event: [2,'F','25 M Assisted Device'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2F25MAstWC', event: [2,'F','25 M Assisted WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2F25MManWC', event: [2,'F','25 M Manual WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2F30MSlalom', event: [2,'F','30 M Slalom'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2F50MRun', event: [2,'F','50 M Run'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2F50MManualWC', event: [2,'F','50 M Manual WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2F100MRun', event: [2,'F','100 M Run'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },

  { name: 'day3F25MAstWalk', event: [3,'F','25 M Assisted Walk'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'},
  { name: 'day3F25MAstDevice', event: [3,'F','25 M Assisted Device'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3F25MAstWC', event: [3,'F','25 M Assisted WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3F25MManWC', event: [3,'F','25 M Manual WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3F30MSlalom', event: [3,'F','30 M Slalom'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3F50MRun', event: [3,'F','50 M Run'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3F50MManualWC', event: [3,'F','50 M Manual WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3F100MRun', event: [3,'F','100 M Run'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },

  { name: 'day4F25MAstWalk', event: [4,'F','25 M Assisted Walk'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'},
  { name: 'day4F25MAstDevice', event: [4,'F','25 M Assisted Device'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4F25MAstWC', event: [4,'F','25 M Assisted WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4F25MManWC', event: [4,'F','25 M Manual WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4F30MSlalom', event: [4,'F','30 M Slalom'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4F50MRun', event: [4,'F','50 M Run'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4F50MManualWC', event: [4,'F','50 M Manual WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4F100MRun', event: [4,'F','100 M Run'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },

  { name: 'day5F25MAstWalk', event: [5,'F','25 M Assisted Walk'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'},
  { name: 'day5F25MAstDevice', event: [5,'F','25 M Assisted Device'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5F25MAstWC', event: [5,'F','25 M Assisted WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5F25MManWC', event: [5,'F','25 M Manual WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5F30MSlalom', event: [5,'F','30 M Slalom'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5F50MRun', event: [5,'F','50 M Run'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5F50MManualWC', event: [5,'F','50 M Manual WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5F100MRun', event: [5,'F','100 M Run'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },

  { name: 'day6F25MAstWalk', event: [6,'F','25 M Assisted Walk'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'},
  { name: 'day6F25MAstDevice', event: [6,'F','25 M Assisted Device'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6F25MAstWC', event: [6,'F','25 M Assisted WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6F25MManWC', event: [6,'F','25 M Manual WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6F30MSlalom', event: [6,'F','30 M Slalom'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6F50MRun', event: [6,'F','50 M Run'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6F50MManualWC', event: [6,'F','50 M Manual WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6F100MRun', event: [6,'F','100 M Run'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  }
];

// Array that is used to filter the male's running events data by day & event along with the spreadsheetId.
const maleRunningEvents = [
  { name: 'day1M25MAstWalk', event: [1,'M','25 M Assisted Walk'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'},
  { name: 'day1M25MAstDevice', event: [1,'M','25 M Assisted Device'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1M25MAstWC', event: [1,'M','25 M Assisted WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1M25MManWC', event: [1,'M','25 M Manual WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1M30MSlalom', event: [1,'M','30 M Slalom'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1M50MRun', event: [1,'M','50 M Run'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1M50MManualWC', event: [1,'M','50 M Manual WC'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1M100MRun', event: [1,'M','100 M Run'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },

  { name: 'day2M25MAstWalk', event: [2,'M','25 M Assisted Walk'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'},
  { name: 'day2M25MAstDevice', event: [2,'M','25 M Assisted Device'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2M25MAstWC', event: [2,'M','25 M Assisted WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2M25MManWC', event: [2,'M','25 M Manual WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2M30MSlalom', event: [2,'M','30 M Slalom'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2M50MRun', event: [2,'M','50 M Run'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2M50MManualWC', event: [2,'M','50 M Manual WC'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2M100MRun', event: [2,'M','100 M Run'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },

  { name: 'day3M25MAstWalk', event: [3,'M','25 M Assisted Walk'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'},
  { name: 'day3M25MAstDevice', event: [3,'M','25 M Assisted Device'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3M25MAstWC', event: [3,'M','25 M Assisted WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3M25MManWC', event: [3,'M','25 M Manual WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3M30MSlalom', event: [3,'M','30 M Slalom'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3M50MRun', event: [3,'M','50 M Run'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3M50MManualWC', event: [3,'M','50 M Manual WC'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3M100MRun', event: [3,'M','100 M Run'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },

  { name: 'day4M25MAstWalk', event: [4,'M','25 M Assisted Walk'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'},
  { name: 'day4M25MAstDevice', event: [4,'M','25 M Assisted Device'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4M25MAstWC', event: [4,'M','25 M Assisted WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4M25MManWC', event: [4,'M','25 M Manual WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4M30MSlalom', event: [4,'M','30 M Slalom'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4M50MRun', event: [4,'M','50 M Run'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4M50MManualWC', event: [4,'M','50 M Manual WC'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4M100MRun', event: [4,'M','100 M Run'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },

  { name: 'day5M25MAstWalk', event: [5,'M','25 M Assisted Walk'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'},
  { name: 'day5M25MAstDevice', event: [5,'M','25 M Assisted Device'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5M25MAstWC', event: [5,'M','25 M Assisted WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5M25MManWC', event: [5,'M','25 M Manual WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5M30MSlalom', event: [5,'M','30 M Slalom'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5M50MRun', event: [5,'M','50 M Run'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5M50MManualWC', event: [5,'M','50 M Manual WC'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5M100MRun', event: [5,'M','100 M Run'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },

  { name: 'day6M25MAstWalk', event: [6,'M','25 M Assisted Walk'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'},
  { name: 'day6M25MAstDevice', event: [6,'M','25 M Assisted Device'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6M25MAstWC', event: [6,'M','25 M Assisted WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6M25MManWC', event: [6,'M','25 M Manual WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6M30MSlalom', event: [6,'M','30 M Slalom'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6M50MRun', event: [6,'M','50 M Run'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6M50MManualWC', event: [6,'M','50 M Manual WC'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6M100MRun', event: [6,'M','100 M Run'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  }
];

// Array that contains the names of the female sheets found within each Day worksheet.
const femaleRunningEventSheetNames = [
  'Females-25 M Assisted Walk',
  'Females-25 M Assisted Device',
  'Females-25 M Assisted WC',
  'Females-25 M Manual WC',
  'Females-30 M Slalom',
  'Females-50 M Run',
  'Females-50 M Manual WC',
  'Females-100 M Run'
];

// Array that contains the names of the male sheets found within each Day worksheet.
const maleRunningEventSheetNames = [
  'Males-25 M Assisted Walk',
  'Males-25 M Assisted Device',
  'Males-25 M Assisted WC',
  'Males-25 M Manual WC',
  'Males-30 M Slalom',
  'Males-50 M Run',
  'Males-50 M Manual WC',
  'Males-100 M Run'
];

let filteredData = {};

function pushRunningEventDataToSheets() {
  addIndexNumbers();
  // Loop over the femaleRunningEvents object
  for (var i = 0; i < femaleRunningEvents.length; i++) {
    var event = femaleRunningEvents[i];

    // Get the spreadsheet for this event
    var spreadsheet = SpreadsheetApp.openById(event.spreadsheetId);

    // Find the corresponding sheet name
    var sheetName = femaleRunningEventSheetNames.find(function(name) { return name.includes(event.event[2]); });
    if (!sheetName) continue;
    
    // Get the sheet and clear its contents
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents()
    
      // Define your header row
      var headerRow = ['T&F Event Day', 'Last Name', 'First Name', 'Gender', 'Active', 'Campus Level', 'Campus', 'Running Event', 'Running Event Score Min', 'Running Event Score Sec', 'Running Heat', 'Running Position', 'Index Number'];
      
      // Set the header row
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
    } else {
      Logger.log('Sheet not found: ' + sheetName);
      continue;
    }

    // Filter the data based on the first event criteria
    var filteredData1 = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[11] === event.event[2];
    }).map(function(row) {
      return [row[0], row[1], row[2], row[3], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[21]];
    });

    // Push the filtered data to each sheet, sorted from slowest to fastest time
    if (filteredData1.length > 0) {
      filteredData1.sort(function(a, b) {
      if (a[8] === b[8]) {
        return b[9] - a[9];
      } else {
        return b[8] - a[8];
      }
      });
      sheet.getRange(2, 1, filteredData1.length, filteredData1[0].length).setValues(filteredData1);
    }
  }

  // Loop over the maleRunningEvents object
  for (var i = 0; i < maleRunningEvents.length; i++) {
    var event = maleRunningEvents[i];

    // Get the spreadsheet for this event
    var spreadsheet = SpreadsheetApp.openById(event.spreadsheetId);

    // Find the corresponding sheet name
    var sheetName = maleRunningEventSheetNames.find(function(name) { return name.includes(event.event[2]); });
    if (!sheetName) continue;
    
    // Get the sheet and clear its contents
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents()

      // Define your header row
      var headerRow = ['T&F Event Day', 'Last Name', 'First Name', 'Gender', 'Active', 'Campus Level', 'Campus', 'Running Event', 'Running Event Score Min', 'Running Event Score Sec', 'Running Heat', 'Running Position', 'Index Number'];

      // Set the header row
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);

    } else {
    Logger.log('Sheet not found: ' + sheetName);
    continue;
    }

    // Filter the data based on the first event criteria
    var filteredData1 = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[11] === event.event[2];
    }).map(function(row) {
      return [row[0], row[1], row[2], row[3], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[21]];
    });

    // Push the filtered data to each sheet, sorted from slowest to fastest time
    if (filteredData1.length > 0) {
      filteredData1.sort(function(a, b) {
      if (a[8] === b[8]) {
        return b[9] - a[9];
      } else {
        return b[8] - a[8];
      }
      });
      sheet.getRange(2, 1, filteredData1.length, filteredData1[0].length).setValues(filteredData1);
    }
  }
pushFieldEventDataToSheets();
}


const femaleFieldEvents = [
  { name: 'day1FTurboJav', event: [1,'F','TURBO JAV'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1FFmTrbJv', event: [1,'F','FOAM TURBO JAV'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1FRnngLngJmp', event: [1,'F','RUNNING LONG JUMP'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1FSftbllThrw', event: [1,'F','SOFTBALL THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1FTnnsBllThrw', event: [1,'F','TENNIS BALL THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1FBnBgThw', event: [1,'F','BEAN BAG THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },

  { name: 'day2FTurboJav', event: [2,'F','TURBO JAV'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2FFmTrbJv', event: [2,'F','FOAM TURBO JAV'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2FRnngLngJmp', event: [2,'F','RUNNING LONG JUMP'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2FSftbllThrw', event: [2,'F','SOFTBALL THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2FTnnsBllThrw', event: [2,'F','TENNIS BALL THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2FBnBgThw', event: [2,'F','BEAN BAG THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },

  { name: 'day3FTurboJav', event: [3,'F','TURBO JAV'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3FFmTrbJv', event: [3,'F','FOAM TURBO JAV'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3FRnngLngJmp', event: [3,'F','RUNNING LONG JUMP'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3FSftbllThrw', event: [3,'F','SOFTBALL THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3FTnnsBllThrw', event: [3,'F','TENNIS BALL THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3FBnBgThw', event: [3,'F','BEAN BAG THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },

  { name: 'day4FTurboJav', event: [4,'F','TURBO JAV'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4FFmTrbJv', event: [4,'F','FOAM TURBO JAV'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4FRnngLngJmp', event: [4,'F','RUNNING LONG JUMP'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4FSftbllThrw', event: [4,'F','SOFTBALL THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4FTnnsBllThrw', event: [4,'F','TENNIS BALL THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4FBnBgThw', event: [4,'F','BEAN BAG THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },

  { name: 'day5FTurboJav', event: [5,'F','TURBO JAV'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5FFmTrbJv', event: [5,'F','FOAM TURBO JAV'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5FRnngLngJmp', event: [5,'F','RUNNING LONG JUMP'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5FSftbllThrw', event: [5,'F','SOFTBALL THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5FTnnsBllThrw', event: [5,'F','TENNIS BALL THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5FBnBgThw', event: [5,'F','BEAN BAG THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },

  { name: 'day6FTurboJav', event: [6,'F','TURBO JAV'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6FFmTrbJv', event: [6,'F','FOAM TURBO JAV'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6FRnngLngJmp', event: [6,'F','RUNNING LONG JUMP'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6FSftbllThrw', event: [6,'F','SOFTBALL THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6FTnnsBllThrw', event: [6,'F','TENNIS BALL THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6FBnBgThw', event: [6,'F','BEAN BAG THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  }
];

const maleFieldEvents = [
  { name: 'day1MTurboJav', event: [1,'M','TURBO JAV'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1MFmTrbJv', event: [1,'M','FOAM TURBO JAV'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1MRnngLngJmp', event: [1,'M','RUNNING LONG JUMP'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1MSftbllThrw', event: [1,'M','SOFTBALL THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },
  { name: 'day1MTnnsBllThrw', event: [1,'M','TENNIS BALL THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA' },
  { name: 'day1MBnBgThw', event: [1,'M','BEAN BAG THROW'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'  },

  { name: 'day2MTurboJav', event: [2,'M','TURBO JAV'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2MFmTrbJv', event: [2,'M','FOAM TURBO JAV'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2MRnngLngJmp', event: [2,'M','RUNNING LONG JUMP'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2MSftbllThrw', event: [2,'M','SOFTBALL THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },
  { name: 'day2MTnnsBllThrw', event: [2,'M','TENNIS BALL THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls' },
  { name: 'day2MBnBgThw', event: [2,'M','BEAN BAG THROW'], spreadsheetId: '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls'  },

  { name: 'day3MTurboJav', event: [3,'M','TURBO JAV'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3MFmTrbJv', event: [3,'M','FOAM TURBO JAV'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3MRnngLngJmp', event: [3,'M','RUNNING LONG JUMP'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3MSftbllThrw', event: [3,'M','SOFTBALL THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },
  { name: 'day3MTnnsBllThrw', event: [3,'M','TENNIS BALL THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg' },
  { name: 'day3MBnBgThw', event: [3,'M','BEAN BAG THROW'], spreadsheetId: '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg'  },

  { name: 'day4MTurboJav', event: [4,'M','TURBO JAV'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4MFmTrbJv', event: [4,'M','FOAM TURBO JAV'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4MRnngLngJmp', event: [4,'M','RUNNING LONG JUMP'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4MSftbllThrw', event: [4,'M','SOFTBALL THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },
  { name: 'day4MTnnsBllThrw', event: [4,'M','TENNIS BALL THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ' },
  { name: 'day4MBnBgThw', event: [4,'M','BEAN BAG THROW'], spreadsheetId: '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ'  },

  { name: 'day5MTurboJav', event: [5,'M','TURBO JAV'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5MFmTrbJv', event: [5,'M','FOAM TURBO JAV'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5MRnngLngJmp', event: [5,'M','RUNNING LONG JUMP'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5MSftbllThrw', event: [5,'M','SOFTBALL THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },
  { name: 'day5MTnnsBllThrw', event: [5,'M','TENNIS BALL THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg' },
  { name: 'day5MBnBgThw', event: [5,'M','BEAN BAG THROW'], spreadsheetId: '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg'  },

  { name: 'day6MTurboJav', event: [6,'M','TURBO JAV'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6MFmTrbJv', event: [6,'M','FOAM TURBO JAV'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6MRnngLngJmp', event: [6,'M','RUNNING LONG JUMP'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6MSftbllThrw', event: [6,'M','SOFTBALL THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },
  { name: 'day6MTnnsBllThrw', event: [6,'M','TENNIS BALL THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk' },
  { name: 'day6MBnBgThw', event: [6,'M','BEAN BAG THROW'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  }
];

// Array that contains the names of the female sheets found within each Day worksheet.
const femaleFieldEventSheetNames = [
  'Females-Turbo Jav',
  'Females-Foam Turbo Jav',
  'Females-Running Long Jump',
  'Females-Softball Throw',
  'Females-Tennis Ball Throw',
  'Females-Bean Bag Throw'
];

// Array that contains the names of the male sheets found within each Day worksheet.
const maleFieldEventSheetNames = [
  'Males-Turbo Jav',
  'Males-Tennis Ball Throw',
  'Males-Softball Throw',
  'Males-Running Long Jump',
  'Males-Foam Turbo Jav',
  'Males-Bean Bag Throw'
];

function pushFieldEventDataToSheets() {
  // Loop over the femaleFieldEvents object
  for (var i = 0; i < femaleFieldEvents.length; i++) {
    var event = femaleFieldEvents[i];

    // Get the spreadsheet for this event
    var spreadsheet = SpreadsheetApp.openById(event.spreadsheetId);
    
    // Find the corresponding sheet name
    var sheetName = femaleFieldEventSheetNames.find(function(name) { return name.toLowerCase().includes(event.event[2].toString().toLowerCase()); });
    if (!sheetName) continue;
    
    // Get the sheet and clear its contents
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents()
    
      // Define your header row
      var headerRow = ['T&F Event Day', 'Last Name', 'First Name', 'Gender', 'Active', 'Campus Level', 'Campus', 'Field Event', 'Field Event Score Meters', 'Field Event Score CMs', 'Field Heat', 'Field Position', 'Index Number'];
      
      // Set the header row
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
    } else {
      Logger.log('Sheet not found: ' + sheetName);
      continue;
    }

    // Filter the data based on the first event criteria
    var filteredData1 = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[16] === event.event[2];
    }).map(function(row) {
      return [row[0], row[1], row[2], row[3], row[8], row[9], row[10], row[16], row[17], row[18], row[19], row[20], row[21]];
    });

    // Push the filtered data to each sheet, sorted from shortest to longest distance
    if (filteredData1.length > 0) {
      filteredData1.sort(function(a, b) {
      if (a[8] === b[8]) {
        return a[9] - b[9];
      } else {
        return a[8] - b[8];
      }
      });
      sheet.getRange(2, 1, filteredData1.length, filteredData1[0].length).setValues(filteredData1);
    }
  }

  // Loop over the maleFieldEvents object
  for (var i = 0; i < maleFieldEvents.length; i++) {
    var event = maleFieldEvents[i];

    // Get the spreadsheet for this event
    var spreadsheet = SpreadsheetApp.openById(event.spreadsheetId);

    // Find the corresponding sheet name
    var sheetName = maleFieldEventSheetNames.find(function(name) { return name.toLowerCase().includes(event.event[2].toString().toLowerCase()); });
    if (!sheetName) continue;
    
    // Get the sheet and clear its contents
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents()

      // Define your header row
      var headerRow = ['T&F Event Day', 'Last Name', 'First Name', 'Gender', 'Active', 'Campus Level', 'Campus', 'Field Event', 'Field Event Score Meters', 'Field Event Score CMs', 'Field Heat', 'Field Position', 'Index Number'];

      // Set the header row
      sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);

    } else {
    Logger.log('Sheet not found: ' + sheetName);
    continue;
    }

    // Filter the data based on the first event criteria
    var filteredData1 = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[16] === event.event[2];
    }).map(function(row) {
      return [row[0], row[1], row[2], row[3], row[8], row[9], row[10], row[16], row[17], row[18], row[19], row[20], row[21]];
    });

    // Push the filtered data to each sheet, sorted from shortest to longest distance
    if (filteredData1.length > 0) {
      filteredData1.sort(function(a, b) {
      if (a[8] === b[8]) {
        return b[9] - a[9];
      } else {
        return b[8] - a[8];
      }
      });
      sheet.getRange(2, 1, filteredData1.length, filteredData1[0].length).setValues(filteredData1);
    }
  }
}

pushRunningEventDataToSheets();
