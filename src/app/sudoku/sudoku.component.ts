import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SudokuSolver } from '../sudoku-solver.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss']
})
export class SudokuComponent implements OnInit {
  public formGroup: FormGroup;
  public fieldIterator: number[][] = [];

  constructor(private fb: FormBuilder, private sudokuSolver: SudokuSolver) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      fields: this.fb.array(new Array(81).fill('').map(() => this.fb.control('')))
    });

    let counter = 0;
    for (let i = 0; i < 9; i++) {
      const subIterator = [];
      for (let j = 0; j < 9; j++) {
        subIterator.push(counter++);
      }
      this.fieldIterator.push(subIterator);
    }
  }

  get fields() {
    return this.formGroup.get('fields') as FormArray;
  }

  solve() {
    const board = this.formGroup.value.fields.map(n => +n);
    const solution = this.sudokuSolver.solveSudoku(board);
    this.formGroup.patchValue({ fields: solution });
  }

  reset() {
    this.formGroup.reset();
  }
}
