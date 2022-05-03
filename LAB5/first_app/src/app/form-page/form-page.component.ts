import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  username = '';
  usersForm : FormGroup;


  constructor(){
    this.usersForm = new FormGroup({
        "userName": new FormControl("", []),
        "userEmail": new FormControl("", [
                            Validators.required,
                            Validators.email
                          ]),
        "userPhone": new FormControl()
      });
  }

  ngOnInit(): void {}

  submit(){
    console.log(this.usersForm);
  }

}
