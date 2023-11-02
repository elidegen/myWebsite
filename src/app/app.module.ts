import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponentComponent } from './portfolio/project-component/project-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartScreenComponent,
    ScrollButtonComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    SkillsComponent,
    ProjectComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
