import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Materiel } from 'src/app/materiel';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  materiels: Materiel[] = [];
  allmateriels: any;
  vdp: any;
  name: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.vdp = this.route.snapshot.params.data;
    this.name = this.route.snapshot.params.name;
    this.getMaterielsInvoice();
  }
  getMaterielsInvoice() {
    let cmd = [this.vdp, this.name];
    this.dataService.getMaterielsInvoice(cmd).subscribe(res => {
      this.allmateriels = res;
      this.materiels = this.allmateriels;
    });
  }


}
