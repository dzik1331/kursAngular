import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {RestService} from '../../rest.service';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Component({
  selector: 'app-create-pipes',
  templateUrl: './create-pipes.component.html',
  styleUrls: ['./create-pipes.component.scss']
})
export class CreatePipesComponent extends TitleClass implements OnInit {
  users: Observable<User[]> = this.restService.users();
  date = Date.now();
  htmlP1 = `
    <div *ngFor="let u of users| async">
        {{u.name}}
    </div>
  `;

  tsP1 = `users: Observable<User[]> = this.restService.users();`;
  tsP2 = `date = Date.now();`;
  htmlP2 = `
    <pre>{{date | date:'long'}}</pre>
    <pre>{{date | date:'short'}}</pre>
    <pre>{{date | date:'HH:mm:ss'}}</pre>
    <pre>{{date | date:'hh:mm:ss'}}</pre>
    <pre>{{date | date:'yyyy/MM/dd'}}</pre>
  `;

  tsP3 = `
  @Pipe({
    name: 'shortString'
  })
  export class ShortStringPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
      return null;
    }

  }
  `;
  htmlP3 = `<div>{{value | shortString}}</div>`;
  htmlP4 = `
  <div *ngFor="let u of users | async">
    <div class="d-block">{{u.name | shortString:12}}</div>
  </div>
  `;

  tsP4 = `
  @Pipe({
    name: 'shortString'
  })
  export class ShortStringPipe implements PipeTransform {

    transform(value: string, limit): any {
      if (value && value.length > limit) {
        return value.slice(0, limit) + '...';
      }
      return value;
    }

  }
`;

  htmlP5 = `
  <div *ngFor="let u of users | async | sort:'name'">
    <div class="d-block">{{u.name}}</div>
  </div>
  `;

  tsP5 = `
  @Pipe({
    name: 'sort'
  })
  export class SortPipe implements PipeTransform {

    transform(value: any[], key?: string): any {
      if (!value || value.length === 0) {
        return value;
      }
      if (key !== null) {
        return value.sort((a, b) => a[key].localeCompare(b[key]));
      } else {
        return value.sort((a, b) => a.localeCompare(b));
      }
    }
  }
  `;

  constructor(pageService: PageService, route: ActivatedRoute, private restService: RestService) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
