import { Component, OnInit } from '@angular/core';
import { Assinatura, AssinaturaService } from '../services/assinatura.service';

@Component({
  selector: 'app-assinatura-add',
  templateUrl: './assinatura-add.page.html',
  styleUrls: ['./assinatura-add.page.scss'],
})
export class AssinaturaAddPage implements OnInit {
  public assinatura: Assinatura;

  constructor(private assinaturaService: AssinaturaService) {}

  ngOnInit() {
    this.assinatura = {
      _id: '',
      Id: 0,
      Descricao: '',
      DiaVencimento: 1,
      Valor: 0,
      DataPagamento: '',
      InfoPagamento: '',
      Paga: false,
    };
  }

  public GravarAssinatura() {
    // console.log('Chegou aqui');
    // console.log(this.assinatura.Descricao);
    // console.log(this.assinatura.Valor);
    // console.log(this.assinatura.DiaVencimento);

    this.assinaturaService.saveAssinatura(this.assinatura);
  }
}
