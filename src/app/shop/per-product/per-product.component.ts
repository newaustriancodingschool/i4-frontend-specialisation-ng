import { Component, OnInit } from '@angular/core';
import { Product, BranchInProduct } from '../types';
import { MapperService } from '../mapper.service';
import { purchases } from '../purchases';

@Component({
  selector: 'app-per-product',
  templateUrl: './per-product.component.html',
  styleUrls: ['./per-product.component.scss']
})
export class PerProductComponent implements OnInit {
  products: Product[];
  constructor(private mapper: MapperService) {}

  ngOnInit() {
    this.products = this.mapper.mapToProducts(purchases);
  }

  calculateBranchTotal(branch: BranchInProduct) {
    return branch.basketItems.map(bi => bi.price * bi.amount).reduce((bi1, bi2) => bi1 + bi2);
  }

  calculateProductTotal(product: Product) {
    return product.branches.map(this.calculateBranchTotal).reduce((b1, b2) => b1 + b2);
  }
}
