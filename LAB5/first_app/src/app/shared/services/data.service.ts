import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}


  getData(): any{
    return localStorage.getItem('Contact');
  }

  addData(data: any){
    localStorage.setItem('Contact', data);
  }

}
