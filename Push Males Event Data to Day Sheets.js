// This function gets the data from 'Student Database' and filters it by event.

const malesRunningEvents = [
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
  { name: 'day6M100MRun', event: [6,'M','100 M Run'], spreadsheetId: '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk'  },

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

function pushMalesRunningEventDataToSheets() {
  // Loop over the events object
  for (var i = 0; i < malesRunningEvents.length; i++) {
    var event = malesRunningEvents[i];

    // Get the spreadsheet for this event
    var maleSpreadsheet = SpreadsheetApp.openById(event.spreadsheetId);

    // Find the corresponding sheet name
    var sheetName = sheetNames.find(function(name) { return name === event.event[2]; });
    if (!sheetName) continue;

    // Get the sheet and clear its contents
    var sheet = maleSpreadsheet.getSheetByName(sheetName);
    if (sheet) {
      sheet.clearContents();
    }

    // Filter the data based on the event criteria
    var maleFilteredData = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[11] === event.event[2];
    });

    // Get the sheet and append the filtered data
    var sheet = maleSpreadsheet.getSheetByName(sheetName);
    if (!sheet) continue;

    var maleFilteredDataLength = maleFilteredData.length;
    for (var j = 0; j < maleFilteredDataLength; j++) {
        sheet.appendRow(maleFilteredData[j]);
    }
  }
}

pushMalesRunningEventDataToSheets();
