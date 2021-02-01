# Getting Started

Note: This project is intended to be run locally in development mode so build scripts are removed.

From the root directory:

1. Run "npm install"
2. Run "npm start"
   - This starts up json-server, a mock server that returns json data from an API endpoint as well as starting the application in development mode using creat-react-apps native script
   - These are run together using the concurrently library. Alternatively "npm run server" and "npm run app" can be run in their own terminals.

If there is an issue, try deleting your package-lock.json and node_modules, and repeat steps 1-2 again.
Note that the mock server runs on port 3001 and the app runs on port 3000.

## Testing:

1. Run "npm test"
2. Press "a" to run tests
   - The mock server and app do not need to be running to run the tests, it is however fine if they are.

## Structure:

App has two components to it > Nav and Deck.

Nav is at the top of the DOM followed by Deck.

Deck then maps the carrier data to many Cards.

A Card is composed of several smaller components. See CardComponents folder.

Utility functions are abstracted out into a utilities folder.

Main SCSS file is used to compose the styling and reset files.

_CSS naming follows: BEM naming conventions. See http://getbem.com/naming/ for more info._

## Available Scripts

In the project directory, you can run:

### `npm start`

This will run "npm run server" and "npm run app" in parallel using a library called concurrently.

### `npm run server`

This starts up the mock server using json-server. It is pulling data from "db.json" and sends appropriate data depending on the endpoint reached.
For this application there is only one endpoint. Note that this process runs on port 3001, is needed for the application to function properly, and should be started before running "npm start".

### `npm run app`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
