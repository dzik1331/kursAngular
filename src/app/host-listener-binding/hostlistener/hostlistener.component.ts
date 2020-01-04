import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.scss']
})
export class HostlistenerComponent extends TitleClass implements OnInit {

  tsP1 = `
    @HostListener('Nazwa eventu', ['$event'] - opcjonalne dodatkowe parametry) click(e) {

    }
  `;

  tsP2 = `
  @Component({
    selector: 'app-ico',
    templateUrl: './ico.component.html',
    styleUrls: ['./ico.component.scss']
  })
  export class IcoComponent implements OnInit {

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
    }

    //Wciśnięcie przycisku myszy w komponencie
    @HostListener('mousedown', ['$event']) mousedown(e) {
      this.el.nativeElement.firstChild.style.fontSize = '40px';
    }

    //Puszczenie przycisku myszy w oknie aplikacji
    @HostListener('window:mouseup', ['$event']) mouseupGlobal(e) {
      this.el.nativeElement.firstChild.style.color = 'black';
      this.el.nativeElement.firstChild.style.fontSize = '30px';
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
