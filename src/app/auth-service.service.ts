import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAdministrator: boolean = true;

  constructor() {
  }
}
