import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Statistique } from 'src/app/statistique';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  statistique: Statistique[] = [];
  allstatistique: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.home();
  }

  home(){
    this.dataService.home().subscribe(res => {
      this.allstatistique=res;
      this.statistique=this.allstatistique;
      console.log(this.statistique);
    });
  }

}
