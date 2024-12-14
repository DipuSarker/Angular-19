import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList:string[] = ['Pune', 'Mumbai', 'Delhi', 'Chennai', 'Bangalore'];

  employeeList: any[] = [
    {id: 1, name: 'John', city: 'Pune', phone:'12154545'},
    {id: 2, name: 'Jane', city: 'Mumbai', phone:'12345678'},
    {id: 3, name: 'Mark', city: 'Delhi', phone:'98765432'},
    {id: 4, name: 'Alice', city: 'Chennai', phone:'54321098'}
  ]
}
