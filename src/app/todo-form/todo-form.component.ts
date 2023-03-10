import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  taskName = ''
  taskDescription = ''
  @Output() genTask = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  pushTask(){
    this.genTask.emit({name: this.taskName, description: this.taskDescription})
  }

}
