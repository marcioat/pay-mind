import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContaPagaDBService } from './conta-paga-db.service';

export interface ContaPaga {
  Id: number;
  ContaId: number;
  Descricao: string;
  DiaVencimento: number;
  Valor: number;
  DataPagamento: string;
  InfoPagamento: string;
}
@Injectable({
  providedIn: 'root',
})
export class ContaPagaService {
  public contasPagas: ContaPaga[];

  constructor(
    private router: Router,
    private contaPagaDBService: ContaPagaDBService
  ) {}

  public async getContasPagas() {
    this.contasPagas = await this.contaPagaDBService.contasPagas();

    var sortedContas = this.sortArray(this.contasPagas);

    this.contasPagas = sortedContas;

    return this.contasPagas;
  }

  private sortArray(myArray: any) {
    var sortedContas = myArray.sort((n1, n2) => {
      if (n1.DiaVencimento > n2.DiaVencimento) {
        return 1;
      }

      if (n1.DiaVencimento < n2.DiaVencimento) {
        return -1;
      }

      return 0;
    });

    return sortedContas;
  }

  public saveContaPaga(contaPaga: ContaPaga) {
    //console.log('saveConta');
    //console.log(this.contasPagas);

    contaPaga.Id = Date.now();
    this.contaPagaDBService.addContaPaga(contaPaga);
    //console.log(conta.Id);

    this.router.navigate(['/home']);
  }

  public getContaPagaById(id: number): ContaPaga {
    return this.contasPagas.find((x) => x.Id === id);
  }
}
