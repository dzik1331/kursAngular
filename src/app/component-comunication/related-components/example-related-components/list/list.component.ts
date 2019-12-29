import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  name: string;
  users: Array<{ id, name }> = [
    {id: 1, name: 'Leanne Graham'},
    {id: 2, name: 'Ervin Howell'},
    {id: 3, name: 'Clementine Bauch'},
    {id: 4, name: 'Patricia Lebsack'},
    {id: 5, name: 'Mrs. Dennis Schulist'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.users.push({name: this.name, id: this.users.length + 1});
    this.name = null;
  }

  removeFromList(user: { id; name }) {
    this.users = this.users.filter((u) => u.id !== user.id);
  }

}
