# Getting Started

This project is designed to run on localhost.

1. run "npm install"
2. open two terminals in the projects main directory
3. start the mock server by running "npm run server" (this starts up json-server, a mock server that returns json data from an API endpoint)
4. Second start the application by running "npm start" or "npm run start" (This is using creat-react-apps native script)

If there is an issue, try deleting your package-lock.json and node_modules, running "npm install" again, and starting the two scripts in order.
Note that the mock server runs on port 3001 and the app runs on port 3000

Testing:

5. The mock server and app do not need to be running to run the tests, it is however fine if they are. Simply run "npm test" in a terminal and then press "a" to run full test suit.

SideNotes:

Structure:
App has two components to it > Nav and Deck
Nav is at the top followed by Deck
Deck then maps the carrier data to many Cards
A Card is composed of several smaller components. See CardComponents folder.

CSS naming follows: BEM naming conventions. See http://getbem.com/naming/ for more info.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run server`

This starts up the mock server using json-server. It is pulling data from "db.json" and sends appropriate data depending on the endpoint reached.
For this application there is only one endpoint. Note that this process runs on port 3001, is needed for the application to function properly, and should be started before running "npm start".
