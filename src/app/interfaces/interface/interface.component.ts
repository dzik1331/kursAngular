import {Component, OnInit} from '@angular/core';
import {TitleClass} from '../../title.class';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent extends TitleClass implements OnInit {
  tsP1 = `
    export interface User {
      id: number;
      name: string;
      username: string;
      email: string;
      address: Address;
      phone: string;
      website: string;
      company: Company;
    }
  `;
  tsP1a = `
    export interface User {
      id;
      name;
      username;
      email;
      address;
      phone;
      website;
      company;
    }
  `;

  tsP1b = `
    export interface User {
      readonly id: number;
      name: string;
      username: string;
      email?: string;
      address?: Address;
      phone?: string;
      website?: string;
      company: Company;
    }
  `;

  tsP1c = `
  export interface UserFunc {
    getName: () => string;
    getCompany?: () => Company;
  }
  `;

  u: Partial<User> = {id: 1};
  u2: User = {id: 1} as User;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    // todo napisac o partialach https://www.obliczeniowo.com.pl/1114
  }

}
