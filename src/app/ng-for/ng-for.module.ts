import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgForRouting} from './ng-for.routing';
import {NgForComponent} from './ng-for/ng-for.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatListModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [NgForComponent],
  imports: [
    NgForRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class NgForModule { }
