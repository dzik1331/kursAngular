import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrls: ['./lazyloading.component.scss']
})
export class LazyloadingComponent extends TitleClass implements OnInit {
  tsP1 = `
  export const routes: Routes = [
    {
      path: 'interfaces',
      loadChildren: './interfaces/interfaces.module#InterfacesModule'
    },
    {
      path: 'classes',
      loadChildren: './classes/classes.module#ClassesModule'
    },
    {
      path: 'moduleComponent',
      loadChildren: './module-component/module-component.module#ModuleComponentModule'
    },
    {
      path: 'ngStyleNgClassModule',
      loadChildren: './ng-style-ng-class/ng-style-ng-class.module#NgStyleNgClassModule'
    },
    {
      path: 'ngIf',
      loadChildren: () => import('./ngIf/ng-if.module').then(m => m.NgIfModule),
    },
    {
      path: 'ngFor',
      loadChildren: () => import('./ng-for/ng-for.module').then(m => m.NgForModule),
    },
    {
      path: 'ngSwitch',
      loadChildren: () => import('./ng-switch/ng-switch.module').then(m => m.NgSwitchModule),
    },
    {
      path: 'componentComunication',
      loadChildren: './component-comunication/component-comunication.module#ComponentComunicationModule'
    },
    {
      path: 'createDirectiveAndPipes',
      loadChildren: './create-directives-and-pipes/create-directives-and-pipes.module#CreateDirectivesAndPipesModule'
    },
    {
      path: 'forms',
      loadChildren: './forms/forms.module#FormsModule'
    },
    {
      path: 'viewChild',
      loadChildren: './view-child/view-child.module#ViewChildModule'
    },
    {
      path: 'hlAndHb',
      loadChildren: './host-listener-binding/host-listener-binding.module#HostListenerBindingModule'
    },
    {
      path: 'navigation',
      loadChildren: './navigation/navigation.module#NavigationModule'
    },
    {
      path: '**',
      loadChildren: './interfaces/interfaces.module#InterfacesModule'
    }
  ];

  export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false
  });
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
