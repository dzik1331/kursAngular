import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing/routing.component';
import {NavigationRouting} from './navigation.routing';
import {MatCardModule, MatCheckboxModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [RoutingComponent, LazyloadingComponent, AuthGuardComponent],
  imports: [
    NavigationRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class NavigationModule { }
