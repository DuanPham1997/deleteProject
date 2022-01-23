import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Product } from './model/product';
const proApi = "http://localhost:3000/product";
@Injectable({
  providedIn: 'root'
})
export class MainService {

  id = this.route.snapshot.params['id']
   getAllProduct():Observable<Product[]>{
      
    return this.http.get<Product[]>(proApi).pipe(
      tap(_s => console.log("connected"))
    )
   }

   detailProduct(id:number):Observable<Product>{
         return this.http.get<Product>(`${proApi}/${id}`).pipe(
           tap(_s => console.log("detail"))
         )
   }

   addProduct(productObj:Product):Observable<Product>{
      return this.http.post<Product>(proApi,productObj).pipe(
        tap(_s => console.log("ok"))
      )
   }

   editProduct(id:any,data:any):Observable<Product>{
     return this.http.put<Product>(`${proApi}/${id}`,data).pipe(

     )
   }

   delete(id:number){
     return this.http.delete(`${proApi}/${id}`);
   }
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
}
