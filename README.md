# Test requirements

We want you to create a simple CRUD application that will consume an Api Stub (Instructions Below).
 
- Please spend no more than 2 hours on the task (from first to last commit). We don’t mind if you don’t finish the app, We’re more focussed on code quality
- We’re looking for small and clear commits
- Unit testing IS A MUST

As a general consideration please follow SPA best practices.

Good luck!


## Build System

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

`Gulp` is the orchestrator:
* Starting and calling Webpack
* Starting a development server (yes, Webpack can do this too)
* Generating boilerplate for the Angular app

## Getting Started

### Dependencies
Tools needed to run this app:
* `node` and `npm` (We recommend node v4+)
Once you have these, install the following as globals:  
`npm install -g gulp karma karma-cli webpack json-server`

### Installing
* `npm install -g gulp karma karma-cli webpack json-server` install global cli dependencies
* `npm install` to install dependencies

### Starting the App
* `gulp serve` to start the app.
* Navigate to `http://localhost:8080/`

## Testing Setup
All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our client files. This is our testing stack:
* Karma
* Webpack + Babel
* Mocha
* Chai

To run tests, type `npm test` or `karma start` in the terminal.

## Stub API
We have created a stub api for you to perform REST api calls.

### Getting started
- Start API stub `npm run stubapi`
- Navigate to `http://localhost:3000/`

### API endpoints
- `/api/accounts/create`
- `/api/accounts/all`
- `/api/accounts/delete/:id`
- `/api/accounts/update/:id`
