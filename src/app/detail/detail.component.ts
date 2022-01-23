import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  product:any;
  id = this.route.snapshot.params['id'];
  constructor(private MainService:MainService,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.MainService.detailProduct(this.id).subscribe((res:any) => {
        this.product = res;
      })
  }

}
