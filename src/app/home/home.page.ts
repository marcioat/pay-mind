import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Conta, ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public lstContas: Conta[];
  constructor(
    private contaService: ContaService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnInit() {
    this.platform.ready().then(async (ready) => {
      this.lstContas = await this.getContas();
      //console.log(this.lstContas[0]);
    });
  }

  async getContas(): Promise<Conta[]> {
    return await this.contaService.getContas();
  }
}
