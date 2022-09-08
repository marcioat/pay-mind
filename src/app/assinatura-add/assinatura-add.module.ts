import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssinaturaAddPageRoutingModule } from './assinatura-add-routing.module';

import { AssinaturaAddPage } from './assinatura-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssinaturaAddPageRoutingModule
  ],
  declarations: [AssinaturaAddPage]
})
export class AssinaturaAddPageModule {}
