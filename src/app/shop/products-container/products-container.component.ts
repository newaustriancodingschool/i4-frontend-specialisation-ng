import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  name: string;
  code: string;
  price: number;
}

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  private url = 'http://localhost:3000/shop/products';
  products$: Observable<Product[]>;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.products$ = this.httpClient.get<Product[]>(this.url);
  }
}
