import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: 'ngIf',
    loadChildren: () => import('./ngIf/ng-if.module').then(m => m.NgIfModule),
  },
  {
    path: 'ngFor',
    loadChildren: () => import('./ng-for/ng-for.module').then(m => m.NgForModule),
  },
  {
    path: 'ngSwitch',
    loadChildren: () => import('./ng-switch/ng-switch.module').then(m => m.NgSwitchModule),
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false
});
