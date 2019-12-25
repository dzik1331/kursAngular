import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgSwitchRouting} from './ng-switch.routing';
import {NgSwitchComponent} from './ng-switch/ng-switch.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatSelectModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NgSwitchComponent],
  imports: [
    NgSwitchRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class NgSwitchModule { }
