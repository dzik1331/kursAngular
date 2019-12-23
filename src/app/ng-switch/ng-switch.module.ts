import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgSwitchRouting} from './ng-switch.routing';
import {NgSwitchComponent} from './ng-switch/ng-switch.component';

@NgModule({
  declarations: [NgSwitchComponent],
  imports: [
    NgSwitchRouting,
    CommonModule
  ]
})
export class NgSwitchModule { }
