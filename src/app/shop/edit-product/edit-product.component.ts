import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../products-container/products-container.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product$: Observable<Product>;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.product$ = this.httpClient.get<Product>(`http://localhost:3000/shop/products/${id}`);
  }

  async submit(product) {}

  async remove(product) {
    await this.httpClient.delete(`http://localhost:3000/shop/products/${product.id}`).toPromise();
    this.router.navigateByUrl('/shop/products');
  }
}
