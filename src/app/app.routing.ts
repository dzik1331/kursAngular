import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
  {
    path: 'ngIf',
    loadChildren: './ngIf/ng-if.module#NgIfModule',
  },
  {
    path: 'ngFor',
    loadChildren: './ng-for/ng-for.module#NgForModule',
  },
  {
    path: 'ngSwitch',
    loadChildren: './ng-switch/ng-switch.module#NgSwitchModule',
  }
  // {
  //     path: 'dashboards',
  //     canLoad: [GuardService],
  //     data: {
  //         url: Url.DASHBOARDS,
  //         // Należy wpisać wszystkie wymagane symbole uprawnień, które musi spełnić użytkownik ażeby wejść w zasoby
  //         privileges: []
  //     },
  //     loadChildren: '../app/dashboards/dashboards.module#DashboardsModule'
  // },
  // {
  //     path: 'dashboards/template',
  //     canLoad: [GuardService],
  //     data: {
  //         url: Url.DASHBOARDS_TEMPLATE,
  //         // Należy wpisać wszystkie wymagane symbole uprawnień, które musi spełnić użytkownik ażeby wejść w zasoby
  //         privileges: []
  //     },
  //     loadChildren: '../app/dashboards-template/dashboards-template.module#DashboardsTemplateModule'
  // },
  // {
  //     path: '**',
  //     redirectTo: '',
  //     pathMatch: 'full'
  // }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false,
  enableTracing: false
});
