import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class SudokuSolver {
  solveSudoku(board: number[]): number[] {
    return processSolving(board, 0);
  }
}

function formatSolution(solution) {
  const returner = [];
  let row = [];
  for (let i = 0; i < solution.length; i++) {
    if (i % 9 === 0) {
      returner.push(row);
      row = [];
    }
    row.push(solution[i]);
  }
  returner.push(row);
  return returner.slice(1);
}

function processSolving(board: number[], ix: number) {
  const freeIx = getNextFreeField(board, ix);
  if (freeIx === -1) {
    return board;
  } else {
    const coord = toCoord(freeIx);
    const numbersToTry = getPossibleNumbersFromCoord(board, coord);
    for (let i = 0; i < numbersToTry.length; i++) {
      const numberToTry = numbersToTry[i];
      const solution = processSolving(cloneBoardAndSetNumber(board, freeIx, numberToTry), ix + 1);
      if (solution !== null) {
        return solution;
      }
    }
    return null;
  }
}

function cloneBoardAndSetNumber(board: number[], ix: number, number: number) {
  const clone = [...board];
  clone[ix] = number;
  return clone;
}

function translateCoordinates([row, column]) {
  return (row - 1) * 9 + column - 1;
}

function toCoord(ix: number): number[] {
  const row = Math.ceil((ix + 1) / 9);
  const modulo = (ix + 1) % 9;

  return [row, modulo ? modulo : 9];
}

function getRow(board, row) {
  const startIx = translateCoordinates([row, 1]);
  return board.slice(startIx, startIx + 9);
}

function getColumn(board, column) {
  return range()
    .map(row => [row, column])
    .map(translateCoordinates)
    .map(ix => board[ix]);
}

function getRectangular(board, [rectRow, rectColumn]: number[]) {
  const row = rectRow * 3 - 2;
  const column = rectColumn * 3 - 2;
  const returner = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const ix = translateCoordinates([row + x, column + y]);
      returner.push(board[ix]);
    }
  }

  return returner;
}

function getAssociatedRectangular([row, column]: number[]): number[] {
  return [Math.floor((row - 1) / 3) + 1, Math.floor((column - 1) / 3) + 1];
}

function range() {
  let returner = [];
  for (let i = 1; i <= 9; i++) {
    returner.push(i);
  }
  return returner;
}

function getPossibleNumbers(numbers) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => numbers.indexOf(number) === -1);
}

function getPossibleNumbersFromCoord(board, [row, column]: number[]) {
  const possibleNumbersPerDimensions = [
    getRow(board, row),
    getColumn(board, column),
    getRectangular(board, getAssociatedRectangular([row, column]))
  ].map(getPossibleNumbers);

  return _.intersection(...possibleNumbersPerDimensions);
}

function getNextFreeField(board, ix) {
  while (ix <= board.length) {
    if (board[ix] === 0) {
      return ix;
    }
    ix++;
  }

  return -1;
}
