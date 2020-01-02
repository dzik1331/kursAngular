import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

const h: number = 25;

@Directive({
  selector: '[ico-input]'
})
export class IcoInputDirective implements AfterViewInit {
  @Input() icoClass: string[] = [];

  mainContainer: any;
  ico: any;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.initElements();
    this.setStyles();
  }

  initElements() {
    this.mainContainer = this.renderer.createElement('div');
    this.ico = this.renderer.createElement('i');
    this.renderer.addClass(this.ico, 'ico-directive');
    this.renderer.addClass(this.mainContainer, 'ico-input-container');

    this.renderer.appendChild(this.el.nativeElement.parentElement, this.mainContainer);
    this.renderer.appendChild(this.mainContainer, this.ico);

    this.icoClass.forEach((i) => {
      this.renderer.addClass(this.ico, i);
    });
    this.renderer.appendChild(this.mainContainer, this.el.nativeElement);
  }

  setStyles() {
    this.renderer.setStyle(this.mainContainer, 'border', '1px solid grey');
    this.renderer.setStyle(this.mainContainer, 'border-radius', '5px');
    this.renderer.setStyle(this.mainContainer, 'display', 'inline-flex');
    this.renderer.setStyle(this.mainContainer, 'align-items', 'center');

    this.renderer.setStyle(this.el.nativeElement, 'height', h + 'px');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '14px');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'padding-left', '5px');

    this.renderer.setStyle(this.ico, 'height', (h + 2) + 'px');
    this.renderer.setStyle(this.ico, 'background', 'grey');
    this.renderer.setStyle(this.ico, 'padding', '0 5px');
  }
}
