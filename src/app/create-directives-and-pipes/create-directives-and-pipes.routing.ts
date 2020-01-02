import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CreateDirectivesComponent} from './create-directives/create-directives.component';
import {CreatePipesComponent} from './create-pipes/create-pipes.component';

export const routes: Routes = [
  {
    path: 'createDirectives',
    component: CreateDirectivesComponent,
    data: {
      title: 'Dyrektywy'
    }
  },
  {
    path: 'createPipes',
    component: CreatePipesComponent,
    data: {
      title: 'Pipes'
    }
  }
];

export const CreateDirectivesAndPipesRouting: ModuleWithProviders = RouterModule.forChild(routes);
