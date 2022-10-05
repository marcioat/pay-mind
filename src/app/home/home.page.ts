import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { Conta, ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe],
})
export class HomePage implements OnInit {
  public lstContas: Conta[];
  public diaHoje: string;

  constructor(
    private contaService: ContaService,
    private platform: Platform,
    private routerOutlet: IonRouterOutlet,
    private datePipe: DatePipe
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  ngOnInit() {
    this.diaHoje = this.datePipe.transform(new Date(), 'dd');
    console.log(this.diaHoje);

    this.platform.ready().then(async (ready) => {
      this.lstContas = await this.getContas();
      //console.log(this.lstContas[0]);
    });
  }

  async getContas(): Promise<Conta[]> {
    return await this.contaService.getContas();
  }

  public ResetarContas() {
    console.log('resetar');
    this.contaService.ResetarContas(this.lstContas);
  }
}
