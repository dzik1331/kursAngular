import {Component, OnInit} from '@angular/core';
import {TitleClass} from '../../title.class';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent extends TitleClass implements OnInit {
  tsP1 = `
    @Component({
      selector: 'app-moj-komponent', // nazwa komponentu używana w widoku
      templateUrl: './list.component.html', // ścieżka do widoku
      template: '<div>To jest szablon HMTL</div>', // szablon komponentu w postaci ciągu znaków
      styleUrls: ['./list.component.css'] // ścieżka do pliku ze stylami
      styles: ['li {font-size: 12px;} ul {background: red;}']
    })
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
