import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {NgForComponent} from './ng-for/ng-for.component';

export const routes: Routes = [
    {
        path: '',
        component: NgForComponent,
        data: {
          title: '*ngFor'
        }
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

export const NgForRouting: ModuleWithProviders = RouterModule.forChild(routes);
