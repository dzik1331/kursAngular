import {Component, OnInit} from '@angular/core';
import {TitleClass} from '../../title.class';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent extends TitleClass implements OnInit {
  tsP1 = `
    @NgModule({
      declarations: [], // Lista komponentów należących do modułu
      imports: [], // Lista importowanych modułów
      providers: [], // Lista serwisów
      exports: [], // Lista komponentów które będą używane w innych modułach
      entryComponents: [] // Lista komponentów które są tworzone dynamicznie
    })
    export class TestModule {
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
