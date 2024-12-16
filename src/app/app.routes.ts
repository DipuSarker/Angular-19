import { Routes } from '@angular/router';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIFComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { SignalComponent } from './components/signal/signal.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent
    // redirectTo: 'admin',
    // pathMatch: 'full',
  },
  {
    path: 'control-statement',
    component: ControlStatementComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'ng-class',
    component: NgClassComponent,
  },
  {
    path: 'ng-for',
    component: NgForComponent,
  },
  {
    path: 'ng-if',
    component: NgIFComponent,
  },
  {
    path: 'ng-style',
    component: NgStyleComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
];
