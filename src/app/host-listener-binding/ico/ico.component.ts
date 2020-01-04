import {Component, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.scss']
})
export class IcoComponent implements OnInit {
  @Input() bindings: boolean = false;
  isMouseDown: boolean = false;

  @HostBinding('class.gold') get color() {
    return this.isMouseDown;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event']) click(e) {
    if (this.el.nativeElement.firstChild.style.transform === 'rotate(45deg)') {
      this.el.nativeElement.firstChild.style.transform = 'rotate(0deg)';
    } else {
      this.el.nativeElement.firstChild.style.transform = 'rotate(45deg)';
    }
  }

  @HostListener('mouseover', ['$event']) mouseover(e) {
    this.el.nativeElement.firstChild.style.color = 'yellow';
  }

  @HostListener('mouseleave', ['$event']) mouseleave(e) {
    this.el.nativeElement.firstChild.style.color = 'black';
  }

  @HostListener('window:mousedown', ['$event']) mousedownGlobal(e) {
    this.el.nativeElement.firstChild.style.color = 'red';
    this.isMouseDown = this.bindings;
  }

  @HostListener('mousedown', ['$event']) mousedown(e) {
    this.el.nativeElement.firstChild.style.fontSize = '40px';
  }

  @HostListener('window:mouseup', ['$event']) mouseupGlobal(e) {
    this.el.nativeElement.firstChild.style.color = 'black';
    this.el.nativeElement.firstChild.style.fontSize = '30px';
    this.isMouseDown = false;
  }

}
