import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent extends TitleClass implements OnInit {
  showPanel: boolean = true;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
