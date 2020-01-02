import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-directives',
  templateUrl: './create-directives.component.html',
  styleUrls: ['./create-directives.component.scss']
})
export class CreateDirectivesComponent extends TitleClass implements OnInit {
  tsP1 = `
  @Directive({
    selector: '[quote]'
  })
  export class QuoteDirective implements AfterViewInit {

    constructor() {}
  }
  `;

  htmlP1 = `
  <div quote>...</div>
  `;

  tsP2 = `
  @Directive({
    selector: '[quote]'
  })
  export class QuoteDirective implements AfterViewInit {

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
      const text = this.el.nativeElement.innerHTML;
      this.el.nativeElement.innerHTML = \`"$ {text.trim()}"\`;
      this.el.nativeElement.style.fontStyle = 'oblique';
      this.el.nativeElement.style.fontFamily = 'serif';
    }
  }
  `;

  htmlP2 = `
  <div quote>
      Historia matematyki jest prawdopodobnie równie stara jak ludzkość. Przetrwały pewne ślady, zarówno w znaleziskach paleontologów, jak i w języku, które wskazują, że proste obliczenia wykorzystywali prehistoryczni myśliwi, kobiety przewidujące datę miesiączki czy wodzowie plemienni szacujący bojową siłę swoich ludzi.
      Najstarszymi znanymi tekstami matematycznymi są Plimpton 322 (Babilonia ok. 1900 p.n.e.), papirus moskiewski (Egipt ok. 1850 p.n.e.), papirus Rhinda (Egipt, 1650 p.n.e.), Shulba Sutras (Indie ok. 800 p.n.e.). Wszystkie te teksty wspominają twierdzenie Pitagorasa, które wydaje się najbardziej rozpowszechnionym w starożytności wynikiem matematycznym.
      Matematyka egipska i sumeryjska była dalej rozwijana przez Greków, którzy ponadto usystematyzowali niezależne dotąd twierdzenia w jeden spójny system[1]. Dalszy rozwój matematyka zawdzięcza Arabom. Wiele greckich i arabskich prac matematycznych następnie przetłumaczono na łacinę, co pozwoliło na dalszy rozwój tych koncepcji w średniowiecznej Europie.
      Co ciekawe, historia starożytnej i średniowiecznej matematyki składa się z okresów gwałtownego postępu, oddzielonych całymi stuleciami stagnacji. Schemat ten zakończył się dopiero w okresie renesansu. Era nieprzerwanego rozwoju matematyki, rozpoczęta w XVI-wiecznych Włoszech, trwa po dziś dzień.
   </div>
  `;

  tsP3 = `
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
        this.renderer.addClass(this.mainContainer, 'ico-input-container');
        this.renderer.addClass(this.ico, 'ico-directive');
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
  `;

  htmlP3 = `
    <input ico-input [icoClass]="['fas', 'fa-balance-scale']">
  `;

  form;
  loaded: boolean = false;

  constructor(pageService: PageService, route: ActivatedRoute, private fb: FormBuilder) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();

    this.form = this.fb.group({
      name: [],
      lastName: []
    });
    this.loaded = true;
  }

}
