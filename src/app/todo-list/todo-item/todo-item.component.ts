import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() name
  @Input() description
  @Input() index
  @Output() deleteTask = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  

}
