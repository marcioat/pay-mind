import { Component, Input, OnInit } from '@angular/core';
import { Conta } from '../services/conta.service';

@Component({
  selector: 'app-list-conta',
  templateUrl: './list-conta.component.html',
  styleUrls: ['./list-conta.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() conta: Conta;

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
