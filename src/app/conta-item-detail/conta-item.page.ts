import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Conta, ContaService } from '../services/conta.service';

@Component({
  selector: 'app-conta-item',
  templateUrl: './conta-item.page.html',
  styleUrls: ['./conta-item.page.scss'],
  providers: [DatePipe],
})
export class ListItemDetailComponent implements OnInit {
  public conta: Conta;

  constructor(
    private data: ContaService,
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
    console.log('Chegou aqui');
    console.log(this.conta.Valor);
    console.log(this.conta.InfoPagamento);

    this.conta.Paga = true;

    this.conta.DataPagamento = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd'
    );

    this.router.navigate(['/home']);
  }
}
