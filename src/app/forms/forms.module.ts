import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlsComponent } from './form-controls/form-controls.component';
import {FormsRouting} from './forms.routing';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HighlightModule} from 'ngx-highlightjs';
import { FormGroupsComponent } from './form-groups/form-groups.component';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [FormControlsComponent, FormGroupsComponent],
  imports: [
    FormsRouting,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    HighlightModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule
  ]
})
export class FormsModule { }
