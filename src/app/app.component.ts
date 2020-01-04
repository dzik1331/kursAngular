import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kurs';
  expandAll: boolean = false;
  menu = [
    {
      title: 'Interfejsy i klasy',
      navs: [
        {router: 'interfaces', name: 'Interfejs'},
        {router: 'classes', name: 'Klasa'}
      ]
    },
    {
      title: 'Moduły i komponenty',
      navs: [
        {router: 'moduleComponent/modules', name: 'Moduł'},
        {router: 'moduleComponent/components', name: 'Komponent'}
      ]
    },
    {
      title: 'Dyrektywy ngClass i ngStyle',
      navs: [
        {router: 'ngStyleNgClassModule/ngClass', name: 'ngClass'},
        {router: 'ngStyleNgClassModule/ngStyle', name: 'ngStyle'}
      ]
    },
    {
      title: 'Dyrektywy strukturalne',
      navs: [
        {router: 'ngIf', name: 'ngIf'},
        {router: 'ngFor', name: 'ngFor'},
        {router: 'ngSwitch', name: 'ngSwitch'}
      ]
    },
    {
      title: 'Komunikacja między komponentami',
      navs: [
        {router: 'componentComunication/relatedComponents/description', name: 'Komponenty powiązane(rodzic <--> dziecko)'},
        {router: 'componentComunication/unrelatedComponents', name: 'Komponenty niepowiązane'}
      ]
    },
    {
      title: 'Tworzenie własnych dyrektyw i pipe\'ów',
      navs: [
        {router: 'createDirectiveAndPipes/createDirectives', name: 'Dyrektywy'},
        {router: 'createDirectiveAndPipes/createPipes', name: 'Pipe'}
      ]
    },
    {
      title: 'Formularze',
      navs: [
        {router: 'forms/formControls', name: 'FormControl'},
        {router: 'forms/formGroups', name: 'FormGroup'}
      ]
    },
    {
      title: 'Dekoratory ViewChild/ViewChildren',
      navs: [
        {router: 'viewChild', name: 'ViewChild/ViewChildren'},
      ]
    },
    {
      title: 'HostListener i HostBinding',
      navs: [
        {router: 'hlAndHb/hostlistener', name: 'HostListener'},
        {router: 'hlAndHb/hostbinding', name: 'HostBinding'},
      ]
    },
  ];

  constructor() {
  }

  expand() {
    this.expandAll = !this.expandAll;
  }
}
