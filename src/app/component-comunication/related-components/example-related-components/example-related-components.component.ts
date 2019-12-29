import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-example-related-components',
  templateUrl: './example-related-components.component.html',
  styleUrls: ['./example-related-components.component.scss']
})
export class ExampleRelatedComponentsComponent implements OnInit {
  listComponentHtml = `
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Imię i nazwisko" [(ngModel)]="name">
  </mat-form-field>
  <button (click)="add()" [disabled]="!name" mat-raised-button>Dodaj</button>

  <mat-list>
    <app-item-list *ngFor="let u of users" [user]="u" (remove)="removeFromList($event)"></app-item-list>
  </mat-list>
  `;
  listComponentTs = `
  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
  })
  export class ListComponent implements OnInit {
    name: string;
    users: Array<{ id, name }> = [];

    constructor() {}

    ngOnInit() {}

    add() {
      this.users.push({name: this.name, id: this.users.length + 1});
      this.name = null;
    }

    removeFromList(user: { id; name }) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }
  `;
  itemListComponentHtml = `
    <mat-list-item>
      <div fxLayout="col" fxFlex="80">{{user.name}}</div>
      <div fxLayout="col" fxFlex="20">
        <button mat-raised-button [color]="'warn'" (click)="removeUser()">Usuń</button>
      </div>
    </mat-list-item>
  `;
  itemListComponentTs = `
  @Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
  })
  export class ItemListComponent implements OnInit {
    @Input() user: { id; name };
    @Output() remove = new EventEmitter<{ id; name }>();

    constructor() {
    }

    ngOnInit() {
    }

    removeUser() {
      this.remove.emit(this.user);
    }

  }
  `;

  constructor() {
  }

  ngOnInit() {
  }

}
