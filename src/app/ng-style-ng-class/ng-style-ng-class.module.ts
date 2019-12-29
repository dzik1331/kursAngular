import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassComponent } from './ng-class/ng-class.component';
import {NgStyleNgClassRouting} from './ng-style-ng-class.routing';
import {MatCardModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import {FormsModule} from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';



@NgModule({
  declarations: [NgClassComponent, NgStyleComponent],
  imports: [
    NgStyleNgClassRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class NgStyleNgClassModule { }
