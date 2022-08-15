import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemDetailComponent } from './conta-item.page';
import { ListItemDetailRoutingModule } from './conta-item-route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListItemDetailComponent],
  exports: [ListItemDetailComponent],

  imports: [
    CommonModule,
    ListItemDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ListItemDetailModule {}
