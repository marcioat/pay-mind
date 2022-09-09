import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Assinatura, AssinaturaService } from '../services/assinatura.service';

@Component({
  selector: 'app-assinatura',
  templateUrl: 'assinatura-list.page.html',
  styleUrls: ['assinatura-list.page.scss'],
})
export class AssinaturaListPage implements OnInit {
  public lstAssinaturas: Assinatura[];
  public assinaturasQtd: any;
  public assinaturasValor: any;

  constructor(
    private assinaturaService: AssinaturaService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private router: Router
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        //App.exitApp();
        this.router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit() {
    this.platform.ready().then(async (ready) => {
      this.lstAssinaturas = await this.getAssinaturas();
      this.assinaturasQtd = this.lstAssinaturas.length;

      const sum = this.lstAssinaturas.reduce(
        (sum, current) => sum + current.Valor,
        0
      );

      this.assinaturasValor = sum;
      //console.log(this.lstAssinaturas[0]);
    });
  }

  async getAssinaturas(): Promise<Assinatura[]> {
    return await this.assinaturaService.getAssinaturas();
  }
}
