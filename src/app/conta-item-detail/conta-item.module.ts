import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

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
    IonicModule,
    ReactiveFormsModule,
  ],
})
export class ListItemDetailModule {}
