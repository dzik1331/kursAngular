import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FormControlsComponent} from './form-controls/form-controls.component';
import {FormGroupsComponent} from './form-groups/form-groups.component';

export const routes: Routes = [
  {
    path: 'formControls',
    component: FormControlsComponent,
    data: {
      title: 'Komunikacja z pojedynczą kontrolką'
    }
  },
  {
    path: 'formGroups',
    component: FormGroupsComponent,
    data: {
      title: 'Tworzenie formularza za pomocą FormGroup'
    }
  }
];

export const FormsRouting: ModuleWithProviders = RouterModule.forChild(routes);
