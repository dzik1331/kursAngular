import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {HttpClient} from '@angular/common/http';
import {RestService} from '../../rest.service';
import {User} from '../../models/user';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent extends TitleClass implements OnInit {
  showPanel = true;
  userfilter: string = null;
  users: User[] = [];
  htmlP1 = `
		<mat-checkbox [(ngModel)]="showPanel">showPanel: {{showPanel}}</mat-checkbox>
		<mat-divider></mat-divider>
		<mat-card *ngIf="showPanel">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum purus et nisl interdum ullamcorper. Suspendisse
			eu neque nec nisl porttitor egestas eu vitae risus. Nam sollicitudin accumsan ex, ac varius eros sodales a. Ut eu
			blandit ante. Nulla a dolor sem. Proin tortor ligula, venenatis sed orci ut, pulvinar efficitur lacus. Ut a lacinia
			orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla et neque lorem.
			Donec blandit velit turpis, eget ullamcorper ipsum blandit ut. Duis sagittis placerat consectetur. Nullam in est
			varius, maximus sapien sed, porta elit. Donec tempus vitae arcu sed eleifend. Duis tincidunt faucibus malesuada.
		</mat-card>
		`;
  tsP1 = `
		export class NgIfComponent extends TitleClass implements OnInit {
		  showPanel: boolean = true;

			constructor() {}

			ngOnInit() {}
		}
	`;

  htmlP2 = `
  <mat-form-field class="example-full-width">
    <input (ngModelChange)="filterUser()" type="number" matInput [(ngModel)]="userfilter" placeholder="ID użytkownika">
  </mat-form-field>
  <mat-list *ngIf="users.length> 0; else noUser">
    <mat-list-item *ngFor="let u of users">
      {{u.name}}
    </mat-list-item>
  </mat-list>
  <ng-template #noUser><span class="d-block">Brak użytkownika o podanym ID</span></ng-template>
  `;

  tsP2 = `
  export class NgIfComponent extends TitleClass implements OnInit {
    userfilter: string = null;
    users: User[] = [];

    constructor(private restService: RestService) {}

    ngOnInit() {
      this.getUsers();
    }

    filterUser() {
      this.getUsers(this.userfilter);
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

  constructor(pageService: PageService, route: ActivatedRoute, private restService: RestService) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getUsers();
  }

  filterUser() {
    this.getUsers(this.userfilter);
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
