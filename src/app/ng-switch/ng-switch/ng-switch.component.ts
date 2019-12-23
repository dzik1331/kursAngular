import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../page/page.service';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent extends TitleClass implements OnInit {

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
