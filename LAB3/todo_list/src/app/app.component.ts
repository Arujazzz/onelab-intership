import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_list';

  todolist = [
    {
      done: false,
      name: 'Купить молоко'
    },

  ];

  AddTask(value: string){
    if (value) {
      this.todolist.push({
        done: false,
        name: value
      });
    }
  }
}
