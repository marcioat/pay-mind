import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';

export interface Conta {
  Id: number;
  Descricao: string;
  DiaVencimento: number;
  Valor: number;
  DataPagamento: string;
  InfoPagamento: string;
  Paga: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  public contas: Conta[] = [
    {
      Id: 0,
      Descricao: 'Garagem',
      DiaVencimento: 10,
      Valor: 160,
      DataPagamento: '',
      InfoPagamento: '',
      Paga: false,
    },
    {
      Id: 1,
      Descricao: 'Original Card',
      DiaVencimento: 5,
      Valor: 120,
      DataPagamento: '',
      InfoPagamento: '',
      Paga: false,
    },
    {
      Id: 2,
      Descricao: 'Seguro FIT',
      DiaVencimento: 15,
      Valor: 102,
      DataPagamento: '',
      InfoPagamento: '',
      Paga: false,
    },
  ];
  constructor(private router: Router, private DBService: DatabaseService) {}

  public async getContas() {
    this.contas = await this.DBService.contas();

    var sortedContas = this.sortArray(this.contas);

    this.contas = sortedContas;

    return this.contas;
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
  public getContaById(id: number): Conta {
    return this.contas.find((x) => x.Id === id);
  }

  public saveConta(conta: Conta) {
    //console.log('saveConta');
    //console.log(conta.Descricao);

    conta.Id = this.contas.length + 1;
    this.DBService.addConta(conta);
    //console.log(conta.Id);

    this.contas.push(conta);
    this.contas = this.sortArray(this.contas);

    this.router.navigate(['/home']);
  }
}
