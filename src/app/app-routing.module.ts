import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'conta/:id',
    loadChildren: () =>
      import('./conta-item-detail/conta-item.module').then(
        (m) => m.ListItemDetailModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'conta-add',
    loadChildren: () =>
      import('./conta-add/conta-add.module').then((m) => m.ContaAddPageModule),
  },
  {
    path: 'assinatura-list',
    loadChildren: () =>
      import('./assinatura-list/assinatura-list.module').then(
        (m) => m.AssinaturaListPageModule
      ),
  },
  {
    path: 'assinatura/:id',
    loadChildren: () =>
      import('./assinatura-item-detail/assinatura-item-detail.module').then(
        (m) => m.AssinaturaItemDetailPageModule
      ),
  },
  {
    path: 'assinatura-add',
    loadChildren: () =>
      import('./assinatura-add/assinatura-add.module').then(
        (m) => m.AssinaturaAddPageModule
      ),
  },
  {
    path: 'assinatura-item-detail',
    loadChildren: () =>
      import('./assinatura-item-detail/assinatura-item-detail.module').then(
        (m) => m.AssinaturaItemDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
