import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  password: any;
  users: any;
  message = "";
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.login = "";
    this.password = "";
  }

  Login() {
    let user = [this.login, this.password];
    this.dataService.login(user).subscribe(res => {
      if (res != null) {
        this.users = res;
        localStorage.setItem('login', this.users[0]["login"]);
        localStorage.setItem('password', this.users[0]["password"]);
        localStorage.setItem('type', this.users[0]["type"]);
        this.router.navigate(['../home']);
      } else {
        alert("numero or password incorrecte");
      }
    });
  }
}
