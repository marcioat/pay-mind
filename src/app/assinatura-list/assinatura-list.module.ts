import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturaListPageRoutingModule } from './assinatura-list-routing.module';

import { AssinaturaListPage } from './assinatura-list.page';
import { AssinaturaListComponent } from './assinatura-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssinaturaListPageRoutingModule,
  ],
  declarations: [AssinaturaListPage, AssinaturaListComponent],
  exports: [AssinaturaListPage, AssinaturaListComponent],
})
export class AssinaturaListPageModule {}
