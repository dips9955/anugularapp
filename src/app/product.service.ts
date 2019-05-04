import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  url:string="http://localhost:3000/product"

  constructor(private http:Http) 
  {

  }




  getProduct()
  {
    return this.http.get(this.url);
  }
  deleteProduct(id)
  {
    let newurl = this.url+'/'+id;
    return this.http.delete(newurl);
  }
  addProduct(id,description,price)
  {
    let product = {
      "id":id,
      "description":description,
      "price":price,
      
    }
    let header = new Headers({
      "Content-Type":"application/json"
    });
    let requestOption = new RequestOptions({
      headers:header
    });
    return this.http.post(this.url,product,requestOption);
  }
}
