import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {MyLabelComponent} from '../my-label/my-label.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent extends TitleClass implements OnInit, AfterViewInit {
  @ViewChild(MyLabelComponent, {static: true}) data: MyLabelComponent;
  @ViewChildren(MyLabelComponent) dataList: QueryList<MyLabelComponent>;

  tsP1 = `
    //TS
    @ViewChild('title') data: ElementRef<HTMLElement>;//Angular>8
    @ViewChild('title', {static: true}) data: ElementRef<HTMLElement>; //Angular8+

    ngAfterViewInit() {
        this.data.nativeElement.style.color = 'red';
    }
  `;
  htmlP1 = `
    //html
    <div>
      <label #title>Lorem ipsum dolor sit amet</label>
    </div>
  `;

  htmlP2 = `
    //html
    <div>
      <app-my-label [text]="'Label 1'"></app-my-label>
    </div>
  `;
  tsP2 = `
    //ts
    @ViewChild(MyLabelComponent) data: MyLabelComponent;//Angular>8
    @ViewChild(MyLabelComponent, {static: true}) data: MyLabelComponent; //Angular8+

    ngAfterViewInit() {
        //Posiadamy dostęp do funkcji dziecka z poziomu rodzica
        this.data.upperCase();
    }
  `;

  tsP2a = `
    //ts - kod komponentu app-my-label
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
        this.text = this.text.toUpperCase();
      }

    }
  `;

  tsP3 = `
    //ts
    @ViewChildren(MyLabelComponent) dataList: QueryList<MyLabelComponent>;

    ngAfterViewInit() {
    //Jak w przypadku @ViewChild mamy dostęp do wszystkich funkcji z komponentów w komponencie rodzica
    this.dataList.forEach((component) => {
      component.upperCase();
    });
  }
  `;

  htmlP3 = `
  //html
  <div>
    <app-my-label [text]="'Label 1'"></app-my-label>
    <app-my-label [text]="'Label 2'"></app-my-label>
    <app-my-label [text]="'Label 3'"></app-my-label>
    <app-my-label [text]="'Label 4'"></app-my-label>
  </div>
  `;

  constructor(pageService: PageService, route: ActivatedRoute) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    this.dataList.forEach((component) => {
      component.upperCase();
    });
  }

}
