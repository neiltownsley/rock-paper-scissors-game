# Rock Paper Scissors Game

[Click here to run the game](https://neiltownsley.github.io/rock-paper-scissors-game/)

## Game Information


This is a basic version of the game, the game is started by the user selecting a rock, paper or scissors via a button which triggers the computer user to select an option at random, and then the winning player result of the game is displayed.

## Problems
 * Choosing a random selection for the computer
 * Calculating the winner

## Solutions
 * I utilised `Math.floor(Math.random()` to get a random selection for the computer (see: random.rock.paper.scisscors.item.generator.ts)
 * I originally looked at calculating a winner by using a list of ternary's but after a little research I realised it could be resolved by using a basic modulus formula `((1) - (2) + 3) % 3 === 1` (see: winning.player.calculator.ts)

## Improvements
 * The game could benefit from a counter to keep track of the wins for each user and the display them as a scoreboard on the UI.
 * The game could also benefit from some visual improvements to the UI.

## Instructions

Run `git clone https://github.com/neiltownsley/rock-paper-scissors-game.git` to clone 

Run `npm i` to install the dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
