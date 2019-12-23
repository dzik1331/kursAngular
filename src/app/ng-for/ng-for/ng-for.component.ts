import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../page/page.service';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent extends TitleClass implements OnInit {

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
