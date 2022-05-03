import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {todolist} from "../todolist";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: todolist = {name: '', done: false};
  @Output() deleteHandle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  is_done = false;
}
