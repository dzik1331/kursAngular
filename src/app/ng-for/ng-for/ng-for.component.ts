import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../page/page.service';
import {TitleClass} from '../../title.class';
import {User} from '../../models/user';
import {RestService} from '../../rest.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent extends TitleClass implements OnInit {
  users: User[] = [];
  useTrackBy: boolean = true;
  htmlP1 = `
  <mat-form-field class="example-full-width">
    <input (ngModelChange)="filterUser()" type="number" matInput [(ngModel)]="userfilter" placeholder="ID użytkownika">
  </mat-form-field>
  <mat-list>
    <mat-list-item *ngFor="let u of users">
      {{u.name}}
    </mat-list-item>
  </mat-list>
  `;
  tsP1 = `
  export class NgIfComponent extends TitleClass implements OnInit {
    users: User[] = [];

    constructor(private restService: RestService) {}

    ngOnInit() {
      this.getUsers();
    }

    getUsers(id?) {
      this.restService.users(id).subscribe((
        result) => {
          this.users = result;
        },
        (error) => {
        }
      );
    }
  }
  `;

  htmlP2 = `
  <mat-list>
    <mat-list-item class="user-item ngfor-variables" *ngFor="let u of users;
      let _index = index;
      let _even = even;
      let _odd = odd;
      let _first = first;
      let _last = last;
      trackBy: trackByFn"
      [ngClass]="{'even': _even,'odd': _odd,'first last': _first || _last}"
    >
      {{_index}} {{u.name}}
    </mat-list-item>
  </mat-list>
  `;

  cssP2 = `
  .even {background: #787878;}
  .odd {background: blue;}
  .first, .last {color: yellow;font-weight: bolder;}
  `;

  constructor(pageService: PageService,
              route: ActivatedRoute,
              private restService: RestService
  ) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getUsers();
  }

  getUsers(id?) {
    this.restService.users(id).subscribe((
      result) => {
        this.users = result;
      },
      (error) => {
      }
    );
  }

  trackByFn(index, item) {
    console.debug('hej',);
    return item.id;
  }

  updateLastRecord(name) {
    const users: User[] = Object.assign([], this.users);
    users[users.length - 1].name = name;
    this.users = users;
    this.restService.users().pipe(map((u) => {
      u[u.length - 1].name = name;
      return u;
    })).subscribe((
      result) => {
        this.users = result;
      },
      (error) => {
      }
    );
  }

}
