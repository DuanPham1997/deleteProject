import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../model/product';
import { MainService } from './../main.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addPro:any;
  constructor(private MainService:MainService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.addPro = new FormGroup({
      image:new FormControl(''),
      name:new FormControl(''),
      price:new FormControl('')
    })
  }
     onSubmit(){
           var id = Math.random() + this.addPro.value.price;
           var pro:Product = new Product(id,this.addPro.value.name,this.addPro.value.price,this.addPro.value.image);

           this.MainService.addProduct(pro).subscribe((res:any) => {
               alert('them moi thanh cong')
    
                 this.router.navigate(['']);

           })

     }
}
