import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-related-components',
  templateUrl: './description-related-components.component.html',
  styleUrls: ['./description-related-components.component.scss']
})
export class DescriptionRelatedComponentsComponent implements OnInit {
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

  constructor() {
  }

  ngOnInit() {
  }

}
