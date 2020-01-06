import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PromiseComponent} from './promise/promise.component';
import {ObservableComponent} from './observable/observable.component';
import {RxjsOperatorsComponent} from './rxjs-operators/rxjs-operators.component';
import {SubjectsComponent} from './subjects/subjects.component';

export const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent,
    data: {
      title: 'Promise'
    }
  },
  {
    path: 'observable',
    component: ObservableComponent,
    data: {
      title: 'Observable'
    }
  },
  {
    path: 'rxjs',
    component: RxjsOperatorsComponent,
    data: {
      title: 'Operatory RxJS'
    }
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    data: {
      title: 'Subject/BehaviorSubject'
    }
  }
];

export const AsynchronousRouting: ModuleWithProviders = RouterModule.forChild(routes);
