import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModulesComponent} from './modules/modules.component';
import {MatCardModule, MatExpansionModule} from '@angular/material';
import {ModuleComponentRouting} from './module-component.routing';
import {HighlightModule} from 'ngx-highlightjs';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [ModulesComponent, ComponentsComponent],
  imports: [
    ModuleComponentRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatExpansionModule
  ]
})
export class ModuleComponentModule {
}
