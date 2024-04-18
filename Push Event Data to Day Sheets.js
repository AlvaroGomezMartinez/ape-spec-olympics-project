// This function gets the data from 'Student Database' and filters it by event.





function pushEventDataToDaySheet(tAndFEventDay, athGender, trackEvent) {
    
    let filteredData = [];
    for (let i = 1; i < dataLength; i++) {
      let row = data[i];
      if (row[0] === tAndFEventDay && row[3] === athGender && row[8] === true && row[11] === trackEvent) {
        filteredData.push(row);
      }
    }
}