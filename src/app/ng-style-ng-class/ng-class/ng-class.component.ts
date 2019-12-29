import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent extends TitleClass implements OnInit {
  isBold: boolean = false;
  htmlP1 = `
    <div [ngClass]="{'bold-font': isBold}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  `;
  htmlP1a = `
    <div [class.bold-font]="isBold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  `;

  cssP1 = `
    .bold-font {
      font-weight: bold;
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
