import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  products = new Array<Product>();

  constructor(private productServices:ProductService){
  }

  ngOnInit() {
    this.productServices.getAllProducts().subscribe(product => {
      this.products = product
    })

        
  }
}
