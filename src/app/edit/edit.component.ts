import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Product } from './../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 editPro:any;
  product:any;
  constructor(private MainService:MainService,private route:ActivatedRoute,private FormBuilder:FormBuilder,private router:Router) { }
 id = this.route.snapshot.params['id']
  ngOnInit(): void {
     this.editPro = new FormGroup({
       name:new FormControl(''),
       price:new FormControl(''),
       image:new FormControl('')
     })
     
     this.MainService.detailProduct(this.id).subscribe((res:any) => {
       this.product = res;

       this.editPro = this.FormBuilder.group({
         name:res.name,
         price:res.price,
         image:res.image
       })
     })

    }
  
   onSubmit(){
       this.MainService.editProduct(this.id,this.editPro.value).subscribe((res:any) => {
         alert('sua thah cong');
         this.router.navigate(['']);
       })
   }

}
