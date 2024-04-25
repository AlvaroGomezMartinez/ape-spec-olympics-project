// This function gets the data from 'Student Database' and filters it by event.

const runningEvents = [
  { name: 'day1F25MAstWalk', event: [1,'F','25 M Assisted Walk'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'},
  //{ name: 'day1M25MAstWalk', event: [1,'M','25 M Assisted Walk'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'},
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

const maleRunningEvents = [
  { name: 'day1M25MAstWalk', event: [1,'M','25 M Assisted Walk'], spreadsheetId: '1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA'},
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
    var event2 = maleRunningEvents[i];

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

    // Filter the data based on the first event criteria
    var filteredData1 = data.filter(function(row) {
      return row[0] === event.event[0] && row[3] === event.event[1] && row[11] === event.event[2];
    });

    // Filter the data based on the second event criteria
    // Replace 'event2' with your second event
    var filteredData2 = data.filter(function(row) {
      return row[0] === event2.event[0] && row[3] === event2.event[1] && row[11] === event2.event[2];
    });

    // Get the sheet and append the first filtered data
    var sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) continue;

    var filteredDataLength1 = filteredData1.length;
    for (var j = 0; j < filteredDataLength1; j++) {
        sheet.appendRow(filteredData1[j]);
    }

    // Append the second filtered data
    var filteredDataLength2 = filteredData2.length;
    for (var j = 0; j < filteredDataLength2; j++) {
        sheet.appendRow(filteredData2[j]);
    }
  }
}

pushRunningEventDataToSheets();
