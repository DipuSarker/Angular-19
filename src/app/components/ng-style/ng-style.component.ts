import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divColor: string = '';
  isChecked: boolean = false;

  myClss: any = {
    'background-color': 'yellow',
    'border': '1px solid black',
    'padding': '10px',
    'margin': '10px',
    'display': 'inline-block'	
  }

  div1ColorChange(color: string) {
    this.divColor = color;
  }
}
