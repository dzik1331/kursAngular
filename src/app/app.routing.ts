import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: 'interfaces',
    loadChildren: './interfaces/interfaces.module#InterfacesModule'
  },
  {
    path: 'classes',
    loadChildren: './classes/classes.module#ClassesModule'
  },
  {
    path: 'moduleComponent',
    loadChildren: './module-component/module-component.module#ModuleComponentModule'
  },
  {
    path: 'ngStyleNgClassModule',
    loadChildren: './ng-style-ng-class/ng-style-ng-class.module#NgStyleNgClassModule'
  },
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
  },
  {
    path: 'componentComunication',
    loadChildren: './component-comunication/component-comunication.module#ComponentComunicationModule'
  },
  {
    path: 'createDirectiveAndPipes',
    loadChildren: './create-directives-and-pipes/create-directives-and-pipes.module#CreateDirectivesAndPipesModule'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false
});
