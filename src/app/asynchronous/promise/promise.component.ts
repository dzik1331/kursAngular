import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent extends TitleClass implements OnInit {

  tsP1 = `
  // Przykład funkcji zwracajacej Promise
  functionPromise(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve('Ala ma kota'); // Oczekiwana wartość
      reject('Kot się zgubił'); // Nieoczekiwana wartość, błąd itd
    });
  }
  `;

  tsP1a = `
  // Przykład wywołania funkcji zwracającej Promise
  this.functionPromise().then((result) => {
    console.debug('Oczekiwana wartość', result);
  }).catch((error) => {
    console.debug('Nieoczekiwana wartość', error);
  }).finally(() => {
    console.debug('Kod który wykona się bezwzględu na wynik Promisa');
  });
  `;

  tsP1b = `
  // Promisy można łączyć
  this.functionPromise().then((result) => {
    console.debug('Oczekiwana wartość', result);
    return this.functionPromise2();
  }).catch((error) => {
    console.debug('Nieoczekiwana wartość', error);
  }).finally(() => {
    console.debug('Kod który wykona się bezwzględu na wynik Promisa');
  }).then((result) => {
    console.debug('Oczekiwana wartość 2', result);
  }).catch((error) => {
    console.debug('Nieoczekiwana wartość 2', error);
  }).finally(() => {
    console.debug('Kod który wykona się bezwzględu na wynik Promisa 2');
  });
  `;

  exampleCode = `
    synchro() {
      console.log(this.getRandomNumber());
      this.sayHello();
    }

    asynchro() {
      this.getRandomNumberAsync().then((r) => {
        console.log(r);
      }).catch((e) => {
        console.log('error', e);
      });
      this.sayHello();
    }

    getRandomNumberAsync(): Promise<string> {
      return new Promise((resolve, reject) => {
        const l = (parseInt((Math.random() * 100).toFixed(2), 10));
        const isEven: boolean = l % 2 === 0;
        if (isEven) {
          resolve('Parzysta liczba!');
        } else {
          reject('Nieparzysta liczba :(');
        }
      });
    }

    getRandomNumber() {
      const l = (parseInt((Math.random() * 100).toFixed(2), 10));
      const isEven: boolean = l % 2 === 0;
      if (isEven) {
        return 'Parzysta liczba!';
      } else {
        return 'Nieparzysta liczba :(';
      }
    }

    sayHello() {
      console.log('Hello');
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  synchro() {
    console.log(this.getRandomNumber());
    this.sayHello();
  }

  asynchro() {
    this.getRandomNumberAsync().then((r) => {
      console.log(r);
    }).catch((e) => {
      console.log('error', e);
    });
    this.sayHello();
  }

  getRandomNumberAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
      const l = (parseInt((Math.random() * 100).toFixed(2), 10));
      const isEven: boolean = l % 2 === 0;
      if (isEven) {
        resolve('Parzysta liczba!');
      } else {
        reject('Nieparzysta liczba :(');
      }
    });
  }

  getRandomNumber() {
    const l = (parseInt((Math.random() * 100).toFixed(2), 10));
    const isEven: boolean = l % 2 === 0;
    if (isEven) {
      return 'Parzysta liczba!';
    } else {
      return 'Nieparzysta liczba :(';
    }
  }

  sayHello() {
    console.log('Hello');
  }
}
