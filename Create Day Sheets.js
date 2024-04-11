function createDaySheets() {
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
        // day1.push(value);
        day1.push([value]);
        break;
      case 2:
        day2.push([value]);
        break;
      case 3:
        day3.push([value]);
        break;
      case 4:
        day4.push([value]);
        break;
      case 5:
        day5.push([value]);
        break;
      case 6:
        day6.push([value]);
        break;
      default:
        break;
    }
  }

  // Log the arrays
  Logger.log("Day 1: "  + day1);
  Logger.log("Day 2: "  + day2);
  Logger.log("Day 3: "  + day3);
  Logger.log("Day 4: "  + day4);
  Logger.log("Day 5: "  + day5);
  Logger.log("Day 6: "  + day6);
}
