import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssinaturaListPage } from './assinatura-list.page';

const routes: Routes = [
  {
    path: '',
    component: AssinaturaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssinaturaListPageRoutingModule {}
