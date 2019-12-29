import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-related-components',
  templateUrl: './related-components.component.html',
  styleUrls: ['./related-components.component.scss']
})
export class RelatedComponentsComponent extends TitleClass implements OnInit {
  tsP1 = `
  @Component({ selector: 'test-component' })
  export class TestComponent {
      @Input() title : string;
  }
  `;
  htmlP1 = `
  <test-component [title]="'Tytuł'"></test-component>
  `;
  tsP2 = `
  @Component({ selector: 'test-component' })
  export class TestComponent {
      @Output() titleChanged = new EventEmitter<string>();
  }
  `;
  htmlP2 = `
  <test-component (titleChanged)="titleChanged($event)"></test-component>
  `;

  tsP3 = `this.titleChanged.emit(newTitle);`;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
