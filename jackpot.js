/**
 *   @author Withey, Anna (witheya@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Slot Machine
 */

"use strict";
const PROMPT = require('readline-sync');

let funds, winnings, totalBets, totalWinnings;
let cycleCount;
let images = ['Cherries', 'Oranges', 'Plums', 'Bells', 'Melons', 'Bars'];

function main() {
    winnings = 0;
    totalBets = 0;
    totalWinnings = 0;
    cycleCount = 1;
    welcomePlayer();
}

main();

function welcomePlayer() {
    let answer;
    let minBet = 0.05;

    if (cycleCount === 1) {
        console.log('\nWelcome to Jackpot!!!');
    }
    funds = Number(PROMPT.question('\nPlease enter the amount of money you would like to put into the slot machine: $')).toFixed(2);
    while (isNaN(parseFloat(funds)) || funds < minBet) {
        funds = Number(PROMPT.question('\nPlease enter a 5 cents or more: $')).toFixed(2);
    }
    console.log(`Your funds are now set to $${funds}.`);
    if (!answer || !/^[yYnN]$/.test(answer)) {
        answer = PROMPT.question('\nWould you like to begin? (Y/N): ').toLowerCase();
        while (!/^[yYnN]$/.test(answer)) {
            answer = PROMPT.question('\nPlease enter only Y/N: ').toLowerCase();
        }
    }
    if (answer === 'y') {
        randomImages();
    } else {
        endGame();
    }

}

function randomImages() {
    let imageTrio = [];
    let numImgSlots = 3;

    for (let i = 0; i !== numImgSlots; i++) {
        let randImg = Math.floor(Math.random() * images.length);
            imageTrio.push(images[randImg]);
    }
    for (let i = 0; i < imageTrio.length; i++) {
        console.log('       ' + imageTrio[i]);
    }
    for (let i = 0; i < imageTrio.length; i++) {
        if (imageTrio[0] === imageTrio[1] && imageTrio[1] === imageTrio[2]) {
            winnings = funds * 3;
            console.log('\nTwo matches, you have won $' + (funds * 3) + ' 3x\'s the amount entered!!!');
            sequencer();
            break;
        } else if (imageTrio[0] === imageTrio[1]) {
            winnings = funds * 2;
            console.log('\nTwo matches, you have won $' + (funds * 2) + ' 2x\'s the amount entered!!!');
            sequencer();
            break;
        } else if (imageTrio[0] === imageTrio[2]) {
            winnings = funds * 2;
            console.log('\nTwo matches, you have won $' + (funds * 2) + ' 2x\'s the amount entered!!!');
            sequencer();
            break;
        } else if (imageTrio[1] === imageTrio[2]) {
            winnings = funds * 2;
            console.log('\nTwo matches, you have won $' + (funds * 2) + ' 2x\'s the amount entered!!!');
            sequencer();
            break;
        } else {
            console.log('\nNo matches, you have won $0!!!');
            sequencer();
            break;
        }
    }
}

function sequencer() {
    let answer;

    totalBets = (parseFloat(totalBets) + parseFloat(funds)).toFixed(2);
    totalWinnings = (parseFloat(totalWinnings) + parseFloat(winnings)).toFixed(2);
    funds = 0;
    winnings = 0;
    if (!answer || !/^[yYnN]$/.test(answer)) {
        answer = PROMPT.question('\nWould you like to play again? (Y/N): ').toLowerCase();
        while (!/^[yYnN]$/.test(answer)) {
            answer = PROMPT.question('\nPlease enter only Y/N: ').toLowerCase();
        }
    }
    if (answer === 'y') {
        cycleCount ++;
        welcomePlayer();
    } else {
        endGame();
    }
}

function endGame() {
    console.log('\n             GAME ENDED');
        console.log(`           ${cycleCount} GAMES PLAYED`);
    console.log(`Amount entered: $${totalBets}   Amount won: $${totalWinnings}`);
}
function endGame() {
    console.log('\n             GAME ENDED');
        console.log(`           ${cycleCount} GAMES PLAYED`);
    console.log(`Amount entered: $${totalBets}   Amount won: $${totalWinnings}`);
}
