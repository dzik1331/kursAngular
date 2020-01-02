import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from './page.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {
  title: string = 'Witaj :)';
  unsubscribe: Subject<any> = new Subject<any>();

  constructor(private pageService: PageService) {
  }

  ngOnInit() {
    this.pageService.listen().pipe(takeUntil(this.unsubscribe)).subscribe((title) => {
      this.title = title;
    }, (error) => {
      console.error(error);
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
