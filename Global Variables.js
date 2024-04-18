/** 
 * Last Update: April 4, 2024
*/

const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Student Database');

let data = sheet.getDataRange().getValues();

let dataLength = data.length;

const femaleFieldCondensedListTemplateFile = DriveApp.getFileById('1wFKXTaaHXyb7ykrItuDdsatmwVtUhA9mqsliDVOeYQs');
const maleFieldCondensedListTemplateFile = DriveApp.getFileById('1XWTGzRH5Khpmlay40PJ63yOO4QJWGPZn8KZ2fmPP0J0');
const femaleFieldHeatSheetsTemplateFile = DriveApp.getFileById('1IiFH5ZWBmF6Q7q1EZTRF1CW6Nt78h9FTEFEgp95W_WE');
const maleFieldHeatSheetsTemplateFile = DriveApp.getFileById('1KY1ULf66Ehcy8CI04JY32xdybAS1AJN2m1IOMdw_QJw');
const femaleTrackCondensedListTemplateFile = DriveApp.getFileById('1S9mKpjA0jtrE9wXVQyI0yjDS9IFdYKUoUrbAPQ1pmpQ');
const maleTrackCondensedListTemplateFile = DriveApp.getFileById('1AkfN5jwVSEB2eap5gL7e26HoJmkAT6Ta0WsORFeW18M');
const femaleTrackHeatSheetsTemplateFile = DriveApp.getFileById('16KXVHlUxmV1RmG2jqdfGZ7FX3aGlmzRAPizH2VFWrdc');
const maleTrackHeatSheetsTemplateFile = DriveApp.getFileById('1uNO1ldwz3bBEsw64Qj4qfqsubR9nNHPu1H9nwGZqJkg');

/** These are the font styles for the page and table headers of each list. */
const style = {};
style[DocumentApp.Attribute.FONT_SIZE] = 16;
style[DocumentApp.Attribute.BOLD] = true;

let style2 = {};
style2[DocumentApp.Attribute.FONT_SIZE] = 10;
style2[DocumentApp.Attribute.BOLD] = false;
