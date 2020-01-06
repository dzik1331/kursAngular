import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {fromEvent, interval, Subject} from 'rxjs';
import {MatButton} from '@angular/material';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent extends TitleClass implements OnInit {
  sub: Subject<any> = new Subject<any>();
  @ViewChild('switchMapBtn', {static: true}) switchMapBtn: MatButton;
  @ViewChild('mapBtn', {static: true}) mapBtn: MatButton;
  @ViewChild('filterBtn', {static: true}) filterBtn: MatButton;
  @ViewChild('tapBtn', {static: true}) tapBtn: MatButton;
  switchMapValue;
  mapValue;
  filterValue;
  tapValue;

  tsP1 = `
    fromEvent(this.switchMapBtn._elementRef.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000))
      )
      .subscribe((val) => this.switchMapValue = val);
  `;
  tsP2 = `
    fromEvent(this.mapBtn._elementRef.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000).pipe(takeUntil(this.sub))),
        map((value) => {
          return value / 2;
        }))
      .subscribe((val) => this.mapValue = val);
  `;
  tsP3 = `
    fromEvent(this.mapBtn._elementRef.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000).pipe(takeUntil(this.sub))),
        filter((value) => {
          return value % 2 === 0;
        }))
      .subscribe((val) => this.filterValue = val);
  `;
  tsP4 = `
    fromEvent(this.tapBtn._elementRef.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.interval = 5000;
        }),
        switchMap(() => interval(this.interval).pipe(takeUntil(this.sub))))
      .subscribe((val) => this.tapValue = val);
  `;
  interval;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();

    fromEvent(this.switchMapBtn._elementRef.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000).pipe(takeUntil(this.sub)))
      )
      .subscribe((val) => this.switchMapValue = val);

    fromEvent(this.mapBtn._elementRef.nativeElement, 'click')
      .pipe(
        switchMap(() => interval(1000).pipe(takeUntil(this.sub))),
        map((value) => {
          return value / 2;
        }))
      .subscribe((val) => this.mapValue = val);

    fromEvent(this.tapBtn._elementRef.nativeElement, 'click')
      .pipe(
        tap(() => {
          this.interval = 5000;
        }),
        switchMap(() => interval(this.interval).pipe(takeUntil(this.sub))))
      .subscribe((val) => this.tapValue = val);
  }

  unsubscribeAll() {
    this.sub.next();
    this.switchMapValue = null;
    this.mapValue = null;
    this.filterValue = null;
    this.tapValue = null;
  }

}
