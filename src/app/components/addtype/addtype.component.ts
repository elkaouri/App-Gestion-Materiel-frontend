import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Type } from 'src/app/type';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent implements OnInit {
  type = new Type();
  types: any;
  message = "";
  types1: any;
  typesselect: any;
  typesselect1: any;
  existtype: string = ''
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.gettypes();
    this.gettypestypesselect();
  }

  gettypestypesselect() {
    this.dataService.gettypesforselect().subscribe(res => {
      this.typesselect1 = res;
      this.typesselect = this.typesselect1[0];
      console.log(res);
    });
  }

  insertType() {
    if (this.type.type == null) {
      this.type.type = this.existtype;
    }
    this.dataService.insertType(this.type).subscribe(res => {
      this.message = "type inserted";
      this.gettypes();
      this.gettypestypesselect();
      this.existtype = '';
      this.type = new Type();
    });
  }

  gettypes() {
    this.dataService.gettypes().subscribe(res => {
      this.types = res;
    });
  }


  deletetype(id: any) {
    this.dataService.deletetype(id).subscribe(res => {
      this.gettypes();
    });
  }
}
