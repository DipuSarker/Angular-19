import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  divVisible = true;
  isChecked = false;
  dayName:string = '';

  cityList: string[] = [
    'Pune',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Bangalore'
  ]

  empArray:any[] = [
    {id: 1, name: 'John', city: 'Pune', phone: '1234567890'},
    {id: 2, name: 'Jane', city: 'Mumbai', phone: '9876543210'},
    {id: 3, name: 'Mark', city: 'Delhi', phone: '1234567890'},
    {id: 4, name: 'Alice', city: 'Chennai', phone: '9876543210'}
  ]

  showDiv(isShow: boolean) {
    this.divVisible = isShow;
  }
}
