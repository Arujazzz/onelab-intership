import { Component, OnInit } from '@angular/core';
import { users } from '../users';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  currentDate = 'Wed Apr 13 2022 20:26:13 GMT+0600';

  users = users;

  constructor() { }

  ngOnInit(): void {
  }


}
