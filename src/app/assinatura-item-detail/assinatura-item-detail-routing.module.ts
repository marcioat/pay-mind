import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssinaturaItemDetailPage } from './assinatura-item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AssinaturaItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssinaturaItemDetailPageRoutingModule {}
