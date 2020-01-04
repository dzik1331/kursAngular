import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HostlistenerComponent} from './hostlistener/hostlistener.component';
import {HostListenerBindingRouting} from './host-listener-binding.routing';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import {MatCardModule, MatExpansionModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import { IcoComponent } from './ico/ico.component';


@NgModule({
  declarations: [HostlistenerComponent, HostbindingComponent, IcoComponent],
  imports: [
    HostListenerBindingRouting,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    HighlightModule
  ]
})
export class HostListenerBindingModule {
}
