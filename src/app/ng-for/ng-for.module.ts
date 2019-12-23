import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForRouting} from './ng-for.routing';
import {NgForComponent} from './ng-for/ng-for.component';

@NgModule({
  declarations: [NgForComponent],
  imports: [
    NgForRouting,
    CommonModule
  ]
})
export class NgForModule { }
