import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {Observable, throwError} from 'rxjs';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent extends TitleClass implements OnInit {
  tsP1 = `
  //ts
  //Funkcja pzyjmuje jako parametr liczbę i co sekundę zwraca jej pomniejszoną wartość o jeden. Gdy osiągnie 0  strumień jest zamykany.
  // W tym przypadku nie jest wymagane odsubskrybowanie się ze strumienia.
    countDown(from: number) {
      return new Observable((observer) => {
        const array = Array.from({length: from}, (v, k) => k).reverse();
        setInterval(() => {
          observer.next(from--);
          if (from <= 0) {
            observer.complete();
          }
        }, 1000);
      });
    }

    // Wywołanie funkcji
    ngOnInit() {
      this.countDown(5).subscribe((result) => { //calback wywoływany w momencie poprawnie zwróconej wartości
          console.debug('Num:', result);
        }, (e) => { // callback wywoływany w momencie wystąpienia błędu
          console.debug('err', e);
        });
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  subCountDown() {
    this.countDown(5).subscribe((result) => {
      console.log('Num:', result);
    }, (e) => {
      console.log('err', e);
    });
  }

  countDown(from: number) {
    return new Observable((observer) => {
      const array = Array.from({length: from}, (v, k) => k).reverse();
      setInterval(() => {
        observer.next(from--);
        if (from <= 0) {
          observer.complete();
        }
      }, 1000);
    });
  }
}
