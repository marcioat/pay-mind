import { Component, Input, OnInit } from '@angular/core';
import { Conta, ContaService } from '../services/conta.service';

@Component({
  selector: 'app-list-conta',
  templateUrl: './list-conta.component.html',
  styleUrls: ['./list-conta.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() conta: Conta;
  @Input() lstContas: Conta[];

  constructor(private contaService: ContaService) {}

  ngOnInit() {}

  public onDrag(event: any, conta: Conta) {
    //console.log(event.detail.ratio);
    //console.log(event.detail);
    if (event.detail.ratio > 2.7) {
      this.delete(conta);
    }
  }

  public delete(conta: Conta) {
    this.contaService.deleteConta(conta);

    var index = this.lstContas.indexOf(conta);
    this.lstContas.splice(index, 1);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
