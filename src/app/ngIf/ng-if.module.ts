import {CommonModule} from '@angular/common';
import {NgIfComponent} from './ng-if/ng-if.component';
import {NgIfRouting} from './ng-if.routing';
import {MatCardModule, MatCheckboxModule, MatDividerModule, MatExpansionModule} from '@angular/material';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [NgIfComponent],
  imports: [
    NgIfRouting,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    HighlightModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ]
})
export class NgIfModule {
}
