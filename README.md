# Timekeeper App

To run the project simply download the repo and navigate to the respective directory and enter npm start. 

You can find a live version of this app here:
https://lucid-wilson-70dfb6.netlify.app/

## READ ME

A couple of notes per the guidelines stated in the document.

Milliseconds is calculated based off of Date.now() which calculates the milliseconds since 1970. I am not sure if this is specifically what was desired but regardless the Start Time and End Time will be based on this given my decesion to use Date.now()

All state in the application comes from Zustand. That said, there was one instance where I used the useState hook for the entries in the custom input. I felt as though there was no need to have this in Zustand given its isolated local functionality. Not sure if this is an issue but it could be adjusted if you really wanted it to be. 

Adjusting the Duration, Start Time, and End Time in the URL will change the respective calculations upon refresh. That said, the root Route (localhost:3000 vs localhost:3000/screen-a....) (i.e without having clicked a navigation link of Screen A, Screen B, Screen C or entering in a custom input) will run the calculations but not show the URL search parameters. Simply click either of the three screens or enter a custom input and the Duration, Start Time, and End Time parameters will show up in the URL. This is designed because of my understanding of the PDF requring the root Route to be Screen A.  

The Default Duration is set for 1 minute (60,000 milliseconds).

The CSS / Styling is kept to a minimum given that it is not the primary goal of this application.  


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.


