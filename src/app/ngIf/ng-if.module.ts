import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import {NgIfRouting} from './ng-if.routing';
import {MatCardModule, MatCheckboxModule, MatDividerModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NgIfComponent],
  imports: [
    NgIfRouting,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class NgIfModule { }
