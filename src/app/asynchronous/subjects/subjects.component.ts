import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {Subject} from 'rxjs';
import {RestService} from '../../rest.service';
import {SubjectService} from '../../subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent extends TitleClass implements OnInit {
  tsP1 = `
    //utworzenie subjecta
    subject = new Subject<string>()

    //subskrypcja do subjecta
    this.subject.subscribe((v) => {
      console.log('value', v);
    });

    //wysłanie wartości do subjecta
    this.subject.next('Hello');
`;
  tsP2 = `
  @Injectable({
    providedIn: 'root'
  })
  export class SubjectService {
    private data: Subject<User> = new Subject<User>();

    constructor() {
    }

    sendData(user: User) {
      this.data.next(user);
    }

    listen() {
      return this.data;
    }
  }
  `;

  tsP3 = `
    export class SubjectsComponent extends TitleClass implements OnInit {

    constructor(pageService: PageService, route: ActivatedRoute, private restService: RestService, private subjectService: SubjectService) {
        super(pageService, route);
      }

      ngOnInit() {
        super.ngOnInit();
      }

      getUser() {
        this.restService.users().subscribe((users) => {
          const u = users;
          this.subjectService.sendData(u[Math.floor(Math.random() * u.length)]);
        });
      }
  `;

  tsP4 = `
    @Component({
      selector: 'app-user-details',
      templateUrl: './user-details.component.html',
      styleUrls: ['./user-details.component.scss']
    })
    export class UserDetailsComponent implements OnInit {
      user: User;

      constructor(private subjectService: SubjectService) {
      }

      ngOnInit() {
        this.subjectService.listen().subscribe((user) => {
          this.user = user;
        });
      }
    }
  `;

  tsP5 = `
    @Component({
      selector: 'app-user-name',
      templateUrl: './user-name.component.html',
      styleUrls: ['./user-name.component.scss']
    })
    export class UserNameComponent implements OnInit {
      user: User;

      constructor(private subjectService: SubjectService) {
      }

      ngOnInit() {
        this.subjectService.listen().subscribe((user) => {
          this.user = user;
        });
      }
    }
  `;

  constructor(pageService: PageService, route: ActivatedRoute, private restService: RestService, private subjectService: SubjectService) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  getUser() {
    this.restService.users().subscribe((users) => {
      const u = users;
      this.subjectService.sendData(u[Math.floor(Math.random() * u.length)]);
    });
  }

}
