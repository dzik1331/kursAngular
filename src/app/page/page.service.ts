import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  pageTitleSubject: Subject<string> = new Subject<string>();

  constructor() {
  }

  setTitle(title: string) {
    this.pageTitleSubject.next(title);
  }

  listen(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}
