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

On 5/2/24, completed tasks from 4/29. Field events are now pushed to their own Day worksheets. Only the necessary data is pushed (i.e. running events on get the running event data and field events only get the field event data). The data is also sorted from slowest to fastest for running events and longest to shortest for field events.
I started working on getting the individual sheets to push back to the main sheet. I need to work out a bug.
I created a library to keep from having to copy and paste scripts into the six day sheets. This is what I need to troubleshoot.

On 5/13/24, added a sidebar that sends the user to each individual day sheet database to assign the heats and lanes.

**Pending tasks:**

- [ ] See if it's possible to add a page break by campus
- [ ] T&F Alphabetical - list by campus- have the report cut off by campus for the labels
- [ ] For the labels:
    * On the female labels - have track first then field event. Opposite for the males
    * Day 1 Alphabetical by Campus
    * Day 2 "             "   "
    * ...
