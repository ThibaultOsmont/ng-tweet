import {C3sMenuModule} from '../c3s-menu/c3s-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { AppIconComponent } from './app-icon/app-icon.component';
import { CardThematiquePipe } from './card/card-thematique.pipe';
import { CardUppercasePipe } from './card/card-uppercase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, AlertComponent, CardComponent, AppTitleComponent, AppIconComponent, CardThematiquePipe, CardUppercasePipe],
  exports: [
    ButtonComponent,
    AlertComponent,
    CardComponent,
    AppTitleComponent,
    AppIconComponent,
    CardThematiquePipe,
    CardUppercasePipe
  ]
})
export class BasicUiModule { }
