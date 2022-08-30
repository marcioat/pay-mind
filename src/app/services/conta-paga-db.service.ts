import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { ContaPaga } from '../services/conta-paga.service';

@Injectable({
  providedIn: 'root',
})
export class ContaPagaDBService {
  private _DB: any;
  private success: boolean = true;
  private lstContasPagas: ContaPaga[];
  constructor() {
    this.initialiseDB();
  }

  initialiseDB() {
    this._DB = new PouchDB('contas-pagas');

    this._DB.info().then(function (info) {
      //console.log(info);
    });
  }

  public async contasPagas() {
    await this._DB.allDocs({ include_docs: true }).then((docs) => {
      this.lstContasPagas = docs.rows.map((row) => {
        //row.doc.Date = new Date(row.doc.Date);
        //console.log(row.doc);
        //this.lstContas.push(row.doc);
        return row.doc;
      });
    });

    return this.lstContasPagas;
  }

  addContaPaga(contaPaga: ContaPaga) {
    //console.log(contaPaga);

    return new Promise((resolve) => {
      this._DB
        .post(contaPaga)
        .catch((err) => {
          this.success = false;
        })
        .then(
          this._DB.info().then(function (info) {
            //console.log(info);
          })
        );

      resolve(true);
    });
  }
}
