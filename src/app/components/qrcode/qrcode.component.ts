import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent {
  public myAngularxQrCode: string = '';
  constructor(private route: ActivatedRoute) {
    this.myAngularxQrCode = this.route.snapshot.params.id;

  }



}
