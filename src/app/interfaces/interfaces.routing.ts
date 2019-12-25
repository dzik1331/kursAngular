import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {InterfaceComponent} from './interface/interface.component';

export const routes: Routes = [
    {
        path: '',
        component: InterfaceComponent,
        data: {
          title: 'Interfejs'
        }
    }
];

export const InterfacesRouting: ModuleWithProviders = RouterModule.forChild(routes);
