import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent extends TitleClass implements OnInit {
  color: string = '#111';
  htmlP1 = `
    <div [ngStyle]="{'color': color}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  `;

  htmlP1a = `
    <div [style.color]="color">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  `;
  htmlP1b = `
    <div [style.font-size]="'20px'">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div [style.font-size.px]="20">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
