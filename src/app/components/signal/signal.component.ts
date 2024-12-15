import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal<string>('Dipu');
  lastName = signal<string>('Mondal');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal, preVal) => {
      const fullName = newVal +' '+ this.lastName();
      return fullName;
    }
  })

  user = signal({id:111, name:'Dipu'})

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id
  })

  changeId(){
    this.user.set({id: 222, name:'Himanshu'})
  }

changeName(){
  this.firstName.set('Him');
}

}
