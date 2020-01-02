import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateDirectivesComponent} from './create-directives/create-directives.component';
import {CreateDirectivesAndPipesRouting} from './create-directives-and-pipes.routing';
import {MatCardModule, MatExpansionModule, MatListModule, MatTabsModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import {ComponentComunicationModule} from '../component-comunication/component-comunication.module';
import {IcoInputDirective} from '../directives/ico-input.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CreatePipesComponent } from './create-pipes/create-pipes.component';
import {ShortStringPipe} from '../pipes/short-string.pipe';
import {SortPipe} from '../pipes/sort.pipe';


@NgModule({
  declarations: [
    CreateDirectivesComponent,
    IcoInputDirective,
    CreatePipesComponent,
    ShortStringPipe,
    SortPipe
  ],
  imports: [
    CreateDirectivesAndPipesRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatExpansionModule,
    ComponentComunicationModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    MatTabsModule
  ]
})
export class CreateDirectivesAndPipesModule {
}
