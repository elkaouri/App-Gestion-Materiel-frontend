import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  login: any;
  type: any;
  password: any;
  users: any;
  message = "";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getusers();
  }

  checketat(etat: any) {
    return etat == 0;
  }
  insertUser() {
    let cmd = [this.login, this.password, this.type]
    this.dataService.insertUser(cmd).subscribe(res => {

      this.message = "user inserted";
      this.getusers();
    });
  }

  getusers() {
    this.dataService.getusers().subscribe(res => {
      this.users = res;
    });
  }


  deleteusers(id: any) {
    this.dataService.deleteusers(id).subscribe(res => {
      this.getusers();
    });
  }
}
