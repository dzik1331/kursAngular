import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentComunicationRouting} from './component-comunication.routing';
import { RelatedComponentsComponent } from './related-components/related-components.component';
import { UnrelatedComponentsComponent } from './unrelated-components/unrelated-components.component';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import {HighlightModule} from 'ngx-highlightjs';
import { ExampleRelatedComponentsComponent } from './related-components/example-related-components/example-related-components.component';
import { DescriptionRelatedComponentsComponent } from './related-components/description-related-components/description-related-components.component';
import { ListComponent } from './related-components/example-related-components/list/list.component';
import { ItemListComponent } from './related-components/example-related-components/item-list/item-list.component';
import {FormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [RelatedComponentsComponent, UnrelatedComponentsComponent, ExampleRelatedComponentsComponent, DescriptionRelatedComponentsComponent, ListComponent, ItemListComponent],
  imports: [
    ComponentComunicationRouting,
    CommonModule,
    MatCardModule,
    HighlightModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    FlexModule,
    MatExpansionModule
  ]
})
export class ComponentComunicationModule {
}
