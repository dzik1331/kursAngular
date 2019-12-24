import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  users(userId?): Observable<User[]> {
    return this.http.get<User[]>(environment.restUrl + 'users' + (userId != null ? `?id=${userId}` : ''));
  }
}
