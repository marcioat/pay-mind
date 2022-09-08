import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Contas', url: '/home', icon: 'mail' },
    { title: 'Pagamentos', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Assinaturas', url: '/assinatura-list', icon: 'heart' },
  ];

  constructor() {
    document.body.setAttribute('color-theme', 'dark');
  }
}
