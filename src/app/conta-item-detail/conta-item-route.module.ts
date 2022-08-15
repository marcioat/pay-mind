import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemDetailComponent } from './conta-item.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListItemDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemDetailRoutingModule {}
