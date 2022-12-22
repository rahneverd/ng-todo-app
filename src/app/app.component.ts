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
    task.name === '' && task.description === '' ? window.alert("Task name or description cannot be empty") : this.tasks.push(task);
    
  }
  deleteTask(index){
    this.tasks.splice(index, 1)
  }
}
