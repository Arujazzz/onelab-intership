import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  name! : string 
  contacts = [
    {
      name: 'person1',
      number: 123
    },

    {
      name: 'person2',
      number: 456
    },
    
    {
      name: 'person3',
      number: 789
    },
    
    {
      name: 'person4',
      number: 100
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  Search(){
    this.contacts = this.contacts.filter(res=>{
        return res.name.match(this.name);
      })
    

  }

}
