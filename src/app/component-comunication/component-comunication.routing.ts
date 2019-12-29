import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {RelatedComponentsComponent} from './related-components/related-components.component';
import {UnrelatedComponentsComponent} from './unrelated-components/unrelated-components.component';
import {ExampleRelatedComponentsComponent} from './related-components/example-related-components/example-related-components.component';
import {DescriptionRelatedComponentsComponent} from './related-components/description-related-components/description-related-components.component';

export const routes: Routes = [
  {
    path: 'relatedComponents',
    component: RelatedComponentsComponent,
    data: {
      title: 'Komponenty powiązane'
    },
    children: [
      {
        path: 'description',
        component: DescriptionRelatedComponentsComponent
      },
      {
        path: 'example',
        component: ExampleRelatedComponentsComponent
      }
    ]
  },
  {
    path: 'unrelatedComponents',
    component: UnrelatedComponentsComponent,
    data: {
      title: 'Komponenty niepowiązane'
    }
  }
];

export const ComponentComunicationRouting: ModuleWithProviders = RouterModule.forChild(routes);
