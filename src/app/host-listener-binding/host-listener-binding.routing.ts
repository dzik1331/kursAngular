import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HostlistenerComponent} from './hostlistener/hostlistener.component';
import {HostbindingComponent} from './hostbinding/hostbinding.component';

export const routes: Routes = [
  {
    path: 'hostlistener',
    component: HostlistenerComponent,
    data: {
      title: '@HostListener'
    }
  },
  {
    path: 'hostbinding',
    component: HostbindingComponent,
    data: {
      title: '@HostBinding'
    }
  }
];

export const HostListenerBindingRouting: ModuleWithProviders = RouterModule.forChild(routes);
