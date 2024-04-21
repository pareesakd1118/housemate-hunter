# Housemate Hunter 🏠

## Abstract
Live in San Fransicso or Denver and looking for a roommate? You're in luck! Use [Housemate Hunter](https://housemate-hunter.vercel.app/) to search for roommates in your city and filter roommates based on preferences. Want to find a roommate with or without a pet, with a similar budget, and of a certain gender/age? You have come to the right place! Our application allows you to filter potential roommates by any of the aforementioned parameters and more, as well as see pictures and read bios/important non-negotiables for each specific person to find the perfect match. Happy housemate hunting! 

## Contributors 
- [Theo McCray](https://github.com/Virulencies)
- [Pareesa Kamgar-Dayhoff](https://github.com/pareesakd1118)
- [Erin Kelley](https://github.com/kelleyej)

## Preview of App
https://github.com/pareesakd1118/housemate-hunter/assets/150022029/5b740a40-4aeb-465c-b85e-121e54492090

## Installation Instructions
- **Install frontend**
  - Visit Housemate Hunter [here](https://housemate-hunter.vercel.app/) *or*
1. `Fork and clone this repo: https://github.com/pareesakd1118/housemate-hunter`
2. `cd into housemate-hunter in your terminal`
3. `Run 'npm install' in your terminal to install all dependencies`
4. `Run 'npm start' to start up the frontend.`

- **Install backend/database**
1. `git clone git@github.com:Virulencies/housemate-hunter-api.git`
2. `cd into housemate-hunter-api in your terminal`
3. `Run 'npm install' in your terminal to install all dependencies`
4. `Run 'node server.js' to start up the backend`
5. `Return to the frontend tab and navigate through the app!`
- **Run End to End testing using Cypress**
1. `npm i -D cypress`
2. Ensure package.json includes the following:
`{ "scripts": {"cypress": "cypress open"} }`
3. `npm run cypress`

## Technologies Used
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat) ![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat) ![Cypress Badge](https://img.shields.io/badge/Cypress-69D3A7?logo=cypress&logoColor=fff&style=flat) ![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat) ![Knex.js Badge](https://img.shields.io/badge/Knex.js-D26B38?logo=knexdotjs&logoColor=fff&style=flat) ![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat) ![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)

## Context 
- **Goals:**
  - Research and implement a "stretch" technology into the application.
  - Continued work with implementing router with a React application.
  - Continued work with E2E testing with Cypress. 
- **Wins:**
  - Used Express, Knex, and PostgreSQL to build a server/database for the first time!
  - Implemented loading indicators when changing URL's and fetching data.
  - Implementing an apply filter function to filter roommates based on a number of preferences, including if the user smokes, has a pet, and budget. 
- **Challenges:**
  - Deployment of the database and server. 

## Future Improvements 
- Add a favorites feature to be able to track roommate(s) the user is interested in living with.
- Add the ability to message a roommate.
- Add more cities to explore roommates in! 
