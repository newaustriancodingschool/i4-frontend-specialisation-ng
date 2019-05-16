import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = [{ name: 'Eat', description: '', type: 'event', finished: true }];
  constructor() {}

  ngOnInit() {}

  addTaskToList(task: Task) {
    this.tasks.push(task);
  }
}
