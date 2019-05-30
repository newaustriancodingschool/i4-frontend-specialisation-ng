import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../products-container/products-container.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {}

  async submit(product: Product) {
    await this.httpClient.post('http://localhost:3000/shop/products', product).toPromise();
    this.router.navigateByUrl('/shop/products');
  }
}
