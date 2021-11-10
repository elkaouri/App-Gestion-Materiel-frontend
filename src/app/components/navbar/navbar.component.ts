import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

  checktype() {
    return localStorage.getItem('type') == "admin";
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('type');
    this.router.navigate(['../']);
  }
}