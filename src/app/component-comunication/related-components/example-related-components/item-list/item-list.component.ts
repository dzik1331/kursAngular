import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
