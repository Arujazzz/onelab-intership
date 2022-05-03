import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  show_home = true;
  show_about = true;
  show_contacts = true;

  constructor() { }

  ngOnInit(): void {
  }

  menu = 'contacts';

}
