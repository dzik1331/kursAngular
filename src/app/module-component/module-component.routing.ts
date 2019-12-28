import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ModulesComponent} from './modules/modules.component';
import {ComponentsComponent} from './components/components.component';

export const routes: Routes = [
    {
        path: 'modules',
        component: ModulesComponent,
        data: {
          title: 'Moduł'
        }
    },
  {
    path: 'components',
    component: ComponentsComponent,
    data: {
      title: 'Komponent'
    }
  }
];

export const ModuleComponentRouting: ModuleWithProviders = RouterModule.forChild(routes);
