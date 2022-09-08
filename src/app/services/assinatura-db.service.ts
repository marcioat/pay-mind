import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { Assinatura } from './assinatura.service';

@Injectable({
  providedIn: 'root',
})
export class AssinaturaDBService {
  private _DB: any;
  private success: boolean = true;
  private lstAssinaturas: Assinatura[];
  constructor() {
    this.initialiseDB();
  }

  initialiseDB() {
    this._DB = new PouchDB('assinaturas');

    this._DB.info().then(function (info) {
      //console.log(info);
    });
  }

  public async assinaturas() {
    await this._DB.allDocs({ include_docs: true }).then((docs) => {
      this.lstAssinaturas = docs.rows.map((row) => {
        //row.doc.Date = new Date(row.doc.Date);
        //console.log(row.doc);
        //this.lstAssinaturas.push(row.doc);
        return row.doc;
      });
    });

    return this.lstAssinaturas;
  }

  addAssinatura(assinatura: Assinatura) {
    //console.log(assinatura);

    return new Promise((resolve) => {
      this._DB
        .post(assinatura)
        .catch((err) => {
          this.success = false;
          console.log(err);
        })
        .then(
          this._DB.info().then(function (info) {
            console.log(info);
          })
        );

      resolve(true);
    });
  }

  updateAssinatura(assinatura: Assinatura) {
    //console.log(assinatura);

    return new Promise((resolve) => {
      //console.log(assinatura._id);
      this._DB;
      this._DB
        .put(assinatura)
        .catch((err) => {
          this.success = false;
          //console.log(err);
        })
        .then(
          this._DB.info().then(function (info) {
            //console.log(info);
            //console.log(assinatura);
          })
        );

      resolve(true);
    });
  }

  deleteAssinatura(assinatura: Assinatura) {
    //console.log(assinatura);

    return new Promise((resolve) => {
      //console.log(assinatura._id);
      this._DB;
      this._DB
        .remove(assinatura)
        .catch((err) => {
          this.success = false;
          console.log(err);
        })
        .then(
          this._DB.info().then(function (info) {
            console.log(info);
            //console.log(assinatura);
          })
        );

      resolve(true);
    });
  }
}
