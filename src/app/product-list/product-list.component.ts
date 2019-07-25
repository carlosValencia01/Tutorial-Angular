import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  constructor( private prodService:ProductsService ) { 
    this.products = prodService.products;
  }

  ngOnInit() {
  }

  share(){
    alert("El producto se compartio!!");
  }

  onNotify(){
    alert("Notificacion del producto");
  }
}
