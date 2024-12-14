import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIFComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';

@Component({
  selector: 'app-root',
  imports: [NgStyleComponent, RouterOutlet, DataBindingComponent, NgClassComponent, NgForComponent, NgIFComponent, AdminComponent, ControlStatementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
