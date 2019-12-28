import {Component, OnInit} from '@angular/core';
import {TitleClass} from '../../title.class';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../user';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent extends TitleClass implements OnInit {

  tsP1 = `
    export class User {
      private _name: string;
      private _secondName: string;
      private _lastName: string;
      private _age: number;

      constructor(name: string, lastName: string, age: number) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
      }

      get name(): string {
        return this._name;
      }

      get lastName(): string {
        return this._lastName;
      }

      get age(): number {
        return this._age;
      }

      get secondName() {
        return this._secondName;
      }

      get fullName() {
        return this.name + ' ' + (this.secondName ? this.secondName + ' ' : '') + this.lastname;
      }

      set secondName(value: string) {
        this._secondName = value;
      }
    }
  `;

  tsP1a = `
    export class User {
      private _secondName: string;
      constructor(private name: string, private lastname: string, private age: number) {
      }

      get fullName() {
        return this.name + ' ' + (this.secondName ? this.secondName + ' ' : '') + this.lastname;
      }

      get secondName() {
        return this._secondName;
      }

      set secondName(value: string) {
        this._secondName = value;
      }
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();

    const user = new User('Jan', 'Kowalski', 30);
    user.secondName = 'Rafał';
    console.debug(user.fullName);
  }

}
