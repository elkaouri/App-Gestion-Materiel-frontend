import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Materiel } from 'src/app/materiel';

@Component({
  selector: 'app-allvdp',
  templateUrl: './allvdp.component.html',
  styleUrls: ['./allvdp.component.css']
})
export class AllvdpComponent implements OnInit {
  materiels: Materiel[] = [];
  newallmateriels: Materiel[] = [];
  allmateriels: any;
  search: string = '';
  searchcodeqr: string = '';
  VDP: string = 'all';
  path: any;
  name: string = '';
  types1: any;
  types: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getMateriels();
    
  }
  changeVdp(vdp: any) {
    this.VDP = vdp;
    this.gettypes();
    this.getMateriels();
  }
  chaeckname() {
    return this.name != "" && this.checkVdp();
  }
  changeName(name: any) {
    this.name = name;
    if (this.name == "Balance") {
      this.materiels = this.newallmateriels.filter(res => {
        return res.name.match(this.name) || res.name.match("Pont Bascule");
      });
    } else {
      this.materiels = this.newallmateriels.filter(res => {
        return res.name.match(this.name);
      });

    }
  }

  gettypes() {
    this.dataService.gettypesforselect().subscribe(res => {
      this.types1 = res;
      this.types = this.types1[0];
    });
  }


  checkVdp() {
    return this.VDP != "all";
  }
  searchByname() {
    if (this.search != "") {
      this.materiels = this.newallmateriels.filter(res => {
        return res.name.match(this.search);
      });
    } else if (this.search == "") {
      this.materiels = this.newallmateriels;
    }

  }
  searchBycodeqr(x: any) {
    this.searchcodeqr = x.target.value;
    if (this.searchcodeqr != "") {
      this.materiels = this.newallmateriels.filter(res => res.codeqr == this.searchcodeqr);
    } else if (this.searchcodeqr == "") {
      this.materiels = this.newallmateriels;
    }
    x.target.value = "";

  }

  getMateriels() {
    if (this.VDP === "all") {
      this.dataService.getMateriels().subscribe(res => {
        this.allmateriels = res;
        this.newallmateriels = this.allmateriels;
        if (this.search != "") {
          this.materiels = this.newallmateriels.filter(res => {
            return res.name.match(this.search);
          });
        } else if (this.search == "") {
          this.materiels = this.newallmateriels;
        }
      });
    } else {
      this.dataService.getMaterielsByVDP(this.VDP).subscribe(res => {
        console.log(res);
        this.allmateriels = res;
        this.newallmateriels = this.allmateriels;
        if (this.search != "") {
          this.materiels = this.newallmateriels.filter(res => {
            return res.name.match(this.search);
          });
        } else if (this.search == "") {
          this.materiels = this.newallmateriels;
        }
      });
    }

  }


  deleteMateriels(id: any) {
    this.dataService.deleteMateriels(id).subscribe(res => {
      this.getMateriels();
      this.searchByname();
    });
  }
}
