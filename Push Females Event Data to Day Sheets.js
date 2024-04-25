// This function gets the data from 'Student Database' and filters it by event.

const runningEvents = [
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

function pushRunningEventDataToSheets() {
  // Loop over the events object
  for (var i = 0; i < runningEvents.length; i++) {
    var event = runningEvents[i];

    // Get the spreadsheet for this event
    var spreadsheet = SpreadsheetApp.openById(event.spreadsheetId);

    // Find the corresponding sheet name
    var sheetName = sheetNames.find(function(name) { return name === event.event[2]; });
    if (!sheetName) continue;

    // Get the sheet and clear its contents
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents();
    }

    // Filter the data based on the event criteria
    var filteredData = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[11] === event.event[2];
    });

    // Get the sheet and append the filtered data
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) continue;

    var filteredDataLength = filteredData.length;
    for (var j = 0; j < filteredDataLength; j++) {
        sheet.appendRow(filteredData[j]);
    }
  }
}

pushRunningEventDataToSheets();
