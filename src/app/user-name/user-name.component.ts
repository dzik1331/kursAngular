import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {SubjectService} from '../subject.service';

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
