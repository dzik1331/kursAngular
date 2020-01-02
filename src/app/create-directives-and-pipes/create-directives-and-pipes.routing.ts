import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CreateDirectivesComponent} from './create-directives/create-directives.component';

export const routes: Routes = [
  {
    path: 'createDirectives',
    component: CreateDirectivesComponent,
    data: {
      title: 'Dyrektywy'
    }
  }
];

export const CreateDirectivesAndPipesRouting: ModuleWithProviders = RouterModule.forChild(routes);
