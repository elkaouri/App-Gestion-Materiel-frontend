import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Materiel } from 'src/app/materiel';

@Component({
  selector: 'app-editmateriel',
  templateUrl: './editmateriel.component.html',
  styleUrls: ['./editmateriel.component.css']
})
export class EditmaterielComponent implements OnInit {
  materiels: any;
  materiel = new Materiel();
  message = "";
  materielId: any;
  types1: any;
  types: any;
  soustypes: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.materielId = this.route.snapshot.params.id;
    this.getMateriel();
    this.gettypes();
  }

  gettypes() {
    this.dataService.gettypesforselect().subscribe(res => {
      this.types1 = res;
      this.types = this.types1[0];
      this.soustypes = this.types1[1];
      console.log(this.types);
    });
  }
  getMateriel() {
    this.dataService.getMateriel(this.materielId).subscribe(res => {
      this.materiels = res;
      this.materiel = this.materiels;
    });
  }

  editMateriel() {
    let cmd = [this.materielId, this.materiel]
    this.dataService.editMateriel(cmd).subscribe(res => {
      alert("materiel Updated");
      console.log(res);
    });
  }


}
