import { Component, Input, OnInit } from '@angular/core';
import { Assinatura, AssinaturaService } from '../services/assinatura.service';

@Component({
  selector: 'app-assinatura-list',
  templateUrl: './assinatura-list.component.html',
  styleUrls: ['./assinatura-list.component.scss'],
})
export class AssinaturaListComponent implements OnInit {
  @Input() assinatura: Assinatura;
  @Input() lstAssinaturas: Assinatura[];

  constructor(private assinaturaService: AssinaturaService) {}

  ngOnInit() {}

  public onDrag(event: any, assinatura: Assinatura) {
    //console.log(event.detail.ratio);
    //console.log(event.detail);
    if (event.detail.ratio > 2.7) {
      this.delete(assinatura);
    }
  }

  public delete(assinatura: Assinatura) {
    this.assinaturaService.deleteAssinatura(assinatura);

    var index = this.lstAssinaturas.indexOf(assinatura);
    this.lstAssinaturas.splice(index, 1);
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
