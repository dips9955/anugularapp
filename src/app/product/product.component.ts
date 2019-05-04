import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product=[];
  constructor(private service:ProductService) 
  {
    this.getProduct();
   }

  ngOnInit() {
  }

  getProduct()
  {
    this.service.getProduct()
    .subscribe(response =>{
      this.product=response.json();
      console.log(this.product);
    });

  }
  deleteProduct(product)
  {
    alert(product.ProductID);
    this.service.deleteProduct(product.ProductID)
    .subscribe(responce =>{
      alert('delete');
      this.getProduct();
    });
  }
}
