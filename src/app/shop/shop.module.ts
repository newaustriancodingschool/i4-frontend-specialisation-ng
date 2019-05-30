import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerBasketComponent } from './per-basket/per-basket.component';
import { PerProductComponent } from './per-product/per-product.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    PerBasketComponent,
    PerProductComponent,
    ShopComponent,
    ProductsComponent,
    ProductsContainerComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [
          {
            path: 'per-basket',
            component: PerBasketComponent
          },
          {
            path: 'per-product',
            component: PerProductComponent
          },
          {
            path: 'products',
            component: ProductsContainerComponent
          },
          {
            path: 'add-product',
            component: AddProductComponent
          },
          {
            path: 'edit-product/:id',
            component: EditProductComponent
          }
        ]
      }
    ])
  ]
})
export class ShopModule {}
