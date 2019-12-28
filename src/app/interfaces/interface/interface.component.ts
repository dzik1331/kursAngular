import {Component, OnInit} from '@angular/core';
import {TitleClass} from '../../title.class';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';

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

  tsP1d = `
  export interface User {
    id: id;
    name: name;
    [key: string]: any;
  }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
