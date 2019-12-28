import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassesComponent} from './classes/classes.component';
import {ClassesRouting} from './classes.routing';
import {MatCardModule, MatExpansionModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';


@NgModule({
  declarations: [ClassesComponent],
  imports: [
    ClassesRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule
  ]
})
export class ClassesModule {
}
