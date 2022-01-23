import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:any;
  constructor(private MainService:MainService) { }
   
  ngOnInit(): void {
    this.MainService.getAllProduct().subscribe((res:any) => {
      this.product = res;
    })
  }

}
