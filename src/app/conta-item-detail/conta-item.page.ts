import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Conta, ContaService } from '../services/conta.service';
import { ContaPaga, ContaPagaService } from '../services/conta-paga.service';

@Component({
  selector: 'app-conta-item',
  templateUrl: './conta-item.page.html',
  styleUrls: ['./conta-item.page.scss'],
  providers: [DatePipe],
})
export class ListItemDetailComponent implements OnInit {
  public conta: Conta;
  public contaPaga: ContaPaga;

  constructor(
    private data: ContaService,
    private contaPagaService: ContaPagaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.conta = this.data.getContaById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  public GravarPagamento() {
    // console.log('Chegou aqui');
    //console.log(this.conta);
    // console.log(this.conta.InfoPagamento);
    var dtPgto = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.contaPaga = {
      Id: 0,
      ContaId: this.conta.Id,
      Descricao: this.conta.Descricao,
      DataPagamento: dtPgto,
      DiaVencimento: this.conta.DiaVencimento,
      InfoPagamento: this.conta.InfoPagamento,
      Valor: this.conta.Valor,
    };
    this.contaPagaService.saveContaPaga(this.contaPaga);

    this.conta.Paga = true;
    this.conta.DataPagamento = dtPgto;
    this.data.updateConta(this.conta);

    this.router.navigate(['/home']);
  }
}
