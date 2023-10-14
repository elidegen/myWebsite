import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartScreenComponent,
    ScrollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
