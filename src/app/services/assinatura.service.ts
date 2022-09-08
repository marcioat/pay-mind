import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AssinaturaDBService } from './assinatura-db.service';

export interface Assinatura {
  _id: string;
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
export class AssinaturaService {
  public assinaturas: Assinatura[] = [
    {
      _id: 'teste',
      Id: 0,
      Descricao: 'Garagem',
      DiaVencimento: 10,
      Valor: 160,
      DataPagamento: '',
      InfoPagamento: '',
      Paga: false,
    },
  ];
  constructor(private router: Router, private DBService: AssinaturaDBService) {}

  public async getAssinaturas() {
    this.assinaturas = await this.DBService.assinaturas();

    var sortedAssinaturas = this.sortArray(this.assinaturas);

    this.assinaturas = sortedAssinaturas;

    return this.assinaturas;
  }

  private sortArray(myArray: any) {
    var sortedAssinaturas = myArray.sort((n1, n2) => {
      if (n1.DiaVencimento > n2.DiaVencimento) {
        return 1;
      }

      if (n1.DiaVencimento < n2.DiaVencimento) {
        return -1;
      }

      return 0;
    });

    return sortedAssinaturas;
  }
  public getAssinaturaById(id: number): Assinatura {
    return this.assinaturas.find((x) => x.Id === id);
  }

  public deleteAssinatura(assinatura: Assinatura) {
    //console.log('saveAssinatura');
    //console.log(assinatura.Descricao);

    this.DBService.deleteAssinatura(assinatura);

    //console.log(this.assinaturas.length);
    this.assinaturas = this.assinaturas.filter((x) => x.Id != assinatura.Id);
    //console.log(this.assinaturas.length);
    //this.assinaturas.splice(assinatura.Id);
    this.assinaturas = this.sortArray(this.assinaturas);

    //this.router.navigate(['/home']);
  }

  public saveAssinatura(assinatura: Assinatura) {
    //console.log('saveAssinatura');
    //console.log(assinatura.Descricao);

    assinatura.Id = this.assinaturas.length + 1;
    this.DBService.addAssinatura(assinatura);
    //console.log(assinatura.Id);

    this.assinaturas.push(assinatura);
    this.assinaturas = this.sortArray(this.assinaturas);

    this.router.navigate(['/assinatura-list']);
  }

  public updateAssinatura(assinatura: Assinatura) {
    this.DBService.updateAssinatura(assinatura);
    this.router.navigate(['/assinatura-list']);
  }
}
