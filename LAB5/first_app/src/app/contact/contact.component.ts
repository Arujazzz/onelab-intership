import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userName: string  = ''
  userEmail: string = '';
  userPhone: string = '';

  users: string[] = ['Ali', 'Rassul']

  my_Form: FormGroup;

  constructor(private dataservice: DataService){
    this.my_Form = new FormGroup ({
      userName: new FormControl(this.userName || '', []),
      userEmail: new FormControl(this.userEmail || '', [Validators.required, Validators.email]),
      userPhone: new FormControl(this.userPhone || '')
    })
  }

  ngOnInit(): void {
  }

  addItem(){
    this.dataservice.addData(this.my_Form.value);
    console.log(this.my_Form);
    localStorage.setItem('Contact', this.my_Form.value);
    //location.reload();
  }


}
