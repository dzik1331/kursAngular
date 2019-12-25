import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InterfaceComponent} from './interface/interface.component';
import {InterfacesRouting} from './interfaces.routing';
import {MatCardModule, MatExpansionModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';


@NgModule({
  declarations: [InterfaceComponent],
  imports: [
    InterfacesRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule
  ]
})
export class InterfacesModule {
}
