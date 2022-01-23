import { Product } from './../model/product';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
 product:any;
  constructor(private MainService:MainService,private route:ActivatedRoute) { }
id = this.route.snapshot.params['id']
  ngOnInit(): void {
    this.MainService.getAllProduct().subscribe((res:any) => {
        this.product = res;
    })
  }
  onDelete(id:number){
      this.MainService.delete(id).subscribe((res:any) => {
        this.reloadPage()
      });
      
      }
        
  
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
