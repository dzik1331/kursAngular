import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-label',
  templateUrl: './my-label.component.html',
  styleUrls: ['./my-label.component.scss']
})
export class MyLabelComponent implements OnInit {
  @Input() text: string;

  constructor() {
  }

  ngOnInit() {
  }

  upperCase() {
    setTimeout(() => {
      this.text = this.text.toUpperCase();
    });
  }

}
