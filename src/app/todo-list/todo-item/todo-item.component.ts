import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() name
  @Input() description
  @Input() index
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(){
    console.log(this.index)
  }

}
