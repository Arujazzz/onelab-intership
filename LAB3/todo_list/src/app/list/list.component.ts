import { Component, OnInit, Input } from '@angular/core';
import { todolist } from '../todolist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: todolist[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(index: number) {
    this.list.splice(index, 1);
  }
}
