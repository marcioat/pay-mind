import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturaItemDetailPageRoutingModule } from './assinatura-item-detail-routing.module';

import { AssinaturaItemDetailPage } from './assinatura-item-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssinaturaItemDetailPageRoutingModule,
  ],
  declarations: [AssinaturaItemDetailPage],
})
export class AssinaturaItemDetailPageModule {}
