import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ItemComponent, SearchComponent],
  exports: [ItemComponent, SearchComponent]
})
export class C3sMenuModule { }
