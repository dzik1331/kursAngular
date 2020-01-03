import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child/view-child.component';
import {ViewChildRouting} from './viewChild.routing';
import {MatCardModule, MatExpansionModule, MatFormFieldModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import { MyLabelComponent } from './my-label/my-label.component';



@NgModule({
  declarations: [ViewChildComponent, MyLabelComponent],
  imports: [
    ViewChildRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule,
    MatFormFieldModule
  ]
})
export class ViewChildModule { }
