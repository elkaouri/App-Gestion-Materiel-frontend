import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  login: any;
  oldpassword: any;
  password: any;
  users: any;
  message = "";
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.login = "";
    this.password = "";
  }

  Login() {
    let user = [this.login, this.password, this.oldpassword];
    this.dataService.updateuser(user).subscribe(res => {
      if (res) {
        this.router.navigate(['../']);
      } else {
        alert("numero or password incorrecte");
      }

    });
  }
}
