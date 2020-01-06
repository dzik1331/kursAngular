import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private data: Subject<User> = new Subject<User>();

  constructor() {
  }

  sendData(user: User) {
    this.data.next(user);
  }

  listen() {
    return this.data;
  }
}
