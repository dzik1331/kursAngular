import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromiseComponent} from './promise/promise.component';
import {AsynchronousRouting} from './asynchronous.routing';
import {MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import { ObservableComponent } from './observable/observable.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [PromiseComponent, ObservableComponent, RxjsOperatorsComponent, SubjectsComponent, UserDetailsComponent],
  imports: [
    AsynchronousRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatExpansionModule,
    MatButtonModule,
    FlexModule,
    MatDividerModule
  ]
})
export class AsynchronousModule {
}
