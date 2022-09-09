import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Assinatura, AssinaturaService } from '../services/assinatura.service';

@Component({
  selector: 'app-assinatura-item',
  templateUrl: './assinatura-item-detail.page.html',
  styleUrls: ['./assinatura-item-detail.page.scss'],
  providers: [DatePipe],
})
export class AssinaturaItemDetailPage implements OnInit {
  public assinatura: Assinatura;

  constructor(
    private data: AssinaturaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.assinatura = this.data.getAssinaturaById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }

  public UpdateAssinatura() {
    // console.log('Chegou aqui');
    //console.log(this.assinatura);
    // console.log(this.assinatura.InfoPagamento);

    this.data.updateAssinatura(this.assinatura);

    this.router.navigate(['/assinatura-list']);
  }
}
