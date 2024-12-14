import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = 'John';
  rollNo: number = 1;
  isActive: boolean = true;
  createDate: Date = new Date();
  placeHolderName: string = 'Enter your name';
  divColor: string = 'bg-primary';
  cityName: string =  '';

  constructor() {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);

    //this.showMessage()

  }

  showMessage() {
    alert('Welcome to angular app')
  }

  cityChoice(){
    console.log('City choice is called');

  }
}
