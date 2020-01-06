import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {SubjectService} from '../../subject.service';

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
