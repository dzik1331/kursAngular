import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RoutingComponent} from './routing/routing.component';
import {LazyloadingComponent} from './lazyloading/lazyloading.component';
import {AuthGuardComponent} from './auth-guard/auth-guard.component';

export const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    data: {
      title: 'Routing'
    }
  },
  {
    path: 'lazyloading',
    component: LazyloadingComponent,
    data: {
      title: 'LazyLoading'
    }
  },
  {
    path: 'authGuard',
    component: AuthGuardComponent,
    data: {
      title: 'Ograniczenie dostępu do ściezki'
    }
  }
];

export const NavigationRouting: ModuleWithProviders = RouterModule.forChild(routes);
