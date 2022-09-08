import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssinaturaAddPage } from './assinatura-add.page';

const routes: Routes = [
  {
    path: '',
    component: AssinaturaAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssinaturaAddPageRoutingModule {}
