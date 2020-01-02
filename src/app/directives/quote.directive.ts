import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[quote]'
})
export class QuoteDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const text = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML = `"${text.trim()}"`;
    this.el.nativeElement.style.fontStyle = 'oblique';
    this.el.nativeElement.style.fontFamily = 'serif';
  }
}
