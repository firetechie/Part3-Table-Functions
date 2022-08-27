## Steps to run the project :-
Host URL : https://table-functions.netlify.app

1) Install node packages/dependencies <br>
    npm install

2) Start/Run the application <br>
    ng serve

3) Render the below URL in browser <br>
    http://localhost:4200 
    

Fetch the data from cookies.json find here => (https://my-json-server.typicode.com/firetechie/SampleJSONPlaceholder/cookies) <br><br>

<img src="https://github.com/firetechie/Part3-Table-Functions/blob/master/Part3-Table-Functions.png" />
---------------------------------------------------------------------------------------------------------------

## Another way to run the project :-

1) Go to src/environments, inside .ts file change to apiURL: 'http://localhost:3000/cookies'

1) Install node packages/dependencies <br>
    npm install

2) Run the JSON server to fetch the data (Run below CMD in one terminal) <br>
    json-server --watch cookies.json

3) Start/Run the application (Run below CMD in another terminal) <br>
    ng serve

4) Render the below URL in browser <br>
    http://localhost:4200


---------------------------------------------------------------------------------------------------------------


# Part 3 - Table Functions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
