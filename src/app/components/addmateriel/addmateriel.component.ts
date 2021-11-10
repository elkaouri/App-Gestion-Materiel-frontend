import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Materiel } from 'src/app/materiel';

@Component({
  selector: 'app-addmateriel',
  templateUrl: './addmateriel.component.html',
  styleUrls: ['./addmateriel.component.css']
})
export class AddmaterielComponent implements OnInit {
  materiel = new Materiel();
  message = "";
  types: any;
  types1: any;
  soustypes: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.gettypes();
  }
 
  insertMateriel() {
    this.dataService.insertMateriel(this.materiel).subscribe(res => {
      alert("materiel inserted");
      this.materiel = new Materiel();
    });

  }
  gettypes() {
    this.dataService.gettypesforselect().subscribe(res => {
      this.types1 = res;
      this.types = this.types1[0];
    });
  }
  getSoustypes() {
    this.dataService.getSoustypes(this.materiel.name).subscribe(res => {
      this.soustypes = res;
      console.log(res);
    });
  }
}
