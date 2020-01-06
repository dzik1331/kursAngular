import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent extends TitleClass implements OnInit {
  tsP1 = `
  //ts
  export const routes: Routes = [
    {
      path: 'interfaces', // nazwa ścieżki
      component: InterfaceComponent, // komponent który zostanie wyświetlony po wejściu pod podaną ścieżkę
      children: [ // ścieżki dzieci
        {
          path: ex/:id, //ścieżka z parametrem o nazwie id
          component: ExampleComponent
        }
      ]
    },
    {
      path: '**', // przekierowanie do komponentu w momencie gdy użyto nieprawidłowej ścieżki
      component: NoPageComponent
    }
  ];

  export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true, // dodaje lub usuwa hasha z ścieżki
    enableTracing: false // włącza lub wyłącza logi w consoli dotyczace routingu
  });

  // tak utworzony routing należy zaimportować w module
  @NgModule({
    declarations: [
      AppComponent,
      PageComponent
    ],
    imports: [
      AppRouting,
     ...
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
  `;
  htmlP1 = `
   //html
   <router-outlet></router-outlet>


  // odnośniki do danej ścieżki z poziomu htmla
  <a [routerLink]="'/interfaces'">Przykład1</a>
  <a [routerLink]="['/interfaces/ex', 100]">Przykład2</a>
`;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
