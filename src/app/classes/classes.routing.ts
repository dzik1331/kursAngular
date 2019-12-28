import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ClassesComponent} from './classes/classes.component';

export const routes: Routes = [
    {
        path: '',
        component: ClassesComponent,
        data: {
          title: 'Klasa'
        }
    }
];

export const ClassesRouting: ModuleWithProviders = RouterModule.forChild(routes);
