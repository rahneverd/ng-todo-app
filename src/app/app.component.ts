import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-todo-app';
  tasks: Task[] =[]
  taskRecieved = "No"
  genTask(task: Task) {
    console.log(task)
    this.tasks.push(task)
  }
}
