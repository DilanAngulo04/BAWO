import { Component, OnInit } from '@angular/core';
import { company } from '../model/company.model';
import { Product } from '../model/product.model';
import { Talleres } from '../model/talleres.model';
import { CompanyService } from '../service/company.service';
import { ProductService } from '../service/product.service';
import { TalleresService } from '../service/talleres.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})


export class ContentComponent implements OnInit {

  products = new Array<Product>();
  talleres = new Array<Talleres>();
  empresa = new company();

  constructor(private talleresService:TalleresService, 
        private productServices:ProductService, private companyServices:CompanyService){
  }

  ngOnInit() {
    this.productServices.getAllProducts().subscribe(product => {
      this.products = product
      console.log(this.products)
    })
    this.talleresService.getAllTalleres().subscribe(taller => {
      this.talleres = taller
      console.log(this.talleres)
    })

    this.companyServices.getCompanyInfo().subscribe(comp => {
      this.empresa = comp
      console.log(this.empresa)
    })
        
  }
}
