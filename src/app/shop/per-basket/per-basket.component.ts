import { Component, OnInit } from '@angular/core';
import { MapperService } from '../mapper.service';
import { purchases } from '../purchases';
import { Branch, Basket } from '../types';

@Component({
  selector: 'app-per-basket',
  templateUrl: './per-basket.component.html',
  styleUrls: ['./per-basket.component.scss']
})
export class PerBasketComponent implements OnInit {
  branches: Branch[];
  constructor(private mapper: MapperService) {}

  ngOnInit() {
    this.branches = this.mapper.mapToBranches(purchases);
  }

  calculateBasketTotal(basket: Basket) {
    return basket.basketItems.map(bi => bi.price * bi.amount).reduce((bi1, bi2) => bi1 + bi2);
  }

  calculateBranchTotal(branch: Branch) {
    return branch.baskets.map(this.calculateBasketTotal).reduce((b1, b2) => b1 + b2);
  }
}
