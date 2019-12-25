import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../../page/page.service';
import {TitleClass} from '../../title.class';
import {Role} from '../../models/role';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent extends TitleClass implements OnInit {
  roles: Role[] = [
    {id: 1, name: 'Administrator'},
    {id: 2, name: 'Moderator'},
    {id: 3, name: 'Użytkownik'},
    {id: 4, name: 'Nieznany użytkownik'}
  ];

  htmlP1 = `
   <mat-form-field>
    <mat-label>Rola:</mat-label>
    <mat-select [(value)]="selectedRole">
      <mat-option *ngFor="let role of roles" [value]="role.id">
        {{role.name}}
      </mat-option>
    </mat-select>
  </mat-form-field>

  <mat-card>
    <div [ngSwitch]="selectedRole">
      <div *ngSwitchCase="1">
        <button mat-raised-button>Użytkownicy</button>
        <button mat-raised-button>Usuń post</button>
        <button mat-raised-button>Dodaj post</button>
        <button mat-raised-button>Edytuj post</button>
      </div>
      <div *ngSwitchCase="2">
        <button mat-raised-button>Usuń post</button>
        <button mat-raised-button>Dodaj post</button>
        <button mat-raised-button>Edytuj post</button>
      </div>
      <div *ngSwitchCase="3">
        <button mat-raised-button>Dodaj post</button>
        <button mat-raised-button>Edytuj post</button>
      </div>
      <div *ngSwitchDefault>
        Brak uprawnień
      </div>
    </div>
  </mat-card>
  `;

  tsP1 = `
  export class NgSwitchComponent extends TitleClass implements OnInit {
    roles: Role[] = [
      {id: 1, name: 'Administrator'},
      {id: 2, name: 'Moderator'},
      {id: 3, name: 'Użytkownik'},
      {id: 4, name: 'Nieznany użytkownik'}
    ];

    selectedRole: number = 1;

    constructor() {
    }

    ngOnInit() {
    }

  }
  `;

  selectedRole: number = 1;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
