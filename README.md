# SPECIAL OLYMPICS STUDENT DATABASE
## Northside ISD
A Collaboration between the departments of Special Education and Academic Technology

**Project Lead:** Angie Cranham, Special Education Adapted Physical Education, 210-397-2406, [angie.cranham\@nisd.net](mailto:angie.cranham@nisd.net)

**Author of scripts, formulas, & queries:** Alvaro Gomez, Academic Technology Coach, 210-363-1577, [alvaro.gomez\@nisd.net](mailto:alvaro.gomez@nisd.net)

**Background:** This project is meant to facilitate the organization of student data that is collected in a GoogleSheet. The data is then used to generate reports that are shared with the Special Olympics coaches and volunteers. The data is collected by the Special Education Adapted Physical Education (APE) teachers and uploaded to the GoogleSheet. The students are then organized into days, heats, lanes for the annual Special Olympics event. The data is also used to generate reports that are shared with the Special Olympics coaches and volunteers. The reports are generated by running functions within this Apps Script Project.

**Implementation Tasks:**
- [ ] 1. Create a Google Drive folder to organize the database and reports. Currently, a Google Drive Folder called APE Special Olympics Project was created to organize the needed template files (https://drive.google.com/drive/folders/1amRAgl9agb3I2zrDXuISJFOSuvw6iGFa?usp=drive_link).
- [ ] 2. Create a nested folder inside the one created in step 1. Currently the APE Special Olympics Project folder has a subfolder called Reports (https://drive.google.com/drive/folders/1bXDXyWz8lwcFygs1TbXONoGmfS9Z1yW9?usp=drive_link).
- [ ] 3. Create eight GoogleDocs inside the nested folder from step 2. Currently, inside Reports are eight GoogleDocs that serve as templates for the reports that are generated when their associated functions are run:
    (1) Field Condensed List - Females
    (2) Field Condensed List - Males
    (3) Field Heat Sheets - Females
    (4) Field Heat Sheets - Males
    (5) Track Condensed List - Females
    (6) Track Condensed List - Males
    (7) Track Heat Sheets - Females
    (8) Track Heat Sheets - Males
- [ ] 4. After the eight GoogleDoc templates are created, get the document IDs from each one and copy them over to their corresponding variable in the Global Variables file in this project.
- [ ] 5. Set a trigger to run the function onOpen(), found inside the Menus.gs file of this project, when the spreadsheet is opened.
- [ ] 6. Set a trigger to run the function insertFormula(), found inside the Age.gs file of this project, when the spreadsheet is edited.

**Project's Progress - Updates:**
On 4/18/24, continued updating the project files.
I created the functions to push the event data to the day sheets.
I still need to add the headings row to each event.
Then find out if it's putting the events by order. Fastest to slowest for running events and longest to shortest for field events.
Then create a function to push the heat and lane data back into the main database.

On 4/24/24, continued updating the project files.
I added field event sheets to the Day worksheets.
I created a function that will push the females and males to the running event sheets. I need to continue debugging. I get the following error when I run the function, "TypeError: Cannot read properties of undefined (reading 'event')
(anonymous)	@ Push Females Event Data to Day Sheets.gs:162
pushRunningEventDataToSheets	@ Push Females Event Data to Day Sheets.gs:161
(anonymous)	@ Push Females Event Data to Day Sheets.gs:182".

On 4/29/24, updated the function that adds the data to the individual event sheets to each Day worksheet. The next items that I need to accomplish is to add the field events in addition too the track events. Have the data push only the necessary columns (running events only columns L:P and field events only Q:U). I need to order the data from slowest to fastest for the running events and longest to shortest for field events.

**Pending tasks:**

- [ ] See if it's possible to add a page break by campus
- [ ] T&F Alphabetical - list by campus- have the report cut off by campus
- [ ] For the labels:
    * Day 1 Alphabetical by Campus
    * Day 2 "             "   "
    * ...
