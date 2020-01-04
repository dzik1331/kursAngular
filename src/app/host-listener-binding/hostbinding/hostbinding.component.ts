import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-hostbinding',
  templateUrl: './hostbinding.component.html',
  styleUrls: ['./hostbinding.component.scss']
})
export class HostbindingComponent extends TitleClass implements OnInit {
  tsP1 = `
  // ustawia klasę gold jesli wartość isMouseDown jest true
  @HostBinding('class.gold') get color() {
    return this.isMouseDown;
  }
  // ustawia kolor na czerwony
  @HostBinding('style.color') color = 'red'
  `;

  tsP2 = `
  @Component({
    selector: 'app-ico',
    templateUrl: './ico.component.html',
    styleUrls: ['./ico.component.scss']
  })
  export class IcoComponent implements OnInit {
    isMouseDown: boolean = false;

    // to samo osiągniemy stasując taki zapis w htmlu --- [class.gold] = "isMouseDown"
    @HostBinding('class.gold') get color() {
      return this.isMouseDown;
    }
    constructor(private el: ElementRef) {
    }

    ngOnInit() {}
    //Kliknięcie na komponent
    @HostListener('click', ['$event']) click(e) {
      if (this.el.nativeElement.firstChild.style.transform === 'rotate(45deg)') {
        this.el.nativeElement.firstChild.style.transform = 'rotate(0deg)';
      } else {
        this.el.nativeElement.firstChild.style.transform = 'rotate(45deg)';
      }
    }

    //Najechanie kursorem na komponent
    @HostListener('mouseover', ['$event']) mouseover(e) {
        this.el.nativeElement.firstChild.style.color = 'yellow';
    }

    //Opuszczenie kursora z komponentu
    @HostListener('mouseleave', ['$event']) mouseleave(e) {
      this.el.nativeElement.firstChild.style.color = 'black';
    }

    //Wciśniecie przycisku myszy w oknie aplikacji
    @HostListener('window:mousedown', ['$event']) mousedownGlobal(e) {
      this.el.nativeElement.firstChild.style.color = 'red';
      this.isMouseDown = true;
    }

    //Wciśnięcie przycisku myszy w komponencie
    @HostListener('mousedown', ['$event']) mousedown(e) {
      this.el.nativeElement.firstChild.style.fontSize = '40px';
    }

    //Puszczenie przycisku myszy w oknie aplikacji
    @HostListener('window:mouseup', ['$event']) mouseupGlobal(e) {
      this.el.nativeElement.firstChild.style.color = 'black';
      this.el.nativeElement.firstChild.style.fontSize = '30px';
      this.isMouseDown = false;
    }

  }
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
