import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Materiel } from 'src/app/materiel';

@Component({
  selector: 'app-qrcodeall',
  templateUrl: './qrcodeall.component.html',
  styleUrls: ['./qrcodeall.component.css']
})
export class QrcodeallComponent {
  title = 'app';
  search: string = '';
  public myAngularxQrCode: any;
  redd: string = "red";
  ProductQR: Materiel[] = [];
  ProductQR1: any;
  constructor(private dataService: DataService) {
    this.getMateriels();
  }


  affiche(x: any) {
    this.search = x;
    this.myAngularxQrCode = this.search;
  }


  getMateriels() {
    this.dataService.getMateriels().subscribe(res => {
      this.ProductQR1 = res;
      this.ProductQR = this.ProductQR1;
    });

  }


}
