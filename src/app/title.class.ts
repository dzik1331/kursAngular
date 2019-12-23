import {PageService} from './page/page.service';
import {ActivatedRoute} from '@angular/router';
import {OnInit} from '@angular/core';

export class TitleClass implements OnInit {
  constructor(private  pageService: PageService, private  route: ActivatedRoute) {
  }

  ngOnInit() {
    console.debug('r', this.route.snapshot.data['title']);
    this.pageService.setTitle(this.route.snapshot.data['title']);
  }
}
