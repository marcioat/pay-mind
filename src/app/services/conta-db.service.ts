import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Conta } from './conta.service';

@Injectable({
  providedIn: 'root',
})
export class ContaDBService {
  private _DB: any;
  private success: boolean = true;
  private lstContas: Conta[];
  constructor() {
    this.initialiseDB();
  }

  initialiseDB() {
    this._DB = new PouchDB('contas');

    this._DB.info().then(function (info) {
      //console.log(info);
    });
  }

  public async contas() {
    await this._DB.allDocs({ include_docs: true }).then((docs) => {
      this.lstContas = docs.rows.map((row) => {
        //row.doc.Date = new Date(row.doc.Date);
        //console.log(row.doc);
        //this.lstContas.push(row.doc);
        return row.doc;
      });
    });

    return this.lstContas;
  }

  addConta(conta: Conta) {
    //console.log(conta);

    return new Promise((resolve) => {
      this._DB
        .post(conta)
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

  updateConta(conta: Conta) {
    //console.log(conta);

    return new Promise((resolve) => {
      //console.log(conta._id);
      this._DB;
      this._DB
        .put(conta)
        .catch((err) => {
          this.success = false;
          //console.log(err);
        })
        .then(
          this._DB.info().then(function (info) {
            //console.log(info);
            //console.log(conta);
          })
        );

      resolve(true);
    });
  }
}
