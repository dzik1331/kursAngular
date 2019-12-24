import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatSidenavModule} from '@angular/material';
import {PageComponent} from './page/page.component';
import {AppRouting} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
