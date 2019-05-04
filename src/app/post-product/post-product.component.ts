import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  id:number =0;
  description:string='';
  price:number=0;
  
  constructor(private service:ProductService) { }

  ngOnInit() {
  }
  addProduct()
  {
    this.service.addProduct(this.id,this.description,this.price)
    .subscribe(response=>{
      alert("data inserted");
      this.clear();

    });

  }
  clear()
  {
    this.id=0;
    this.description='';
    this.price=0;
    
  }

}
