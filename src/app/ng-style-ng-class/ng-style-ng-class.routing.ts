import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {NgClassComponent} from './ng-class/ng-class.component';
import {NgStyleComponent} from './ng-style/ng-style.component';

export const routes: Routes = [
    {
        path: 'ngClass',
        component: NgClassComponent,
        data: {
          title: 'NgClass'
        }
    },
  {
    path: 'ngStyle',
    component: NgStyleComponent,
    data: {
      title: 'ngStyle'
    }
  }
];

export const NgStyleNgClassRouting: ModuleWithProviders = RouterModule.forChild(routes);
