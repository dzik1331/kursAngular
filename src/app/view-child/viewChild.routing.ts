import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ViewChildComponent} from './view-child/view-child.component';

export const routes: Routes = [
  {
    path: '',
    component: ViewChildComponent,
    data: {
      title: 'ViewChild/ViewChildren'
    }
  }
];

export const ViewChildRouting: ModuleWithProviders = RouterModule.forChild(routes);
