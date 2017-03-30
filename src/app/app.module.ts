import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicUiModule } from "app/basic-ui/basic-ui.module";
import { C3sMenuModule } from "app/c3s-menu/c3s-menu.module";
import { C3sContentComponent } from './c3s-content/c3s-content.component';
import { ContentService } from "app/content.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    C3sContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BasicUiModule,
    C3sMenuModule,
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
