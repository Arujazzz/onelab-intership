import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {todolist} from "../todolist";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  value = "";
  @Output() addHandle = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
