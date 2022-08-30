import { Component, OnInit } from '@angular/core';
import { Conta, ContaService } from '../services/conta.service';

@Component({
  selector: 'app-conta-add',
  templateUrl: './conta-add.page.html',
  styleUrls: ['./conta-add.page.scss'],
})
export class ContaAddPage implements OnInit {
  public conta: Conta;

  constructor(private contaService: ContaService) {}

  ngOnInit() {
    this.conta = {
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

  public GravarConta() {
    // console.log('Chegou aqui');
    // console.log(this.conta.Descricao);
    // console.log(this.conta.Valor);
    // console.log(this.conta.DiaVencimento);

    this.contaService.saveConta(this.conta);
  }
}
